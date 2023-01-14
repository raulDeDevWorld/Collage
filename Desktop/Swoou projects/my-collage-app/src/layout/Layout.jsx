import { handleSignOut } from '../firebase/utils'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { WithAuth } from '../HOCs/WithAuth'

import Button from '../components/Button'
import style from '../styles/Layout.module.css'
import { useUser } from '../context/Context'

function Layout(props) {
    const router = useRouter()


    const { user, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()

    function logout() {
        handleSignOut()
    }
    function redirect(rute) {
        router.push(rute)
    }
    console.log(user)
    console.log(userDB)
    return (
        <>
            <header className={style.header}>
                <p>Bienvenido a OBZON</p>
                <div className={style.containerButtons}>

                    {user && userDB && userDB.users && userDB.users[user.uid] && userDB.users[user.uid].rol && userDB.users[user.uid].rol == 'Admin' &&
                        <>
                            <Button style='buttonSecondary' click={() => redirect('/')}>
                                Home
                            </Button>
                            <img src="/home.svg" className={style.icon} alt="power" onClick={() => redirect('/')} />
                            <Button style='buttonSecondary' click={() => redirect('/Admin')}>
                                Admin
                            </Button>
                            <img src="/user.svg" className={style.icon} alt="power" onClick={() => redirect('/Admin')} />
                            <Button style='buttonSecondary' click={() => redirect('/UuidController')}>
                                Generar IDU
                            </Button>
                            <img src="/config.svg" className={style.icon} alt="power" onClick={() => redirect('/UuidController')} />
                        </>}
                    <Button style='buttonSecondary' click={logout}>
                        Cerrar Sesion
                    </Button>
                    <img src="/power.svg" className={style.icon} alt="power" onClick={logout} />
                </div>
            </header>
            <main className={style.main} >{props.children}</main>
        </>

    )
}



export default Layout













// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react"
// import style from "../styles/StylesPDF.module.css"
// import InvoicePDF from "../components/pdf"
// import { usePDF } from "@react-pdf/renderer";


// const {PDFDownloadLink} = dynamic(() => import("@react-pdf/renderer"), {
//     ssr: false,
//   });
// //   const InvoicePDF = dynamic(() => import("../components/pdf"), {
// //     ssr: false,
// //   });

// const View = () => {
//     const [instance, updateInstance] = usePDF({document: InvoicePDF})
//     const [client, setClient] = useState(false);
//     // useEffect(() => {
//     //     setClient(true)
//     // }, []);

//     if(instance.loading){
//         return <div>loading</div>
//     }
//     if(instance.error){
//         return <div>error</div>
//     }

//     console.log(instance.url)
//     return(
//         <div className={style.style}>
//             {/* {client && <PDFDownloadLink document={<InvoicePDF />}>
// {
//     ({loading})=>{
//         return loading?'loading': 'get'
//     }
// }
//             </PDFDownloadLink>} */}




//         <a href={instance.url} style={{display: 'block'}} download='test.pdf' >download</a>
//         </div>
//     )
// }


// export default View