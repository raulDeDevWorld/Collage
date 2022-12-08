import style from '../styles/Modal.module.css'
import { writeUserData, getData, removeData } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useUser } from '../context/Context.js'
import Button from '../components/Button'
import { useState, useEffect } from 'react'
import { getDate, getDayMonthYear, getMonthAndYear } from '../utils/Utils'

export default function Error({ post, i, topic, close }) {
    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, monthAndYear, dayMonthYear } = useUser()

    const [data, setData] = useState({})

    const [postImage, setPostImage] = useState(null)
    const [urlPostImage, setUrlPostImage] = useState(null)

    const [bannerTopImage, setBannerTopImage] = useState(null)
    const [urlBannerTopImage, setUrlBannerTopImage] = useState(null)

    const [bannerBottomImage, setBannerBottomImage] = useState(null)
    const [urlBannerBottomImage, setUrlBannerBottomImage] = useState(null)



    const [bannerPortadaImage, setBannerPortadaImage] = useState(null)
    const [urlBannerPortadaImage, setUrlBannerPortadaImage] = useState(null)

    const [bannerLeftImage, setBannerLeftImage] = useState(null)
    const [urlBannerLeftImage, setUrlBannerLeftImage] = useState(null)

    const [bannerRightImage, setBannerRightImage] = useState(null)
    const [urlBannerRightImage, setUrlBannerRightImage] = useState(null)
    //console.log(data)

    console.log(success)

    //console.log(urlPostImage)

    function manageInputIMGSetting(e) {

        ("funcionando")
        const fileName = `${e.target.name}`
        const file = e.target.files[0]

        if (fileName === 'PostImage') {
            setPostImage(file)
            setUrlPostImage(URL.createObjectURL(file))
        }

        if (fileName === 'BannerTopImage') {
            setBannerTopImage(file)
            setUrlBannerTopImage(URL.createObjectURL(file))
        }

        if (fileName === 'BannerBottomImage') {
            setBannerBottomImage(file)
            setUrlBannerBottomImage(URL.createObjectURL(file))
        }

        if (fileName === 'BannerPortadaImage') {
            setBannerPortadaImage(file)
            setUrlBannerPortadaImage(URL.createObjectURL(file))
        }

        if (fileName === 'BannerLeftImage') {
            setBannerLeftImage(file)
            setUrlBannerLeftImage(URL.createObjectURL(file))
        }

        if (fileName === 'BannerRightImage') {
            setBannerRightImage(file)
            setUrlBannerRightImage(URL.createObjectURL(file))
        }
    }

    function handlerEventChange(e) {
        const name = e.target.name
        const value = e.target.value
        const object = { [name]: value }
        setData({ ...data, ...object })
    }








    function handlerEventChange(e) {
        const name = e.target.name
        const value = e.target.value
        const object = { [name]: value }
        setData({ ...data, ...object })
    }








    function saveConfig(e, key) {
        e.preventDefault()

        const monthYear = monthAndYear ? monthAndYear : getMonthAndYear()
        const newDate = new Date()
        if (key == "SavePost") {
            const ruteDB = `/${topic}/Posts` // Nov-2022/Inicio
            const ruteSTG = `${topic}` // Nov-2022/
            const fileName = `PostImage_${i}` // PostImage_Tue Nov 15 2022 
            const object = { [fileName]: { description: data.descriptionPost ? data.descriptionPost : null, enlace: data.enlacePost ? data.enlacePost : `${newDate}`, objectFit: data.objectPositionPost ? data.objectPositionPost : 'center' } }
            writeUserData(ruteDB, object, setUserSuccess, setUserData)
            postImage && uploadIMG(ruteSTG, fileName, postImage, setUserSuccess, monthYear)
        }
        if (key == "SaveBannerTop") {

            const ruteDB = `/${topic}/BannerTop` // Nov-2022/Inicio
            const ruteSTG = `${topic}` // Nov-2022/
            const fileName = i // PostImage_Tue Nov 15 2022 
            const object = { [fileName]: { whatsapp: data.whatsappBannerTop ? data.whatsappBannerTop : null, enlace: data.enlaceBannerTop ? data.enlaceBannerTop : null, dateInit: data.dateInitBannerTop ? data.dateInitBannerTop : userDB[topic]["BannerTop"][i].dateInit, dateFinish: data.dateFinishBannerTop ? data.dateFinishBannerTop : userDB[topic]["BannerTop"][i].dateFinish } }
            writeUserData(ruteDB, object, setUserSuccess, setUserData)
            bannerTopImage && uploadIMG(ruteSTG, fileName, bannerTopImage, setUserSuccess, monthYear)

        }
        if (key == "SaveBannerBottom") {


            const ruteDB = `/${topic}/BannerBottom` // Nov-2022/Inicio
            const ruteSTG = `${topic}` // Nov-2022/
            const fileName = i // PostImage_Tue Nov 15 2022 
            const object = { [fileName]: { whatsapp: data.whatsappBannerBottom ? data.whatsappBannerBottom : null, enlace: data.enlaceBannerBottom ? data.enlaceBannerBottom : null, dateInit: data.dateInitBannerBottom ? data.dateInitBannerBottom : userDB[topic]["BannerBottom"][i].dateInit, dateFinish: data.dateFinishBannerBottom ? data.dateFinishBannerBottom : userDB[topic]["BannerBottom"][i].dateFinish } }
            writeUserData(ruteDB, object, setUserSuccess, setUserData)
            bannerBottomImage && uploadIMG(ruteSTG, fileName, bannerBottomImage, setUserSuccess, monthYear)
        }



        if (key == "SaveBannerLeft") {
      
              const ruteDB = `/BannerLeft` // Nov-2022/Inicio
              const ruteSTG = `BannerLeft` // Nov-2022/
              const fileName = i // PostImage_Tue Nov 15 2022 
              const object = { [fileName]: { whatsapp: data.whatsappBannerLeft ? data.whatsappBannerLeft : null , enlace: data.enlaceBannerLeft ? data.enlaceBannerLeft : null, dateInit: data.dateInitBannerLeft ? data.dateInitBannerLeft : userDB["BannerLeft"][i].dateInit, dateFinish: data.dateFinishBannerLeft ? data.dateFinishBannerLeft : userDB["BannerLeft"][i].dateFinish } }
              writeUserData(ruteDB, object, setUserSuccess, setUserData)
              bannerPortadaImage && uploadIMG(ruteSTG, fileName, bannerLeftImage, setUserSuccess, monthYear)
          
          }
          if (key == "SaveBannerPortada") {
      
              const ruteDB = `/BannerTop` // Nov-2022/Inicio
              const ruteSTG = `BannerTop` // Nov-2022/
              const fileName = i // PostImage_Tue Nov 15 2022 
              const object = { [fileName]: { whatsapp: data.whatsappBannerTop ? data.whatsappBannerPortada : null , enlace: data.enlaceBannerRight ? data.enlaceBannerRight : null, dateInit: data.dateInitBannerPortada ? data.dateInitBannerPortada : userDB["BannerTop"][i].dateInit , dateFinish: data.dateFinishBannerPortada ? data.dateFinishBannerPortada : userDB["BannerTop"][i].dateFinish} }
              writeUserData(ruteDB, object, setUserSuccess, setUserData)
              bannerLeftImage && uploadIMG(ruteSTG, fileName, bannerPortadaImage, setUserSuccess, monthYear)
          
          }
          if (key == "SaveBannerRight") {
              const ruteDB = `/BannerRight` // Nov-2022/Inicio
              const ruteSTG = `BannerRight` // Nov-2022/
              const fileName = i // PostImage_Tue Nov 15 2022 
              const object = { [fileName]: { whatsapp: data.whatsappBannerRight ? data.whatsappBannerRight : null, enlace: data.enlaceBannerRight ? data.enlaceBannerRight : null, dateInit: data.dateInitBannerRight ? data.dateInitBannerRight : userDB["BannerRight"][i].dateInit, dateFinish: data.dateFinishBannerRight ? data.dateFinishBannerRight : userDB["BannerRight"][i].dateFinish}  }
              writeUserData(ruteDB, object, setUserSuccess, setUserData)
              bannerRightImage && uploadIMG(ruteSTG, fileName, bannerRightImage, setUserSuccess, monthYear)
           
          }


     







    }

