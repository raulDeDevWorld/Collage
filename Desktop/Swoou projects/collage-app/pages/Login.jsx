import { onAuth, withGoogle} from '../firebase/utils'
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

    function loginWithGoogle(e) {
        e.preventDefault()
        withGoogle()
    }

    useEffect(() => {
        onAuth(setUserProfile, setUserData, postsIMG, setUserPostsIMG)
        if (user) router.replace('/')
    }, [user]);
    return (
        <div className={style.container}>
            <header className={style.header}>INICIO DE SESION COLLAGE</header>
            <main className={style.main}>
                <Image src="/robot.png" width="350" height="200" alt="User" />
                <br />
                <form className={style.form}>
                    <h2 className={style.subtitle}>LOGIN</h2>
                    <div className={style.buttonsContainer}>
                        <Button style='buttonSecondary' click={loginWithGoogle}>Iniciar Sesion Con Google</Button>
                        <Button style='buttonSecondary' click={loginWithGoogle}>Iniciar Sesion Con Facebook</Button>
                    </div>
                </form>
               

            </main>
            {success == false &&  <Error>ERROR: verifique e intente nuevamente</Error>}
            {success == 'complete' && <Error>Llene todo el formulario</Error>}
        </div>
    )
}

export default Login
