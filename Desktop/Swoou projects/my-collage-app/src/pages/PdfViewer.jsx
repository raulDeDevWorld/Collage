import dynamic from "next/dynamic";
import { useEffect, useState } from "react"
import style from "../styles/StylesPDF.module.css"


const InvoicePDF = dynamic(() => import("../components/pdf"), {
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






// import dynamic from "next/dynamic";
// import { PDFDownloadLink} from "@react-pdf/renderer";

// import { useEffect, useState } from "react"
// import style from "../styles/StylesPDF.module.css"


// const {PDFDownloadLink} = dynamic(() => import("@react-pdf/renderer"), {
//     ssr: false,
//   });
// const InvoicePDF = dynamic(() => import("../components/pdf"), {
//     ssr: false,
//   });

// const View = () => {
//     const [isClient, setIsClient] = useState(false);
  
//     return(
//         <div className={style.style} suppressHydrationWarning={true}>

//             {isClient && <PDFDownloadLink document={<InvoicePDF />}>

//             </PDFDownloadLink>}
                    
//         </div>
//     )
// }


// export default View