function remove (e, key) {
    e.preventDefault()
    if (key== 'DeletePost') {
        const ruteDB = `${topic}/Posts/PostImage_${i}`
        console.log(ruteDB)
        removeData (ruteDB, setUserData, setUserSuccess)
        close(null)
    }
    if (key== 'DeleteBannerTop') {
        const ruteDB = `${topic}/BannerTop/${i}`
        console.log(ruteDB)
        removeData (ruteDB, setUserData, setUserSuccess)
        close(null)
    }
    if (key== 'DeleteBannerBottom') {
        const ruteDB = `${topic}/BannerBottom/${i}`
        console.log(ruteDB)
        removeData (ruteDB, setUserData, setUserSuccess)
        close(null)
    }
    if (key== 'DeleteBannerPortada') {
        const ruteDB = `BannerTop/${i}`
        console.log(ruteDB)
        removeData (ruteDB, setUserData, setUserSuccess)
        close(null)
    }

    if (key== 'DeleteBannerLeft') {
        const ruteDB = `BannerLeft/${i}`
        console.log(ruteDB)
        removeData (ruteDB, setUserData, setUserSuccess)
        close(null)
    }

    if (key== 'DeleteBannerRight') {
        const ruteDB = `BannerRight/${i}`
        console.log(ruteDB)
        removeData (ruteDB, setUserData, setUserSuccess)
        close(null)
    }
    
}


    useEffect(() => {
    })


    return (
        <div className={style.containerEditor}>
            <div className={style.containerForm}>
                <span className={style.close} onClick={() => close(null)}>X</span>
                {post == 'Post' &&
                    <form className={style.formSelectPost}>
                        <label htmlFor={`${topic}-PostConfig`} className={style.label} >Seleccionar Post </label>
                        <img className={style.previewIMG} style={{ objectPosition: `${data.objectPositionPost ? data.objectPositionPost : userDB[topic]["Posts"][`PostImage_${i}`].objectFit} ` }} src={urlPostImage == null ? postsIMG[`${topic}/PostImage_${i}`] : urlPostImage} alt="" />
                        <input type="file" id={`${topic}-PostConfig`} className={style.inputFile} name={`PostImage`} onChange={manageInputIMGSetting} accept=".jpg, .jpeg, .png, .mp4, webm" />
                        <input type="text" placeholder='Descripción' name="descriptionPost" defaultValue={userDB[topic]["Posts"][`PostImage_${i}`].description} onChange={handlerEventChange} />
                        <input type="text" placeholder='Enlace' name="enlacePost" defaultValue={userDB[topic]["Posts"][`PostImage_${i}`].enlace} onChange={handlerEventChange} />
                        <div className={style.radioInputs}>
                            <input type="radio" value="left" name="objectPositionPost" onChange={handlerEventChange} /> ⇦
                            <input type="radio" value="top" name="objectPositionPost" onChange={handlerEventChange} /> ⇧
                            <input type="radio" value="center" name="objectPositionPost" onChange={handlerEventChange} /> c
                            <input type="radio" value="bottom" name="objectPositionPost" onChange={handlerEventChange} /> ⇩
                            <input type="radio" value="right" name="objectPositionPost" onChange={handlerEventChange} /> ⇨
                        </div>
                        <Button style="buttonMiniSecondary" click={(e) => saveConfig(e, "SavePost")}>Guardar</Button>
                    <br />
                    <Button style="buttonMiniSecondary" click={(e) => remove(e, "DeletePost")}>Eliminar</Button>
                    </form>}

                {post === "BannerTop" && <form className={style.formSelectPost}>
                    <label htmlFor={`${topic}-bannerTopConfig`} className={style.label} >Seleccionar Banner Top</label>
                    <img className={style.previewIMGBanner} src={urlBannerTopImage == null ? postsIMG[`${topic}/${i}`] : urlBannerTopImage} alt="" />
                    <input type="file" id={`${topic}-bannerTopConfig`} className={style.inputFile} name={`BannerTopImage`} onChange={manageInputIMGSetting} accept=".jpg, .jpeg, .png, .mp4, webm" />
                    <input type="text" placeholder='Enlace' name="enlaceBannerTop" onChange={handlerEventChange} />
                    <input type="text" placeholder='Whatsapp' name="whatsappBannerTop" onChange={handlerEventChange} />
                    <input className={style.calendario} type="date" id="start" name="dateInitBannerTop" onChange={handlerEventChange} />
                    <p className={`${style.require} ${data.dateInitBannerTop ? style.green : ''}`}>{data.dateInitBannerTop ? 'Correcto' : '*Requerido'}</p>
                    <input className={style.calendario} type="date" id="start" name="dateFinishBannerTop" onChange={handlerEventChange} />
                    <p className={`${style.require} ${data.dateFinishBannerTop ? style.green : ''}`}>{data.dateFinishBannerTop ? 'Correcto' : '*Requerido'}</p>
                    <Button style="buttonMiniSecondary" click={(e) => saveConfig(e, "SaveBannerTop")}>Guardar</Button>
                <br />
                <Button style="buttonMiniSecondary" click={(e) => remove(e, "DeleteBannerTop")}>Eliminar</Button>
                </form>}

                {post === "BannerBottom" && <form className={style.formSelectPost}>
                    <label htmlFor={`${topic}-bannerBottomConfig`} className={style.label} >Seleccionar Banner Bottom</label>
                    <img className={style.previewIMGBanner} src={urlBannerBottomImage == null ? postsIMG[`${topic}/${i}`] : urlBannerBottomImage} alt="" />
                    <input type="file" id={`${topic}-bannerBottomConfig`} className={style.inputFile} name={`BannerBottomImage`} onChange={manageInputIMGSetting} accept=".jpg, .jpeg, .png, .mp4, webm" />
                    <input type="text" placeholder='Enlace' name="enlaceBannerBottom" onChange={handlerEventChange} />
                    <input type="text" placeholder='Whatsapp' name="whatsappBannerBottom" onChange={handlerEventChange} />
                    <input className={style.calendario} type="date" id="start" name="dateInitBannerBottom" onChange={handlerEventChange} />
                    <p className={`${style.require} ${data.dateInitBannerBottom ? style.green : ''}`}>{data.dateInitBannerBottom ? 'Correcto' : '*Requerido'}</p>
                    <input className={style.calendario} type="date" id="start" name="dateFinishBannerBottom" onChange={handlerEventChange} />
                    <p className={`${style.require} ${data.dateFinishBannerBottom ? style.green : ''}`}>{data.dateFinishBannerBottom ? 'Correcto' : '*Requerido'}</p>
                    
                    <Button style="buttonMiniSecondary" click={(e) => saveConfig(e, "SaveBannerBottom")}>Guardar</Button>
                    <br />
                    <Button style="buttonMiniSecondary" click={(e) => remove(e, "DeleteBannerBottom")}>Eliminar</Button>
                </form>}




















{console.log(postsIMG)}

                {post === "BannerPortada" && <form className={style.formSelectPost}>
                    <label htmlFor={`bannerPortadaConfig`} className={style.label} >Seleccionar Banner Portada</label>
                    <img className={style.previewIMGBanner} src={urlBannerPortadaImage == null ? postsIMG[`BannerTop/${i}`] : urlBannerPortadaImage} alt="" />
                    <input type="file" id={`bannerPortadaConfig`} className={style.inputFile} name={`BannerPortadaImage`} onChange={manageInputIMGSetting} accept=".jpg, .jpeg, .png, .mp4, webm" />
                    <input type="text" placeholder='Enlace' name="enlaceBannerPortada" onChange={handlerEventChange} />
                    <input type="text" placeholder='Whatsapp' name="whatsappBannerPortada" onChange={handlerEventChange} />
                    <input className={style.calendario} type="date" id="start" name="dateInitBannerPortada" onChange={handlerEventChange} />
                    <p className={`${style.require} ${data.dateInitBannerPortada ? style.green : ''}`}>{data.dateInitBannerPortada ? 'Correcto' : '*Requerido'}</p>
                    <input className={style.calendario} type="date" id="start" name="dateFinishBannerPortada" onChange={handlerEventChange} />
                    <p className={`${style.require} ${data.dateFinishBannerPortada ? style.green : ''}`}>{data.dateFinishBannerPortada ? 'Correcto' : '*Requerido'}</p>
                    <div className={style.radioInputs}>
                        <input type="radio" value="left" name="objectPositionBannerPortada" onChange={handlerEventChange} /> ⇦
                        <input type="radio" value="top" name="objectPositionBannerPortada" onChange={handlerEventChange} /> ⇧
                        <input type="radio" value="center" name="objectPositionBannerPortada" onChange={handlerEventChange} /> c
                        <input type="radio" value="bottom" name="objectPositionBannerPortada" onChange={handlerEventChange} /> ⇩
                        <input type="radio" value="right" name="objectPositionBannerPortada" onChange={handlerEventChange} /> ⇨
                    </div>
                    <Button style="buttonMiniSecondary" click={(e) => saveConfig(e, "SaveBannerPortada")}>Guardar</Button>
                <br />
                <Button style="buttonMiniSecondary" click={(e) => remove(e, "DeleteBannerPortada")}>Eliminar</Button>
                </form>}


                {post === "BannerLeft" && <form className={style.formSelectPost}>
                    <label htmlFor={`bannerLeftConfig`} className={style.label} >Seleccionar Banner Left</label>
                    <img className={style.previewIMGBanner} src={urlBannerLeftImage == null ? postsIMG[`BannerLeft/${i}`] : urlBannerLeftImage} alt="" />
                    <input type="file" id={`bannerLeftConfig`} className={style.inputFile} name={`BannerLeftImage`} onChange={manageInputIMGSetting} accept=".jpg, .jpeg, .png, .mp4, webm" />
                    <input type="text" placeholder='Enlace' name="enlaceBannerLeft" onChange={handlerEventChange} />
                    <input type="text" placeholder='Whatsapp' name="whatsappBannerLeft" onChange={handlerEventChange} />
                    <input className={style.calendario} type="date" id="start" name="dateInitBannerLeft" onChange={handlerEventChange} />
                    <p className={`${style.require} ${data.dateInitBannerLeft ? style.green : ''}`}>{data.dateInitBannerLeft ? 'Correcto' : '*Requerido'}</p>
                    <input className={style.calendario} type="date" id="start" name="dateFinishBannerLeft" onChange={handlerEventChange} />
                    <p className={`${style.require} ${data.dateFinishBannerLeft ? style.green : ''}`}>{data.dateFinishBannerLeft ? 'Correcto' : '*Requerido'}</p>
                    <div className={style.radioInputs}>
                        <input type="radio" value="left" name="objectPositionBannerLeft" onChange={handlerEventChange} /> ⇦
                        <input type="radio" value="top" name="objectPositionBannerLeft" onChange={handlerEventChange} /> ⇧
                        <input type="radio" value="center" name="objectPositionBannerLeft" onChange={handlerEventChange} /> c
                        <input type="radio" value="bottom" name="objectPositionBannerLeft" onChange={handlerEventChange} /> ⇩
                        <input type="radio" value="right" name="objectPositionBannerLeft" onChange={handlerEventChange} /> ⇨
                    </div>
                    <Button style="buttonMiniSecondary" click={(e) => saveConfig(e, "SaveBannerLeft")}>Guardar</Button>
                <br />
                <Button style="buttonMiniSecondary" click={(e) => remove(e, "DeleteBannerLeft")}>Eliminar</Button>
                </form>}

                       {post === "BannerRight" && <form className={style.formSelectPost}>
                    <label htmlFor={`bannerConfig`} className={style.label} >Seleccionar Banner Right</label>
                    <img className={style.previewIMGBanner} src={urlBannerRightImage == null ? postsIMG[`BannerRight/${i}`] : urlBannerRightImage} alt="" />
                    <input type="file" id={`bannerConfig`} className={style.inputFile} name={`BannerRightImage`} onChange={manageInputIMGSetting} accept=".jpg, .jpeg, .png, .mp4, webm" />
                    <input type="text" placeholder='Enlace' name="enlaceBannerRight" onChange={handlerEventChange} />
                    <input type="text" placeholder='Whatsapp' name="whatsappBannerRight" onChange={handlerEventChange} />
                    <input className={style.calendario} type="date" id="start" name="dateInitBannerRight" onChange={handlerEventChange} />
                    <p className={`${style.require} ${data.dateInitBannerRight ? style.green : ''}`}>{data.dateInitBannerRight ? 'Correcto' : '*Requerido'}</p>
                    <input className={style.calendario} type="date" id="start" name="dateFinishBannerRight" onChange={handlerEventChange} />
                    <p className={`${style.require} ${data.dateFinishBannerRight ? style.green : ''}`}>{data.dateFinishBannerRight ? 'Correcto' : '*Requerido'}</p>
                    
                    <Button style="buttonMiniSecondary" click={(e) => saveConfig(e, "SaveBannerRight")}>Guardar</Button>
                <br />
                <Button style="buttonMiniSecondary" click={(e) => remove(e, "DeleteBannerRight")}>Eliminar</Button>
                </form>}
            </div>
        </div>


    )
}