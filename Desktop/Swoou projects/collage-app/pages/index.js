import { onAuth, signInWithEmail, handleSignOut } from '../firebase/utils'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../context/Context'

import Collage from '../components/Collage'
import { WithAuth } from '../HOCs/WithAuth'
import Layout from '../layout/Layout'
import Error from '../components/Error'
import style from '../styles/Home.module.css'

function Home() {
  const { user, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()
  const router = useRouter()

  const [arr, setArr] = useState([1])
  const [pluss, setPluss] = useState(false)


  const [opacity, setOpacity] = useState(false);

function arrItemsHandler () {

  const copyListItems = [...arr]
  const arrPop = copyListItems.pop()
  setArr([...arr, arrPop == undefined ? 1 : arrPop + 1])
}

function plussButton (key) {
  setPluss(!pluss)
}

function remove (id) {
 const newArr = arr.filter(i=> i !== id)
 console.log(newArr)
 setArr(newArr)
}



  return (


    <Layout>
      <div className={style.container}>

        <main className={style.main}>
          {/* <Image src="/robot.png" width="350" height="200" alt="User" /> */}

          <h1>Cargar Albun</h1>

          <br />
          {
            arr.map((i) => <Collage id={i} remove={remove}/> )
          }
                    <button className={`${style.activator}`} onClick={arrItemsHandler}>Activar cuenta</button>

          <button className={`${style.pluss} ${pluss === true ? style.add: ''}`} onClick={arrItemsHandler}>add</button>
          <button className={`${style.pluss} ${pluss === true ? style.qr: ''}`} onClick={arrItemsHandler}>QR</button>
          <button className={`${style.pluss} ${pluss === true ? style.pdf : ''}`} onClick={arrItemsHandler}>pdf</button>
          <button className={`${style.pluss} ${style.plussFont}`} onClick={plussButton}>+</button>


        </main>
        {success == false && <Error>ERROR: verifique e intente nuevamente</Error>}
        {success == 'complete' && <Error>Llene todo el formulario</Error>}
      </div>
    </Layout>

  )
}

export default WithAuth(Home) 
