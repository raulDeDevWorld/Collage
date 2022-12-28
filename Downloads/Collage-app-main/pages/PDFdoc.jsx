import dynamic from "next/dynamic";
import { useEffect, useState } from "react"
import style from "../styles/StylesPDF.module.css"



const InvoicePDF = dynamic(() => import("../components/pdfDoc"), {
    ssr: false,
  });

const View = () => {

    return(
        <div className={style.style}>
                    <InvoicePDF />
        </div>
    )
}


export default View
