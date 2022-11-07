import { writeUserData } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useUser } from '../context/Context.js'
import style from '../styles/Form.module.css'


export default function Form({ topic, value }) {
  const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG } = useUser()

  function handlerEventChange(e) {
    const object = { [e.target.name]: e.target.value }
    writeUserData('/', object, setUserSuccess)
  }
  function handlerUploadFile(e) {
    const fileName = e.target.name
    const file = e.target.files[0]
    uploadIMG(file, fileName, setUserSuccess, postsIMG, setUserPostsIMG)
  }

  return (
    <form className={style.form} action="">
      <label className={style.selectLebel}></label>
      <select className={style.select} name={topic} onChange={handlerEventChange}>
        <option value="PostOne" selected={value == "PostOne" ? true: false}>Plantilla 1</option>
        <option value="PostTwo" selected={value == "PostTwo" ? true: false}>Plantilla 2</option>
        <option value="PostThree" selected={value == "PostThree" ? true: false}>Plantilla 3</option>
      </select>
      <div>
        <label htmlFor={`${topic}-Post1`} className={style.label} >Seleccionar Post 1</label>
        <input type="file" id={`${topic}-Post1`} className={style.inputFile} name={`${topic}-Post1`} onChange={handlerUploadFile} accept="images" />
        <label htmlFor={`${topic}-Post3`} className={style.label} >Seleccionar Post 3</label>
        <input type="file" id={`${topic}-Post3`} className={style.inputFile} name={`${topic}-Post3`} onChange={handlerUploadFile} accept="images" />
        <label htmlFor={`${topic}-Post5`} className={style.label} >Seleccionar Post 5</label>
        <input type="file" id={`${topic}-Post5`} className={style.inputFile} name={`${topic}-Post5`} onChange={handlerUploadFile} accept="images" />
        <label htmlFor={`${topic}-Post2`}  className={style.label} >Seleccionar Post 2</label>
        <input type="file" id={`${topic}-Post2`}  className={style.inputFile} name={`${topic}-Post2`} onChange={handlerUploadFile} accept="images" />
        <label htmlFor={`${topic}-Post4`} className={style.label} >Seleccionar Post 4</label>
        <input type="file" id={`${topic}-Post4`} className={style.inputFile} name={`${topic}-Post4`} onChange={handlerUploadFile} accept="images" />
        <label htmlFor={`${topic}-Post6`} className={style.label} >Seleccionar Post 6</label>
        <input type="file" id={`${topic}-Post6`} className={style.inputFile} name={`${topic}-Post6`} onChange={handlerUploadFile} accept="images" />
        <label htmlFor={`${topic}-bannerTop`} className={style.label} >Seleccionar Banner Top</label>
        <input type="file" id={`${topic}-bannerTop`} className={style.inputFile} name={`${topic}-bannerTop`} onChange={handlerUploadFile} accept="images" />
        <label htmlFor={`${topic}-bannerBottom`} className={style.label} >Seleccionar Banner Bottom </label>
        <input type="file" id={`${topic}-bannerBottom`} className={style.inputFile} name={`${topic}-bannerBottom`} onChange={handlerUploadFile} accept="images" />
      </div>

    </form>
  )
}




