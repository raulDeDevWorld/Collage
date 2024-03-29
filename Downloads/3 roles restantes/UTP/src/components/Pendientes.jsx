import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./alert"
import { login, signup, logout, loginWithGoogle, resetPassword } from "../firebase"
import { useAuth } from '../context/AuthContext.js'
import { removeDataItem, writeUserData } from "../firebase";
import Modal from './SolicitudModal/Modal'
import Error from './Error'
import Success from './Success'
import { getList } from "../storageFB";

export function SolicitudesData() {
    const { userDB, setUserData, postsIMG, setUserPostsIMG, setUserSuccess, success, } = useAuth()
    const [modal, setModal] = useState(false);
    const [feedback, setFeedback] = useState({})
    const [item, setItem] = useState(null)
    const [funcion, setFuncion] = useState(null)
    const [estado, setEstado] = useState(undefined) 


    const navigate = useNavigate();



    const handlerSolicitud = (item, data) => {
        const object = { estado: data, ...feedback }
        const url = `solicitudes/${item}`
        const complemento = ''
        writeUserData(url, complemento, object)
        setUserSuccess('EnviadoCV')
        setModal(false)
    }
    // const devolver = (item) => {
    //     const observations = feedback[item] ? { observaciones: feedback[item] } : null;
    //     const object = { estado: 'Reprobado', ...observations }
    //     const url = `solicitudes/${item}`
    //     const complemento = ''
    //     writeUserData(url, complemento, object)
    //     setUserSuccess('DevueltoCV')

    // }

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFeedback({ ...feedback, [name]: value })
    }

    const handlerItemClick = (item) => {
        navigate(`/SolicitudesData/${item}`)
    }
    const handlerModal = (item, data) => {
        setFuncion(data)
        setItem(item)
        setModal(!modal)
    }

    const handlerEstado = (data) => {
        setEstado(data)
    }

    const close = () => {
        setModal(!modal)
    }


    useEffect(() => {
        postsIMG === true && getList(postsIMG, setUserPostsIMG)
    }, [postsIMG]);
    return (
        <>

            {success == 'Reprobado' && <Error>Reprobado</Error>}
            {success == 'Aprobado' && <Success>Aprobado</Success>}
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class={`nav-link ${estado === undefined && 'active'}`} href="#!" onClick={() => handlerEstado(undefined)}>Nuevos</a>
                </li>
                <li class="nav-item">
                    <a class={`nav-link ${estado === 'Enviado' && 'active'}`} href="#!" onClick={() => handlerEstado('Enviado')}>Enviadas</a>
                </li>
                <li class="nav-item">
                    <a class={`nav-link ${estado === 'Devuelto' && 'active'}`} href="#!" onClick={() => handlerEstado('Devuelto')}>Devueltos</a>
                </li>
                <li class="nav-item">
                    <a class={`nav-link ${estado === 'Reconsiderada' && 'active'}`} href="#!" onClick={() => handlerEstado('Reconsiderada')}>Reconsideradas</a>
                </li>
            </ul>

            <table className="table h-100">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre del solicitante</th>
                        <th>Apellidos</th>
                        <th>Cedula</th>
                        <th>Tasa de interes anual</th>
                        <th>Precio de venta</th>
                        <th>Observationes</th>
                        <th>Fecha de E</th>

                        {estado ===  'Devuelto' && <th>Enviar</th>}
                        {estado === 'Enviado'&& <th>Devolver</th>}
                        { estado === undefined && <th>Enviar</th>}
                        { estado === undefined && <th>Devolver</th>}

                    </tr>
                </thead>


                {userDB && Object.keys(userDB.solicitudes).map((item, index) =>
                    <>
                        {userDB.solicitudes[item].estado == estado && <tbody>

                            <tr>
                                <th scope="row">{index}</th>
                                <td onClick={() => handlerItemClick(item)}>{userDB.solicitudes[item].Nombres}</td>
                                <td onClick={() => handlerItemClick(item)}>{userDB.solicitudes[item].Apellidos}</td>
                                <td onClick={() => handlerItemClick(item)}>{userDB.solicitudes[item].Cedula}</td>
                                <td>{userDB.solicitudes[item]["Tasa de interes anual"]}</td>
                                <td>{userDB.solicitudes[item]["Precio de ventas"]}$</td>
                               <td> <input name='observaciones' onChange={handleOnChange} placeholder="Observaciones" /> </td>
                               <td><input type='date' name='fecha' onChange={handleOnChange} /></td>
                               {estado === 'Devuelto'  && <td><button type="button" class="btn btn-success" onClick={() => handlerModal(item,  'Enviado')}>Enviar/Guardar</button></td>}
                                {estado === 'Enviado'  && <td><button type="button" class="btn btn-danger" onClick={() => handlerModal(item, 'Devuelto')}>Devolver/Guardar</button></td>}
                                { estado === undefined && <td><button type="button" class="btn btn-success" onClick={() => handlerModal(item,  'Enviado')}>Enviar/Guardar</button></td>}
                                { estado === undefined && <td><button type="button" class="btn btn-danger" onClick={() => handlerModal(item, 'Devuelto')}>Devolver/Guardar</button></td>}
                            
                            </tr>
                        </tbody>}
                    </>
                )}
            </table>
            {modal && <Modal item={item} funcion={handlerSolicitud} funcionName={funcion} close={close} />}

        </>
    );
}
export default SolicitudesData;
