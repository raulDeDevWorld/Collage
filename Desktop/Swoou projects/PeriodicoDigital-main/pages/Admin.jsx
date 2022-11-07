import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { useUser } from '../context/Context.js'
import { WithAuth } from '../HOCs/WithAuth'
import Button from '../components/Button'
import Success from '../components/Success'
import Section from '../components/Section'
import styles from '../styles/Home.module.css'
import { handleSignOut } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


function Admin() {
  const { user, userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG } = useUser()
  const router = useRouter()

  console.log(userDB)

  function handlerUploadFile(e, fileName) {
    const file = e.target.files[0]
    uploadIMG(file, fileName, setUserSuccess, postsIMG, setUserPostsIMG)
  }
  function handlerLogout(e) {
    handleSignOut()
    router.push("/Login")

  }


  useEffect(() => {

    if (!user) router.replace('/Login')
  }, [user]);


  return (
    <div className={styles.container}>
      {success == "Cargando" && <Success>Cargando...</Success>}
      <main className={styles.main}>
        <div className={styles.containerLogout}>
          <span>Bienvenido Admin</span>
          <Button style="buttonPrimary" click={handlerLogout}>Logout</Button>
        </div>


        <div className={styles.header}>
          <label for="bannerIntro" className={styles.label} >Seleccionar Baner de Intro</label>
          <input type="file" id="bannerIntro" className={styles.inputFile} onChange={(e) => handlerUploadFile(e, `BannerIntro`)} accept="images" />
          <div className={styles.bannerIntroContainer}>
            {postsIMG.BannerIntro && <img className={styles.bannerIntroIMG} src={postsIMG.BannerIntro && postsIMG.BannerIntro} alt="Vercel Logo" />}
          </div>
          <div className={styles.portada}>
            <div className={styles.socialMedia}>
              <span>Siguenos en:</span>
              <div className={styles.socialMediaIcons}>
                <img src="/SocialMedia/internet.png" alt="SocialMedia" />
                <img src="/SocialMedia/facebook.png" alt="SocialMedia" />
                <img src="/SocialMedia/instagram.png" alt="SocialMedia" />
                <img src="/SocialMedia/twiter.png" alt="SocialMedia" />
                <img src="/SocialMedia/youtube.png" alt="SocialMedia" />
                <img src="/SocialMedia/instagram.png" alt="SocialMedia" />
              </div>
            </div>
            <video
              muted
              autoPlay={"autoplay"}
              preload="auto"
              loop
              className={styles.video}>
              <source src="/video.mp4" type="video/mp4" />
            </video>
            <div></div>
          </div>
        </div>
        <Navbar navbar={userDB.navbar} />




        <Section topic="inicio" publicView={false} ></Section>
        <Section topic="sociedad" publicView={false} ></Section>
        <Section topic="gestionDeGobierno" publicView={false} ></Section>
        <Section topic="politica" publicView={false} ></Section>
        <Section topic="salud" publicView={false} ></Section>
        <Section topic="economia" publicView={false} ></Section>
        <Section topic="deportes" publicView={false} ></Section>
        <Section topic="culturas" publicView={false} ></Section>
        <Section topic="empresarial" publicView={false} ></Section>
        <Section topic="internacional" publicView={false} ></Section>
        <Section topic="opinion" publicView={false} ></Section>









      </main>
    </div>
  )
}

export default WithAuth(Admin)









