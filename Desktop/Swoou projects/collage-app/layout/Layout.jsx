import { handleSignOut } from '../firebase/utils'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '../components/Button'
import style from '../styles/Layout.module.css'

export default function Layout(props) {
    const router = useRouter()

    function logout() {
        handleSignOut()
    }
    function redirect() {
        router.push("/Admin")
    }
    console.log(router.pathname)
    return (
        <>
            <header className={style.header}>
                <p>Bienvenido a OBZON</p>
                <div className={style.containerButtons}>
                   
                    <Button style='buttonSecondary' click={logout}>
                        Cerrar Sesion
                    </Button>
                    <div className={style.power}>
                        <Image src="/power.svg" width="26" height="26" alt="power" onClick={logout}/>
                    </div>
                </div>

            </header>
            <main className={style.main}>{props.children}</main>
        </>

    )
}
