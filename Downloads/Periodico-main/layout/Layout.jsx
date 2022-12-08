import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { useUser } from '../context/Context.js'
import { WithoutAuth } from '../HOCs/WithoutAuth'
import Button from '../components/Button'
import Success from '../components/Success'
import Error from '../components/Error'
import Link from 'next/link'
import FormAdds from '../components/FormAdds'
import Modal from '../components/Modal'

import BannerLeft from '../components/BannerLeft'
import BannerRight from '../components/BannerRight'
import BannerPortada from '../components/BannerPortada'

import Section from '../components/Section'
import Date from '../components/Date'
import Header from '../components/Header'

import styles from '../styles/Layout.module.css'
import { handleSignOut } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function Layout({children}) {
    const { userDB, setUserData, monthAndYear, setUserSuccess, success, postsIMG, showImg, date, setUserDate } = useUser()
    
    const [dataEditor, setDataEditor] = useState(null)

    
    const router = useRouter()

    const [periodicoPDF, setPeriodicoPDF] = useState(false);
    const [periodicoPDFEffect, setPeriodicoPDFEffect] = useState(false);

    function handlerClickEnlace(data) {
        router.pathname != "/Admin" && window.open(data.href, data.target)
        router.pathname == "/Admin" && setDataEditor(data)
        // console.log(data.href, data.target)
      }

    function handlerClick(url) {
        router.push(url)
    }
    function whatsappClickHandler() {
        router.push("https://api.whatsapp.com/send?phone=+59160589090&text=Buenas%20Hoy...")
    }

    function handlerPDFView(parametro) {
        parametro && setPeriodicoPDFEffect(true)
        setPeriodicoPDF(!periodicoPDF)
    }



    const periodicoPDFImg = {
        height: '100%',
        width: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
        borderRadius: '5px',
        boxShadow: '0 0 15px black',
        transition: 'all',
        transitionDuration: '.3s',

    }



    useEffect(() => {
        if (periodicoPDFEffect == true) {
            return
        }
        setTimeout(() => {
            setPeriodicoPDF(!periodicoPDF)
        }, 2000)

    }, [periodicoPDF == "User" ? '' : periodicoPDF])

    return (

        <div className={styles.container}>
            <div>
                {userDB["BannerTop"] && <BannerPortada ruta={'/BannerTop'} carpeta="BannerTop" click={handlerClickEnlace}></BannerPortada>}
            </div>
            <div>
                {userDB["BannerLeft"] && <BannerLeft ruta={'/BannerLeft'} carpeta="BannerLeft" click={handlerClickEnlace}></BannerLeft>}
            </div>
            <div>
                {userDB["BannerRight"] && <BannerRight ruta={'/BannerRight'} carpeta="BannerRight" click={handlerClickEnlace}></BannerRight>}
            </div>
            <main>{children}</main>
            {dataEditor && <Modal post={dataEditor.key} topic={dataEditor.key} i={dataEditor.i} close={handlerClickEnlace}></Modal>}

        </div>

    )
}

export default Layout


