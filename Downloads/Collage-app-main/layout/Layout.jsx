import { handleSignOut } from '../firebase/utils'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '../components/Button'
import style from '../styles/Layout.module.css'
import { useUser } from '../context/Context'

export default function Layout(props, {width}) {
    const router = useRouter()


    const { user, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()

    function logout() {
        handleSignOut()
    }
    function redirect(rute) {
        router.push(rute)
    }
    console.log(router.pathname)
    return (
        <>
            <header className={style.header}>
                <p>Bienvenido a OBZON</p>
                <div className={style.containerButtons}>
                    {userDB.users && userDB.users[user.uid] && userDB.users[user.uid].rol && userDB.users[user.uid].rol == 'Admin' &&
                        <>
                            <Button style='buttonSecondary' click={() => redirect('/')}>
                                Home
                            </Button>
                            <div className={style.power}>
                                <Image src="/home.svg" width="26" height="26" alt="power" onClick={() => redirect('/')} />
                            </div>
                           <Button style='buttonSecondary' click={() => redirect('/Admin')}>
                                Admin
                            </Button>
                            <div className={style.power}>
                                <Image src="/user.svg" width="26" height="26" alt="power" onClick={() => redirect('/Admin')} />
                            </div>
                           <Button style='buttonSecondary' click={() => redirect('/UuidController')}>
                                Generar IDU
                            </Button>
                            <div className={style.power}>
                                <Image src="/config.svg" width="26" height="26" alt="power" onClick={() => redirect('/UuidController')} />
                            </div>
                        </>}
                    <Button style='buttonSecondary' click={logout}>
                        Cerrar Sesion
                    </Button>
                    <div className={style.power}>
                        <Image src="/power.svg" width="26" height="26" alt="power" onClick={logout} />
                    </div>
                </div>
            </header>
            <main className={style.main} style={{minWidth: width ? width : '100vw'}}>{props.children}</main>
        </>

    )
}
