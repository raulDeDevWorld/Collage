import Link from 'next/link'
import { useRouter } from 'next/router'
import style from '../styles/Navbar.module.css'

export default function Navbar() {
    const { pathname } = useRouter()
    return (
        <header className={style.header}>
            <nav className={style.nav}>
               <Link href="#inicio" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#inicio" ? style.active : ''}`}>INICIO</a>
                </Link>
                <Link href="#sociedad" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#sociedad" ? style.active : ''}`}>SOCIEDAD</a>
                </Link>
                <Link href="#seguridad" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#seguridad" ? style.active : ''}`}>SEGURIDAD</a>
                </Link>
                <Link href="#gestionDeGobierno" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#gestionDeGobierno" ? style.active : ''}`}>GESTIÓN DE GOBIERNO</a>
                </Link>
                <Link href="#politica" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#politica" ? style.active : ''}`}>POLÍTICA</a>
                </Link>
                <Link href="#salud" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#salud" ? style.active : ''}`}>SALUD</a>
                </Link>
                <Link href="#economia" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#economia" ? style.active : ''}`}>ECONOMIA</a>
                </Link>
                <Link href="#deportes" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#deportes" ? style.active : ''}`}>DEPORTES</a>
                </Link>
                <Link href="#culturas" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#culturas" ? style.active : ''}`}>CULTURAS</a>
                </Link>
                <Link href="#empresarial" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#empresarial" ? style.active : ''}`}>EMPRESARIAL</a>
                </Link>
                <Link href="#internacional" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#internacional" ? style.active : ''}`}>INTERNACIONAL</a>
                </Link>
                <Link href="#opinion" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#opinion" ? style.active : ''}`}>OPINIÓN</a>
                </Link>
                
              
            </nav>
        </header>
    )
}