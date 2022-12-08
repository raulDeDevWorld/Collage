import { writeUserData, getData } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useUser } from '../context/Context.js'
import Button from '../components/Button'
import Error from '../components/Error'
import style from '../styles/Form.module.css'
import { useState } from 'react'
import { getDate, getDayMonthYear, getMonthAndYear } from '../utils/Utils'


export default function Form({ topic, value, color }) {
  const { user, userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, monthAndYear, dayMonthYear } = useUser()

  const [data, setData] = useState({})

  const [postImage, setPostImage] = useState(null)
  const [urlPostImage, setUrlPostImage] = useState(null)

  const [bannerTopImage, setBannerTopImage] = useState(null)
  const [urlBannerTopImage, setUrlBannerTopImage] = useState(null)

  const [bannerBottomImage, setBannerBottomImage] = useState(null)
  const [urlBannerBottomImage, setUrlBannerBottomImage] = useState(null)


  function manageInputIMG(e) {
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
    if (key == "SavePost") {
      if (postImage) {
        const ruteDB = `/${topic}/Posts` // Nov-2022/Inicio
        const ruteSTG = `${topic}` // Nov-2022/
        const fileName = `PostImage_${newDate}` // PostImage_Tue Nov 15 2022 
        const object = { [fileName]: { description: data.descriptionPost ? data.descriptionPost : null, enlace: data.enlacePost ? data.enlacePost : `${newDate.getTime()}`, objectFit: data.objectPositionPost ? data.objectPositionPost : 'center' } }
        writeUserData(ruteDB, object, setUserSuccess, setUserData)
        uploadIMG(ruteSTG, fileName, postImage, setUserSuccess, monthYear)
      } else {
        setUserSuccess("CompleteIMG")
      }



    }
    if (key == "SaveBannerTop") {
      if (bannerTopImage && data.dateInitBannerTop && data.dateFinishBannerTop) {

        const ruteDB = `/${topic}/BannerTop` // Nov-2022/Inicio
        const ruteSTG = `${topic}` // Nov-2022/
        const fileName = `BannerTopImage_${newDate}` // PostImage_Tue Nov 15 2022 
        const object = { [fileName]: { whatsapp: data.whatsappBannerTop ? data.whatsappBannerTop : null, enlace: data.enlaceBannerTop ? data.enlaceBannerTop : null, objectFit: data.objectPositionBannerTop ? data.objectPositionBannerTop : 'center', dateInit: data.dateInitBannerTop, dateFinish: data.dateFinishBannerTop } }
        writeUserData(ruteDB, object, setUserSuccess, setUserData)
        uploadIMG(ruteSTG, fileName, bannerTopImage, setUserSuccess, monthYear)
      } else {
        setUserSuccess("CompleteFORM")
        data.dateInitBannerTop && data.dateFinishBannerTop && bannerTopImage == undefined && setUserSuccess("CompleteIMG")

      }
    }
    if (key == "SaveBannerBottom") {
      if (bannerBottomImage && data.dateInitBannerBottom && data.dateFinishBannerBottom) {
        const ruteDB = `/${topic}/BannerBottom` // Nov-2022/Inicio
        const ruteSTG = `${topic}` // Nov-2022/
        const fileName = `BannerBottomImage_${newDate}` // PostImage_Tue Nov 15 2022 
        const object = { [fileName]: { whatsapp: data.whatsappBannerBottom ? data.whatsappBannerBottom : null, enlace: data.enlaceBannerBottom ? data.enlaceBannerBottom : null, objectFit: data.objectPositionBannerBottom ? data.objectPositionBannerBottom : 'center', dateInit: data.dateInitBannerBottom, dateFinish: data.dateFinishBannerBottom } }
        writeUserData(ruteDB, object, setUserSuccess, setUserData)
        uploadIMG(ruteSTG, fileName, bannerBottomImage, setUserSuccess, monthYear)
      } else {
        setUserSuccess("CompleteFORM")
        data.dateInitBannerBottom && data.dateFinishBannerBottom && bannerBottomImage == undefined && setUserSuccess("CompleteIMG")

      }
    }
  }





  function handlerUploadFile(e) {
    const monthYear = getMonthAndYear()
    //  uploadIMG(userDB, file, fileName, `${monthYear}/${topic}`, setUserSuccess, postsIMG, setUserPostsIMG, monthAndYear)
  }
  return (
    <div className={style.form} style={{ backgroundColor: color }}>
      <select className={style.select} name={`${topic}-Template-${dayMonthYear}`} onChange={manageTemplate} style={{ backgroundColor: color, fontWeight: 'bold', border: '2px solid brown' }}>
        <option value="#" selected={value == "TemplateOne" ? true : false}>Ninguno-{topic}</option>
        <option value="TemplateOne" selected={value == "TemplateOne" ? true : false}>Plantilla 1-{topic}</option>
        <option value="TemplateThreeA" selected={value == "TemplateThreeA" ? true : false}>Plantilla 2-{topic}</option>
        <option value="TemplateThreeB" selected={value == "TemplateThreeB" ? true : false}>Plantilla 3-{topic}</option>
        <option value="TemplateFour" selected={value == "TemplateFour" ? true : false}>Plantilla 4-{topic}</option>
        <option value="TemplateFive" selected={value == "TemplateFive" ? true : false}>Plantilla 5-{topic}</option>
        <option value="TemplateSix" selected={value == "TemplateSix" ? true : false}>Plantilla 6-{topic}</option>
        <option value="TemplateSeven" selected={value == "TemplateSeven" ? true : false}>Plantilla 7-{topic}</option>
        <option value="TemplateEight" selected={value == "TemplateEight" ? true : false}>Plantilla 8-{topic}</option>
      </select>


      {userDB && userDB.users[user.uid] && userDB.users[user.uid].rol === 'periodista' &&

        <div className={style.formInputs}>
          <form className={style.formSelectPost}>

            <label htmlFor={`${topic}-Post`} className={style.label} >Añadir publicación </label>
            <img className={style.previewIMG} style={{ objectPosition: `${data.objectPositionPost ? data.objectPositionPost : 'center'} ` }} src={urlPostImage} alt="" />
            <p className={`${style.require} ${postImage ? style.green : ''}`}>{postImage ? 'Correcto' : '*Imagen Requerida'}</p>
            <input type="file" id={`${topic}-Post`} className={style.inputFile} name={`PostImage`} onChange={manageInputIMG} accept=".jpg, .jpeg, .png, .mp4, webm" />
            <input type="text" placeholder='Descripción' name="descriptionPost" onChange={handlerEventChange} />
            <input type="text" placeholder='Enlace' name="enlacePost" onChange={handlerEventChange} />
            <div className={style.radioInputs}>
              <input type="radio" value="left" name="objectPositionPost" onChange={handlerEventChange} /> ⇦
              <input type="radio" value="top" name="objectPositionPost" onChange={handlerEventChange} /> ⇧
              <input type="radio" value="center" name="objectPositionPost" onChange={handlerEventChange} /> c
              <input type="radio" value="bottom" name="objectPositionPost" onChange={handlerEventChange} /> ⇩
              <input type="radio" value="right" name="objectPositionPost" onChange={handlerEventChange} /> ⇨
            </div>
            <Button style="buttonMiniSecondary" click={(e) => save(e, "SavePost")}>Guardar</Button>
          </form>
        </div>
      }


      {userDB && userDB.users[user.uid] && userDB.users[user.uid].rol === 'admin' && <>
        <div className={`${style.formInputsAdmin} ${style.formInputs}`}>
          <form className={style.formSelectPost}>
            <label htmlFor={`${topic}-bannerTop`} className={style.label} >Seleccionar Banner Cabecera</label>
            <img className={style.previewIMGBanner} style={{ objectPosition: `${data.objectPositionPost ? data.objectPositionBannerTop : 'center'} ` }} src={urlBannerTopImage} alt="" />
            <p className={`${style.require} ${bannerTopImage ? style.green : ''}`}>{bannerTopImage ? 'Correcto' : '*Requerido'}</p>
            <input type="file" id={`${topic}-bannerTop`} className={style.inputFile} name={`BannerTopImage`} onChange={manageInputIMG} accept=".jpg, .jpeg, .png, .mp4, webm" />
            <input type="text" placeholder='Enlace' name="enlaceBannerTop" onChange={handlerEventChange} />
            <input type="text" placeholder='Whatsapp' name="whatsappBannerTop" onChange={handlerEventChange} />
            <input className={style.calendario} type="date" id="start" name="dateInitBannerTop" onChange={handlerEventChange} />
            <p className={`${style.require} ${data.dateInitBannerTop ? style.green : ''}`}>{data.dateInitBannerTop ? 'Correcto' : '*Requerido'}</p>
            <input className={style.calendario} type="date" id="start" name="dateFinishBannerTop" onChange={handlerEventChange} />
            <p className={`${style.require} ${data.dateFinishBannerTop ? style.green : ''}`}>{data.dateFinishBannerTop ? 'Correcto' : '*Requerido'}</p>

            <Button style="buttonMiniSecondary" click={(e) => save(e, "SaveBannerTop")}>Guardar</Button>
          </form>
          <form className={style.formSelectPost}>
            <label htmlFor={`${topic}-bannerBottom`} className={style.label} >Seleccionar Banner Pie </label>
            <img className={style.previewIMGBanner} style={{ objectPosition: `${data.objectPositionPost ? data.objectPositionBannerBottom : 'center'} ` }} src={urlBannerBottomImage} alt="" />
            <p className={`${style.require} ${bannerBottomImage ? style.green : ''}`}>{bannerBottomImage ? 'Correcto' : '*Requerido'}</p>
            <input type="file" id={`${topic}-bannerBottom`} className={style.inputFile} name={`BannerBottomImage`} onChange={manageInputIMG} accept=".jpg, .jpeg, .png, .mp4, webm" />
            <input type="text" placeholder='Enlace' name="enlaceBannerBottom" onChange={handlerEventChange} />
            <input type="text" placeholder='Whatsapp' name="whatsappBannerBottom" onChange={handlerEventChange} />
            <input className={style.calendario} type="date" id="start" name="dateInitBannerBottom" onChange={handlerEventChange} />
            <p className={`${style.require} ${data.dateInitBannerBottom ? style.green : ''}`}>{data.dateInitBannerBottom ? 'Correcto' : '*Requerido'}</p>
            <input className={style.calendario} type="date" id="start" name="dateFinishBannerBottom" onChange={handlerEventChange} />
            <p className={`${style.require} ${data.dateFinishBannerBottom ? style.green : ''}`}>{data.dateFinishBannerBottom ? 'Correcto' : '*Requerido'}</p>

            <Button style="buttonMiniSecondary" click={(e) => save(e, "SaveBannerBottom")}>Guardar</Button>
          </form>
        </div>
      </>}


    </div>


  )
}

