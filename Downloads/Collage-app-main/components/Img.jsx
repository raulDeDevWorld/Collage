import style from '../styles/Collage.module.css'
import { useUser } from '../context/Context'

export default function Img({id, i, index,}) {
    const { image, numeration, setAlbunImage, templates } = useUser()


    function handlerOnChange(e) {
        e.preventDefault()
        const fileName = e.target.name
        const file = e.target.files[0]
        setAlbunImage({ ...image, [fileName]: { file, url: URL.createObjectURL(file), rotate: 0 } })
        console.log(e.target.value)
    }
// console.log(image)
    return (
        <>
            {image[`Image-${numeration[index+(id * 9)]}`] && <img src={image[`Image-${numeration[index+(id * 9)]}`].url} className={`${style.image}`} 
                style={{
                    transform: `rotate(${templates[id][index] == 'h' ? '90': '0' }deg )`, 
                    objectFit: 'cover',   
                    width: templates[id][index] == (id == 4? 'v':'h') ? (id === 2 && index > 6 ? '80mm' : '77mm') : (id === 2 && index > 6 ? '50mm' : '57mm'), 
                    height: templates[id][index] == (id == 4? 'v':'h') ? (id === 2 && index > 6 ? '60mm' : '57mm') : (id === 2 && index === 8 ? '80mm' : '77mm')}} />}
            <span className={style.heart} style={{ transform: `rotate(${templates[id][index] == 'h' ? '90' : '0'}deg )`,  }}>{numeration[index+(id * 9)]}</span>
            <label htmlFor={`Image-${numeration[index+(id * 9)]}`} className={style.labelFile} >Cargar Imagen {numeration[index+(id * 9)]}</label>
            <input className={style.inputFile} id={`Image-${numeration[index+(id * 9)]}`} type="file" name={`Image-${numeration[index+(id * 9)]}`} onChange={handlerOnChange} accept='.jpg, .jpeg, .png' />
        </>
    )
}