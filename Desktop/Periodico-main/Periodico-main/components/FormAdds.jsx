import { writeUserData, getData } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useUser } from '../context/Context.js'
import Button from './Button'
import Error from './Error'
import style from '../styles/Form.module.css'
import { useState } from 'react'
import { getDate, getDayMonthYear, getMonthAndYear } from '../utils/Utils'
import imageCompression from 'browser-image-compression';


export default function Form({ topic, value }) {
  const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, monthAndYear, dayMonthYear } = useUser()

  const [data, setData] = useState({})

  const [bannerLeftImage, setBannerLeftImage] = useState(null)
  const [urlBannerLeftImage, setUrlBannerLeftImage] = useState(null)

  const [bannerTopImage, setBannerTopImage] = useState(null)
  const [urlBannerTopImage, setUrlBannerTopImage] = useState(null)

  const [bannerRightImage, setBannerRightImage] = useState(null)
  const [urlBannerRightImage, setUrlBannerRightImage] = useState(null)

  function manageInputIMG(e) {
    const fileName = `${e.target.name}`
    const file = e.target.files[0]
    console.log(e.target.files[0].type)

    if (fileName === 'BannerLeftImage') {
      setBannerLeftImage(file)
      setUrlBannerLeftImage(URL.createObjectURL(file))
    }

    if (fileName === 'BannerTopImage') {
      setBannerTopImage(file)
      setUrlBannerTopImage(URL.createObjectURL(file))
    }

    if (fileName === 'BannerRightImage') {
      setBannerRightImage(file)
      setUrlBannerRightImage(URL.createObjectURL(file))
    }
  }

