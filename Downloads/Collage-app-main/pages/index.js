import { onAuth, signInWithEmail, handleSignOut, getCode } from '../firebase/utils'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../context/Context'
import Particles from '../components/Particles'
import Collage from '../components/Collage'
import CollageQR from '../components/CollageQR'
import { WithAuth } from '../HOCs/WithAuth'
import Layout from '../layout/Layout'
import Error from '../components/Error'
import Success from '../components/Success'

import Modal from '../components/Modal'
import Button from '../components/Button'

import style from '../styles/Home.module.css'

function Home() {
  const { user, userDB, setUserProfile, setUserSuccess, success, setUserData, pageOne, pageTwo, pageThree, handlerPageView } = useUser()
  const router = useRouter()

  const [mode, setMode] = useState(false)

  const [arr, setArr] = useState([1, 2, 3])
  const [numeration, setNumeration] = useState([[1, 2, 3, 4, 5, 6, 7, 8, 9,], [10, 11, 12, 13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24, 25, 26, 27], [28, 29, 30, 31, 32, 33, 34, 35, 36]])
  const [pluss, setPluss] = useState(false)
  const [qr, setQr] = useState(true)



  const [opacity, setOpacity] = useState(false);



  function nextClick(e) {
    e.preventDefault()
    if (!navigator.onLine) {
      setUserSuccess('NoInternet')
      return
    }
    const code = e.target.form[0].value
    console.log(code)
    getCode(code, user.uid, setUserSuccess)
  }

  function backClick(e) {
    e.preventDefault()
    router.p()
  }

  function arrItemsHandler() {
    if (arr.length > 2) {
      return
    }
    const copyListItems = [...arr]
    const arrPop = copyListItems.pop()
    setArr([...arr, arrPop == undefined ? 1 : arrPop + 1])
  }
  function handlerQR() {
    setQr(true)
  }
  function plussButton(key) {
    setPluss(!pluss)
  }

  function remove(id) {
    const newArr = arr.filter(i => i !== id)
    console.log(newArr)
    setArr(newArr)
  }

  function remove(data) {
    handlerPageView(data)
  }
  function removeQR() {
    setQr(!qr)
  }
  function handlerPDF() {
    router.push('/PdfViewer')
  }
  function x() {
    setMode(!mode)
  }

  return (
    <Layout >
      <div className={style.container}>

        <main className={style.main}>
          <button className={`${style.activator}`} onClick={x}> {userDB.users && userDB.users[user.uid] && userDB.users[user.uid].uid ? 'Eres Premium' : 'Activar cuenta'}</button>
          <Collage id={0} remove={() => remove('pageOne')} />
          <Collage id={1} remove={() => remove('pageTwo')} />
          <Collage id={2} remove={() => remove('pageThree')} />
          <Collage id={3} remove={() => remove('pageThree')} />
          <Collage id={4} remove={() => remove('pageFour')} />
          {/* {qr && <CollageQR id={'QR'} numeration={numeration[3]} dataOrientations={templates[`template4`]} remove={removeQR} />} */}
          {/* <button className={`${style.pluss} ${pluss === true ? style.add : ''}`} onClick={arrItemsHandler}>add</button>
          <button className={`${style.pluss} ${pluss === true ? style.qr : ''}`} onClick={handlerQR}>QR</button>
          <button className={`${style.pluss} ${pluss === true ? style.pdf : ''}`} onClick={handlerPDF}>pdf</button>
          <button className={`${style.pluss} ${style.plussFont}`} onClick={plussButton}>+</button> */}
          <button className={`${style.pluss} ${style.plussFont}`} onClick={handlerPDF}>pdf</button>
        </main>
        {success == 'NonExist' && <Error>ERROR: codigo no existente</Error>}
        {success == 'InUse' && <Error>ERROR: codigo en uso</Error>}
        {success == 'Premium' && <Success>Felicidades, ERES PREMIUM !!</Success>}
        <Particles />
      </div>
      <Modal mode={mode} click={x} text={userDB.users && userDB.users[user.uid] && userDB.users[user.uid].uid ? 'Felicidades Eres Premium' : 'Ingresa tu codigo de activación'}>
        <form className={style.formActive}>

          {userDB.users && userDB.users[user.uid] && userDB.users[user.uid].uid
            ? <p className={style.codeActive}>   {userDB.users[user.uid].uid}     </p>


            : <input className={style.inputActive} type="text" placeholder='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' />
          }
          <div className={style.buttonsContainer}>
          {userDB.users && userDB.users[user.uid] && userDB.users[user.uid].uid ?'': <Button style='buttonPrimary' click={nextClick}>Continuar</Button>}
          </div>
        </form>
      </Modal>
    </Layout>
  )
}

export default WithAuth(Home) 
