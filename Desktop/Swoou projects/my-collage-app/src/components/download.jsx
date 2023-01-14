import dynamic from "next/dynamic";
import { useEffect, useState } from "react"
import style from "../styles/StylesPDF.module.css"
import { PDFDownloadLink } from "@react-pdf/renderer";


const InvoicePDF = dynamic(() => import("../components/pdf"), {
    ssr: false,
  });

const View = () => {


    return(
        <div className={style.style}>
            <PDFDownloadLink document={<InvoicePDF/>} fileName='doc.pdf'>
                download
            </PDFDownloadLink>
        </div>
    )
}


export default View