//  console.log(data)

  function manageTemplate(e) {
    //const monthYear = monthAndYear ? monthAndYear : getMonthAndYear()
    const ruteDB = `/${topic}/Templates` // /Inicio
    const value = e.target.value

    const object = { [dayMonthYear]: value }

    writeUserData(ruteDB, object, setUserSuccess)

  }

  function handlerEventChange(e) {
    const name = e.target.name
    const value = e.target.value
    const object = { [name]: value }
    setData({ ...data, ...object })
  }


  
  function save(e, key) {
    e.preventDefault()
     
    const monthYear = monthAndYear ? monthAndYear : getMonthAndYear()
    const newDate = new Date()
    if (key == "SaveBannerLeft") {


      if (bannerLeftImage && data.dateInitBannerLeft && data.dateFinishBannerLeft) {

        const ruteDB = `/BannerLeft` // Nov-2022/Inicio
        const ruteSTG = `BannerLeft` // Nov-2022/
        const fileName = `BannerLeftImage_${newDate}` // PostImage_Tue Nov 15 2022 
        const object = { [fileName]: { whatsapp: data.whatsappBannerLeft ? data.whatsappBannerLeft : null , enlace: data.enlaceBannerLeft ? data.enlaceBannerLeft : null, objectFit: data.objectPositionBannerLeft ? data.objectPositionBannerLeft : 'center', dateInit: data.dateInitBannerLeft, dateFinish: data.dateFinishBannerLeft } }
        writeUserData(ruteDB, object, setUserSuccess, setUserData)
        uploadIMG(ruteSTG, fileName, bannerLeftImage, setUserSuccess, monthYear)
      } else {
        setUserSuccess("CompleteFORM")
        data.dateInitBannerTop && data.dateFinishBannerLeft && bannerLeftImage == undefined && setUserSuccess("CompleteIMG")
      }
    }
    if (key == "SaveBannerTop") {
      if (bannerTopImage && data.dateInitBannerTop && data.dateFinishBannerTop) {

        const ruteDB = `/BannerTop` // Nov-2022/Inicio
        const ruteSTG = `BannerTop` // Nov-2022/
        const fileName = `BannerTopImage_${newDate}` // PostImage_Tue Nov 15 2022 
        const object = { [fileName]: { whatsapp: data.whatsappBannerTop ? data.whatsappBannerTop : null , enlace: data.enlaceBannerTop ? data.enlaceBannerTop : null, objectFit: data.objectPositionBannerTop ? data.objectPositionBannerTop : 'center', dateInit: data.dateInitBannerTop, dateFinish: data.dateFinishBannerTop } }
        writeUserData(ruteDB, object, setUserSuccess, setUserData)
        uploadIMG(ruteSTG, fileName, bannerTopImage, setUserSuccess, monthYear)
      } else {
        setUserSuccess("CompleteFORM")
        data.dateInitBannerTop && data.dateFinishBannerTop && bannerTopImage == undefined && setUserSuccess("CompleteIMG")

      }
    }
    if (key == "SaveBannerRight") {
      if (bannerRightImage && data.dateInitBannerRight && data.dateFinishBannerRight) {
        const ruteDB = `/BannerRight` // Nov-2022/Inicio
        const ruteSTG = `BannerRight` // Nov-2022/
        const fileName = `BannerRightImage_${newDate}` // PostImage_Tue Nov 15 2022 
        const object = { [fileName]: { whatsapp: data.whatsappBannerRight ? data.whatsappBannerRight : null, enlace: data.enlaceBannerRight ? data.enlaceBannerRight : null, objectFit: data.objectPositionBannerRight ? data.objectPositionBannerRight : 'center' , dateInit: data.dateInitBannerRight, dateFinish: data.dateFinishBannerRight } }
        writeUserData(ruteDB, object, setUserSuccess, setUserData)
        uploadIMG(ruteSTG, fileName, bannerRightImage, setUserSuccess, monthYear)
      } else {
        setUserSuccess("CompleteFORM")
        data.dateInitBannerRight && data.dateFinishBannerRight && bannerRightImage == undefined && setUserSuccess("CompleteIMG")
      }
    }
  }

  return (
    <div className={style.form}>

      <div className={style.formInputs}>

        <form className={style.formSelectAdds}>
          <label htmlFor={`${topic}-bannerLeft`} className={style.label} >Seleccionar Banner Izquierdo</label>
          <img className={style.previewIMGBanner} style={{objectPosition: `${data.objectPositionPost ? data.objectPositionBannerLeft : 'center'} `}} src={urlBannerLeftImage} alt="" />
          <p className={`${style.require} ${ bannerLeftImage?  style.green : ''}` }>{ bannerLeftImage? 'Correcto' : '*Requerido'}</p>
          <input type="file" id={`${topic}-bannerLeft`} className={style.inputFile} name={`BannerLeftImage`} onChange={manageInputIMG} accept=".jpg, .jpeg, .png, .mp4, webm, .gif" />
          <input type="text" placeholder='Enlace' name="enlaceBannerLeft" onChange={handlerEventChange} />
          <input type="text" placeholder='Whatsapp' name="whatsappBannerLeft" onChange={handlerEventChange} />
          <input className={style.calendario} type="date" id="start" name="dateInitBannerLeft" onChange={handlerEventChange} />
          <p className={`${style.require} ${ data.dateInitBannerLeft?  style.green : ''}` }>{ data.dateInitBannerLeft? 'Correcto' : '*Requerido'}</p>
          <input className={style.calendario} type="date" id="start" name="dateFinishBannerLeft" onChange={handlerEventChange} />
          <p className={`${style.require} ${ data.dateFinishBannerLeft?  style.green : ''}` }>{ data.dateFinishBannerLeft? 'Correcto' : '*Requerido'}</p>
          
          <Button style="buttonMiniSecondary" click={(e) => save(e, "SaveBannerLeft")}>Guardar</Button>
        </form>
        










        <form className={style.formSelectAdds}>
          <label htmlFor={`${topic}-bannerTop`} className={style.label} >Seleccionar Banner de Cabecera</label>
          <img className={style.previewIMGBanner} style={{objectPosition: `${data.objectPositionPost ? data.objectPositionBannerTop : 'center'} `}} src={urlBannerTopImage} alt="" />
          <p className={`${style.require} ${ bannerTopImage?  style.green : ''}` }>{ bannerTopImage? 'Correcto' : '*Requerido'}</p>
          <input type="file" id={`${topic}-bannerTop`} className={style.inputFile} name={`BannerTopImage`} onChange={manageInputIMG} accept=".jpg, .jpeg, .png, .mp4, webm, .gif" />
          <input type="text" placeholder='Enlace' name="enlaceBannerTop" onChange={handlerEventChange} />
          <input type="text" placeholder='Whatsapp' name="whatsappBannerTop" onChange={handlerEventChange} />
          <input className={style.calendario} type="date" id="start" name="dateInitBannerTop" onChange={handlerEventChange} />
          <p className={`${style.require} ${ data.dateInitBannerTop?  style.green : ''}` }>{ data.dateInitBannerTop? 'Correcto' : '*Requerido'}</p>
          <input className={style.calendario} type="date" id="start" name="dateFinishBannerTop" onChange={handlerEventChange} />
          <p className={`${style.require} ${ data.dateFinishBannerTop?  style.green : ''}` }>{ data.dateFinishBannerTop? 'Correcto' : '*Requerido'}</p>
          
          <Button style="buttonMiniSecondary" click={(e) => save(e, "SaveBannerTop")}>Guardar</Button>
        </form>
        





        <form className={style.formSelectAdds}>
          <label htmlFor={`${topic}-bannerRight`} className={style.label} >Seleccionar Banner Derecho </label>
          <img className={style.previewIMGBanner} style={{objectPosition: `${data.objectPositionPost ? data.objectPositionBannerRight : 'center'} `}} src={urlBannerRightImage} alt="" />
          <p className={`${style.require} ${ bannerRightImage?  style.green : ''}` }>{ bannerRightImage? 'Correcto' : '*Requerido'}</p>
          <input type="file" id={`${topic}-bannerRight`} className={style.inputFile} name={`BannerRightImage`} onChange={manageInputIMG} accept=".jpg, .jpeg, .png, .mp4, webm, .gif" />
          <input type="text" placeholder='Enlace' name="enlaceBannerRight" onChange={handlerEventChange} />
          <input type="text" placeholder='Whatsapp' name="whatsappBannerRight" onChange={handlerEventChange} />
          <input className={style.calendario} type="date" id="start" name="dateInitBannerRight" onChange={handlerEventChange} />
          <p className={`${style.require} ${ data.dateInitBannerRight?  style.green : ''}` }>{ data.dateInitBannerRight? 'Correcto' : '*Requerido'}</p>
          <input className={style.calendario} type="date" id="start" name="dateFinishBannerRight" onChange={handlerEventChange} />
          <p className={`${style.require} ${ data.dateFinishBannerRight?  style.green : ''}` }>{ data.dateFinishBannerRight? 'Correcto' : '*Requerido'}</p>
          
          <Button style="buttonMiniSecondary" click={(e) => save(e, "SaveBannerRight")}>Guardar</Button>
        </form>
      </div>
    </div>


  )
}

