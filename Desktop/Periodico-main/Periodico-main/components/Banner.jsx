import { useUser } from '../context/Context.js'
import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/Banner.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link'


export default function Banner({ ruta, carpeta, click }) {

    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date, monthAndYear } = useUser()
    console.log(userDB[ruta])
    const router = useRouter()
    const buttonStyle = {
        width: "30px",
        background: 'none',
        border: '0px'
    };

    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}></button>,
        nextArrow: <button style={{ ...buttonStyle }}></button>
    }


    function redirect(ruta) {
        window.open(ruta, '_blank')
    }


    return (
        <div className={styles.containerFade} >
            {userDB[ruta] && postsIMG &&


                <Zoom transitionDuration={800} duration={2000} scale={1.4}{...properties} indicators={true}>




                    {
                        Object.keys(userDB[ruta][carpeta]).map((i, index) =>
                            <div className="each-slide" key={index}>

                                <div>
                                    {
                                        router.pathname === "/Admin" ?
                                            <span onClick={() => click({ key: carpeta, i })}><img className={styles.sliderIMG} src={postsIMG[`${ruta}/${i}`]} /></span>
                                            : <span onClick={() => redirect(userDB[ruta]['BannerBottom'][i].enlace ? userDB[ruta]['BannerBottom'][i].enlace : '#')}><img className={styles.sliderIMG} src={postsIMG[`${ruta}/${i}`]} style={{ objectPosition: `center` }} /></span>
                                    }
                                    <Link href={`https://api.whatsapp.com/send?phone=${userDB[ruta][carpeta][i].whatsapp}&text=Hola%20vi%20su%20anuncion%20en%20el%20PERIODICO%20HOY%20`} legacyBehavior>
                                        <a target="_blank"><img className={styles.sliderWhatsapp} src={`/SocialMedia/whatsapp.svg`} /></a>
                                    </Link>
                                </div>
                            </div>
                        )}
                </Zoom>
            }
        </div>)
}