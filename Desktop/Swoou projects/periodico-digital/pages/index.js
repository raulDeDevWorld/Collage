import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.header}>
          <img src="/banner.png" alt="Vercel Logo" />
          <img src="/portada.png" alt="Vercel Logo" />
        </div>
        <Navbar />
        <div className={styles.banner}>
          <img src="/banner.png" alt="Vercel Logo" />
        </div>
        <div className={styles.gridOne}>
          <div><img src='/post-1.png' /></div>
          <div><img src='/post-2.png' /></div>
          <div><img src='/post-2.png' /></div>
          <div><img src='/post-1.png' /></div>
        </div>
        <div className={styles.banner}>
          <img src="/post-3.png" alt="Vercel Logo" />
        </div>
        <section className={styles.section} id="sociedad">
          <div className={styles.containerSubtitle}><h4 className={styles.subtitle}>SOCIEDAD</h4></div>
          <div className={styles.gridOne}>
            <div><img src='/post-1.png' /></div>
            <div><img src='/post-2.png' /></div>
            <div><img src='/post-2.png' /></div>
            <div><img src='/post-1.png' /></div>
          </div>
        </section>
        <section className={styles.section} id="seguridad">
        <div className={styles.containerSubtitle}><h4 className={styles.subtitle}>SEGURIDAD</h4></div>
          <div className={styles.gridOne}>
            <div><img src='/post-1.png' /></div>
            <div><img src='/post-2.png' /></div>
            <div><img src='/post-2.png' /></div>
            <div><img src='/post-1.png' /></div>
          </div>
        </section>
        <section className={styles.section} id="pais">
        <div className={styles.containerSubtitle}><h4 className={styles.subtitle}>GESTION DE GOBIERNO</h4></div>

          <div className={styles.gridOne}>
            <div><img src='/post-1.png' /></div>
            <div><img src='/post-2.png' /></div>
            <div><img src='/post-2.png' /></div>
            <div><img src='/post-1.png' /></div>
          </div>
        </section>


        <div className={styles.banner}>
          <img src="/banner.png" alt="Vercel Logo" />
        </div>

        <section className={styles.section} id="economia">
        <div className={styles.containerSubtitle}><h4 className={styles.subtitle}>POLITICA</h4></div>
          <div className={styles.gridOne}>
            <div><img src='/post-1.png' /></div>
            <div><img src='/post-2.png' /></div>
            <div><img src='/post-2.png' /></div>
            <div><img src='/post-1.png' /></div>
          </div>
        </section>
        <section className={styles.section} id="internacional">
        <div className={styles.containerSubtitle}><h4 className={styles.subtitle}>SALUD</h4></div>
          <div className={styles.gridOne}>
            <div><img src='/post-1.png' /></div>
            <div><img src='/post-2.png' /></div>
            <div><img src='/post-2.png' /></div>
            <div><img src='/post-1.png' /></div>
          </div>
        </section>
      </main>
    </div>
  )
}
