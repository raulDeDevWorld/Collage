import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import PostOne from '../components/PostOne'
import PostTwo from '../components/PostTwo'
import PostThree from '../components/PostThree'
import Section from '../components/Section'
import { useUser } from '../context/Context.js'
import { WithoutAuth } from '../HOCs/WithoutAuth'
import styles from '../styles/Home.module.css'
import { writeUserData, uploadIMG } from '../firebase/utils'
function Home() {
  const { userDB, setUserData, setUserSuccess, success, postsIMG } = useUser()

  console.log(postsIMG)

  function handlerEventChange(e) {
    const object = { [e.target.name]: e.target.value }
    writeUserData('/', object, setUserSuccess)

  }

  return (
   <div className={styles.container}>
      <main className={styles.main}>
      <div className={styles.header}>
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

        <Section topic="inicio" publicView={true} ></Section>
        <Section topic="sociedad" publicView={true} ></Section>
        <Section topic="gestionDeGobierno" publicView={true} ></Section>
        <Section topic="politica" publicView={true} ></Section>
        <Section topic="salud" publicView={true} ></Section>
        <Section topic="economia" publicView={true} ></Section>
        <Section topic="deportes" publicView={true} ></Section>
        <Section topic="culturas" publicView={true} ></Section>
        <Section topic="empresarial" publicView={true} ></Section>
        <Section topic="internacional" publicView={true} ></Section>
        <Section topic="opinion" publicView={true} ></Section>


        <footer className={styles.footer}>
          <div>
            <h5>MISIÓN</h5>
            <p>Informar, educar y contribuir a la formación de una cultura ciudadana en torno a la realidad nacionale internacional.</p>
          </div>
          <div>
          <h5>PUBLICIDAD ONLINE</h5>
            <span>(519-2) 2488973</span>
            <span>73002076</span>
            <span>60101760</span>
          </div>
          <div>
          <h5>VISIÓN</h5>
            <p>Ser el medio impreso y digital de mayor influencia en la construccion de un cultura ciudadana en torno a la realidad nacional e internacional</p>
          </div>
          <div>
          <h5>DIRECCIÓN</h5>
          <p>Calle Cañada Strongest, <br /> No. 1782 esq. Capitán Castrillo, <br /> Edif. Napolis, Piso 6, Of. 6B <br /> Zona San Pedro</p>
          </div>
          <div>
          <h5>SIGUENOS EN</h5>

          </div>
          <div>
          <h5>ESCRIBENOS A</h5>

          </div>
        </footer>
      </main>
    </div>
  )
}

export default WithoutAuth(Home)




