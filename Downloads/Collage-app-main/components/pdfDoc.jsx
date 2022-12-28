import { Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import { useUser } from "../context/Context.js"
import { useState, useRef, useEffect } from 'react'
import QRCode from "react-qr-code";
import { AuthErrorCodes } from "firebase/auth";


Font.register({ family: "Inter", src: "/assets/font.otf" })

const styles = StyleSheet.create({
    body: {
        position: 'relative',
        boxSizing: 'border-box',
        padding: ' 0.3cm 1cm',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        boxShadow: '0 0 5px 1px rgb(175, 175, 175)',
    },

    container: {
        position: 'relative',
        boxSizing: 'border-box',
        padding: '0px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgb(255, 255, 255)',
        height: '100%',
        width: '100%',
        zIndex: '100',
    },
    box: {
        width: '50%',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5mm 0'

    },
    text: {
        width: '100%',
        fontSize: '10px',
        textAlign: 'center',
        backgroundColor: 'white',
        margin: '2px 0'


    },
    image: {
        height: '1cm',
        width: '1cm',
    }
})

const PDFView = () => {
    const { image, setAlbunImage, templates, numeration, qr, dataUrl, uuid } = useUser()
    console.log(dataUrl)
    return (
        <PDFViewer>

            <Document>
                <Page size='A4' style={styles.body} >
                    <View style={styles.container} >
                        {uuid.map((i, index) =>
                            <View style={styles.box}  key={index}>
                                <Image src='/logo.png' style={styles.image}></Image>
                                <Text style={styles.text}>Gracias por tu compra</Text>
                                <Text style={styles.text}>Tu codigo de activación es el:</Text>
                                <Text style={styles.text}>{i}  </Text>
                            </View>
                        )}
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default PDFView















