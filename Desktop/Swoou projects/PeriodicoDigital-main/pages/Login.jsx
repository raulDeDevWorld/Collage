import { onAuth, signInWithEmail } from '../firebase/utils'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../context/Context'

import Image from 'next/image'
import { WithoutAuth } from '../HOCs/WithoutAuth'
import Button from '../components/Button'
import Error from '../components/Error'
import style from '../styles/Login.module.css'

function Login() {
    const { user, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()
    const router = useRouter()

    function loginWithEmailAndPassword(e) {
        e.preventDefault()
        if (e.target.form[0].value.length < 3 || e.target.form[1].value.length < 3) {
            setUserSuccess('complete')
            return
        }
        const email = e.target.form[0].value
        const password = e.target.form[1].value
        signInWithEmail(email, password, setUserSuccess)
    }

    useEffect(() => {
        onAuth(setUserProfile, setUserData, postsIMG, setUserPostsIMG)
        if (user) router.replace('/Admin')
    }, [user]);
    return (
        <div className={style.container}>
            <header className={style.header}>INICIO DE SESION PERIODICO HOY</header>
            <main className={style.main}>
                <Image src="/logo.png" width="350" height="150" alt="User" />
                <br />
                <form className={style.form}>
                    <h4 className={style.subtitle}>LOGIN</h4>
                        <input className={style.input} type="text" placeholder="example@gmail.com" />
                        <input className={style.input} type="password" placeholder="contraseña" />
                    <div className={style.buttonsContainer}>
                        <Button style='buttonSecondary' click={loginWithEmailAndPassword}>Iniciar Sesion</Button>
                    </div>
                </form>
            </main>
            {success == false &&  <Error>ERROR: verifique e intente nuevamente</Error>}
            {success == 'complete' && <Error>Llene todo el formulario</Error>}
        </div>
    )
}

export default Login
