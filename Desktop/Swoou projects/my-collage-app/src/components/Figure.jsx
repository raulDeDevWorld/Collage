import { useUser } from '../context/Context'
import { useState, useRef, useEffect } from 'react'


import style from '../styles/Figure.module.css'

export default function Figure({ stylesProp, num, rotate, index }) {

    const { numeration, setAlbunNumeration, templates, qr, setQr, image, setAlbunImage, dataUrl, setDataUrl } = useUser()
    const dragItem = useRef();
    const dragOverItem = useRef();

    function handlerOnChange(e) {
        e.preventDefault()
        const fileName = e.target.name
        const file = e.target.files[0]
        setAlbunImage({ ...image, [fileName]: { file, url: URL.createObjectURL(file), rotate: 0 } })
        console.log(e.target.value)
    }




    function handleDragStart(e, index) {
        //   console.log('start' + index)
        dragItem.current = index;
    }

    const handleDragEnter = (e, index) => {
        //  console.log('enter' + index)
        dragOverItem.current = index;
    };

    const handleDragEnd = (e, index) => {


        if (dragOverItem.current !== undefined) {
            const copyListItems = [...numeration];
            [copyListItems[dragItem.current], copyListItems[dragOverItem.current]] = [copyListItems[dragOverItem.current], copyListItems[dragItem.current]]
            setAlbunNumeration(copyListItems);
            dragItem.current = null;
            dragOverItem.current = null;
        }
    };



    return (
        <div className={stylesProp}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragEnd={handleDragEnd}>


            {num !== 39 && num !== 43 && num !== 45 && <span className={rotate ? style.heartRotate : style.heart} >{num}</span>}

            {num === 39 && <div className={style.container39}>
                <div>
                    <span className={rotate ? style.heartRotate : style.heart} >22</span>
                </div>
                <div>
                    <span className={rotate ? style.heartRotate : style.heart} >20</span>
                </div>
                <div>
                    <span className={rotate ? style.heartRotate : style.heart} >23</span>
                </div>
                <div>
                    <span className={rotate ? style.heartRotate : style.heart} >21</span>
                </div>
            </div>
            }

            {num === 43 && <div className={style.container43}>
                <div>
                    <span className={rotate ? style.heartRotate : style.heart} >27</span>
                </div>
                <div>
                    <span className={rotate ? style.heartRotate : style.heart} >28</span>
                </div>
            </div>}

            {num === 45 && <div className={style.container43}>
                <div>
                    <span className={rotate ? style.heartRotate : style.heart} >39</span>
                </div>
                <div>
                    <span className={rotate ? style.heartRotate : style.heart} >40</span>
                </div>
            </div>}

            {num !== 39 && num !== 43 && num !== 45 && <label htmlFor={index} className={style.labelFileFigure}  >Cargar IMG {num}</label>}
            {num === 43 && <label htmlFor={index} className={style.labelFileFigureAbsolute}  >Cargar IMG 27-28</label>}
            {num === 45 && <label htmlFor={index} className={style.labelFileFigureAbsolute}  >Cargar IMG 39-40</label>}
            {num === 39 && <label htmlFor={index} className={style.labelFileFigureAbsolute}  >Cargar IMG 22-20-23-21</label>}

            <input type="file" id={index} name={`Image-${index}`} className={style.inputFileFigure} onChange={handlerOnChange} accept='.jpg, .jpeg, .png' />
            {image[`Image-${index}`] && <img src={image[`Image-${index}`].url} className={rotate ? `${rotate}` : `${style.image}`} alt="" />}

        </div >
    )
}