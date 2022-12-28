import { onAuth, signInWithEmail, handleSignOut, removeData, writeUserData } from '../firebase/utils'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../context/Context'
import Particles from '../components/Particles'
import Collage from '../components/Collage'
import CollageQR from '../components/CollageQR'
import { WithAuth } from '../HOCs/WithAuth'
import Layout from '../layout/Layout'
import Error from '../components/Error'
import Modal from '../components/Modal'
import Button from '../components/Button'

import style from '../styles/Admin.module.css'

function Admin() {
  const { user, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()
  const router = useRouter()

  const [mode, setMode] = useState(false)

  const [arr, setArr] = useState([1, 2, 3])
  const [numeration, setNumeration] = useState([[1, 2, 3, 4, 5, 6, 7, 8, 9,], [10, 11, 12, 13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24, 25, 26, 27], [28, 29, 30, 31, 32, 33, 34, 35, 36]])
  const [pluss, setPluss] = useState(false)
  const [qr, setQr] = useState(true)
  const [templates, setTemplates] = useState({
    template1: [
      'h', 'h', 'h',
      'h', 'v', 'h',
      'h', 'v', 'h'],
    template2: [
      'h', 'h', 'h',
      'h', 'v', 'h',
      'h', 'h', 'h'],
    template3: [
      'h', 'h', 'v',
      'v', 'h', 'h',
      'v', 'h', 'h'],
    template4: [
      'v', 'v', 'v',
      'v', 'v', 'v',
      'v', 'v', 'v'],

  })

  console.log(userDB)

  const [opacity, setOpacity] = useState(false);
  function nextClick(e) {
    e.preventDefault()
    if (!navigator.onLine) {
      setUserSuccess('NoInternet')
      return
    }
    const code = e.target.form[0].value
    getCode(code, user.uid, setUserSuccess, userDB.profesor)
  }
  function backClick(e) {
    e.preventDefault()
    router.back()
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

  function active(i) {
    const obj = {
      uid: 'active'
    }
    writeUserData(`/users/${i}`, obj, setUserSuccess)
  }
  function desactive (i) {
    removeData(`/users/${i}/uid`, setUserData, setUserSuccess)
  }
   function remove(i) {
    removeData(`/users/${i}`, setUserData, setUserSuccess)
  }
  function removeQR() {
    setQr(!qr)
  }
  function x() {
    setMode(!mode)
  }

  return (


    <Layout>
      <div className={style.container}>

        <main className={style.main}>
          <h3 className={style.subtitle}> Administrar Usuarios</h3>

          {userDB.users &&
            <div>
              {Object.keys(userDB.users).map((i, index) => {
                return <div className={style.users}>
                  <span>{userDB.users[i].displayName}</span> 
                  <span className={userDB.users[i].uid ? style.green : style.red}>{userDB.users[i].uid ? 'Active' : 'No Active'}</span> 
                  <Button style='buttonSecondary' click={() => active(i)}>Activar</Button>
                  <Button style='buttonSecondary' click={() => desactive(i)}>Desactivar</Button>
                  <Button style='buttonPrimary' click={() => remove(i)}>Eliminar</Button>
                </div>
              }
              )}
            </div>}




        </main>
        {success == false && <Error>ERROR: verifique e intente nuevamente</Error>}
        {success == 'complete' && <Error>Llene todo el formulario</Error>}
        <Particles />
      </div>
      <Modal mode={mode} click={x} text={'Ingresa tu codigo de activación'}>
        <form className={style.formActive}>
          <input className={style.inputActive} type="text" placeholder='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' />
          <div className={style.buttonsContainer}>
            <Button style='buttonSecondary' click={backClick}>Atras</Button><Button style='buttonPrimary' click={nextClick}>Continuar</Button>
          </div>
        </form>
      </Modal>
    </Layout>

  )
}

export default WithAuth(Admin) 
