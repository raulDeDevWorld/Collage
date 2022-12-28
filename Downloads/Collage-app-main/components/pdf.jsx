import { Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import { useUser } from "../context/Context.js"
import { useState, useRef, useEffect } from 'react'
import QRCode from "react-qr-code";
import { redirect } from "next/dist/server/api-utils/index.js";


Font.register({ family: "Inter", src: "/assets/font.otf" })

const styles = StyleSheet.create({
    body: {
        position: 'relative',
        boxSizing: 'border-box',
        padding: '1cm',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: '0 0 5px 1px rgb(175, 175, 175)',
    },
    form: {
        boxSizing: 'border-box',
        position: 'relative',
        width: '6cm',
        height: '8cm',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2mm solid rgb(229, 229, 229)',
        margin: '0.5mm'
    },

    formReverse: {
        boxSizing: 'border-box',
        position: 'relative',
        width: '6cm',
        height: '8cm',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0.5mm dashed rgb(229, 229, 229)',
        margin: '0.5mm'
    },


    image: {
        boxSizing: 'border-box',
        position: 'relative',
        objectFit: 'cover'
    },
    heart: {
        height: '50px',
        width: '50px',
        textAlign: 'center',
        position: 'absolute',
        fontSize: '12px',
        color: 'rgb(0, 0, 0)',
        border: 'none',
        padding: '5px',
        marginBottom: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
})

const PDFView = () => {
    const { image, setAlbunImage, templates, numeration, qr, dataUrl } = useUser()
    console.log(dataUrl)
    return (
        <PDFViewer>

            <Document>

                <Page size='A4' style={styles.body} >
                    {templates[0].map((i, index) =>
                        <View style={styles.form} key={`A-${numeration[index + (0 * 9)]}`}>

                            <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[0][index] == 'h' ? '90' : '0'}deg )` }}></Image>
                            <View style={{ ...styles.heart, transform: `rotate(${templates[0][index] == 'h' ? '90' : '0'}deg )` }}>  <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>{numeration[index + (0 * 9)]}</Text> </View>

                            {image[`Image-${numeration[index + (0 * 9)]}`] && <Image src={image[`Image-${numeration[index + (0 * 9)]}`].url} style={{ ...styles.image, transform: `rotate(${templates[0][index] == 'h' ? '90' : '0'}deg )`, objectFit: 'cover', width: templates[0][index] == 'h' ? '77mm' : '57mm', height: templates[0][index] == 'h' ? '57mm' : '77mm' }} />}
                        </View>)}
                </Page>
                <Page size='A4' style={{ ...styles.body, flexDirection: 'row-reverse' }} >
                    {templates[0].map((i, index) =>
                        <View style={styles.formReverse} key={`R-${numeration[index + (0 * 9)]}`}>

                            <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[0][index] == 'h' ? '90' : '0'}deg )` }}></Image>
                            <View style={{ ...styles.heart, transform: `rotate(${templates[0][index] == 'h' ? '90' : '0'}deg )` }}>  <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>{numeration[index + (0 * 9)]}</Text> </View>
                        </View>)}
                </Page>


                <Page size='A4' style={styles.body} >
                    {templates[1].map((i, index) =>
                        <View style={styles.form} key={`A-${numeration[index + (1 * 9)]}`}>
                            <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[1][index] == 'h' ? '90' : '0'}deg )` }}></Image>
                            <View style={{ ...styles.heart, transform: `rotate(${templates[1][index] == 'h' ? '90' : '0'}deg )` }}>  <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>{numeration[index + (1 * 9)]}</Text> </View>

                            {image[`Image-${numeration[index + (1 * 9)]}`] && <Image src={image[`Image-${numeration[index + (1 * 9)]}`].url} style={{ ...styles.image, transform: `rotate(${templates[1][index] == 'h' ? '90' : '0'}deg )`, objectFit: 'cover', width: templates[1][index] == 'h' ? '77mm' : '57mm', height: templates[1][index] == 'h' ? '57mm' : '77mm' }} />}
                        </View>)}
                </Page>
                <Page size='A4' style={{ ...styles.body, flexDirection: 'row-reverse' }} >
                    {templates[1].map((i, index) =>
                        <View style={styles.formReverse} key={`R-${numeration[index + (1 * 9)]}`}>
                            <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[1][index] == 'h' ? '90' : '0'}deg )` }}></Image>
                            <View style={{ ...styles.heart, transform: `rotate(${templates[1][index] == 'h' ? '90' : '0'}deg )` }}>  <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>{numeration[index + (1 * 9)]}</Text> </View>
                        </View>)}
                </Page>


                <Page size='A4' style={styles.body} >
                    {templates[2].map((i, index) =>
                        <View style={{
                            ...styles.form,
                            height: index > 6 ? '83mm' : '80mm',
                            width: index > 6 ? '63mm' : '60mm'
                        }} key={`A-${numeration[index + (2 * 9)]}`}>
                            <Image src='/heart.png' style={{
                                ...styles.heart,
                                transform: `rotate(${templates[2][index] == 'h' ? '90' : '0'}deg )`,
                            }} />
                            <View style={{ ...styles.heart, transform: `rotate(${templates[2][index] == 'h' ? '90' : '0'}deg )` }}>  <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>{numeration[index + (2 * 9)]}</Text> </View>
                            {image[`Image-${numeration[index + (2 * 9)]}`] &&
                                <Image src={image[`Image-${numeration[index + (2 * 9)]}`].url} style={{
                                    ...styles.image,
                                    transform: `rotate(${templates[2][index] == 'h' ? '90' : '0'}deg )`,
                                    objectFit: 'cover',
                                    width: templates[2][index] == 'h' ? (index > 6 ? '80mm' : '77mm') : (index > 6 ? '60mm' : '57mm'),
                                    height: templates[2][index] == 'h' ? (index > 6 ? '60mm' : '57mm') : (index === 8 ? '80mm' : '77mm')
                                }} />}
                        </View>)}
                </Page>

                <Page size='A4' style={{ ...styles.body, flexDirection: 'row-reverse' }} >
                    {templates[2].map((i, index) =>
                        <View style={{
                            ...styles.formReverse,
                            height: index > 6 ? '83mm' : '80mm',
                            width: index > 6 ? '63mm' : '60mm'
                        }} key={`A-${numeration[index + (2 * 9)]}`}>

                            <Image src='/heart.png' style={{
                                ...styles.heart,
                                transform: `rotate(${templates[2][index] == 'h' ? '90' : '0'}deg )`,
                            }} />
                            <View style={{ ...styles.heart, transform: `rotate(${templates[2][index] == 'h' ? '90' : '0'}deg )` }}>  <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>{numeration[index + (2 * 9)]}</Text> </View>
                        </View>)}
                </Page>

                {/* {templates[2].map((i, index) =>
                        <View style={styles.formReverse} key={`R-${numeration[index + (2 * 9)]}`}>
                            <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[2][index] == 'h' ? '90' : '0'}deg )` }}></Image>
                            <View style={{ ...styles.heart, transform: `rotate(${templates[2][index] == 'h' ? '90' : '0'}deg )` }}>  <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>{numeration[index + (2 * 9)]}</Text> </View>
                        </View>)} */}

                <Page size='A4' style={styles.body} >
                    {templates[3].map((i, index) =>
                        <View style={styles.form} key={`A-${numeration[index + (3 * 9)]}`}>
                            <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[3][index] == 'h' ? '90' : '0'}deg )` }}></Image>
                            <View style={{ ...styles.heart, transform: `rotate(${templates[3][index] == 'h' ? '90' : '0'}deg )` }}>  <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>{numeration[index + (3 * 9)]}</Text> </View>

                            {image[`Image-${numeration[index + (3 * 9)]}`] && <Image src={image[`Image-${numeration[index + (3 * 9)]}`].url} style={{ ...styles.image, transform: `rotate(${templates[3][index] == 'h' ? '90' : '0'}deg )`, objectFit: 'contain', width: templates[3][index] == 'h' ? '77mm' : '57mm', height: templates[3][index] == 'h' ? '57mm' : '77mm' }} />}
                        </View>)}

                    {/* <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={qr}
                        viewBox={`0 0 256 256`}
                    /> */}
                    <View style={{ ...styles.form, border: 'none' }} key={'qr'} >
                        <Image src={dataUrl ? dataUrl : 'qr.jpg'} style={{ ...styles.image, objectFit: 'cover', width: '3.5cm', height: '3.5cm', border: 'none' }} />
                    </View>
                </Page>
                <Page size='A4' style={{ ...styles.body, flexDirection: 'row-reverse' }} >
                    {templates[3].map((i, index) =>
                        <View style={styles.formReverse} key={`R-${numeration[index + (3 * 9)]}`}>
                            <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[3][index] == 'h' ? '90' : '0'}deg )` }}></Image>
                            <View style={{ ...styles.heart, transform: `rotate(${templates[3][index] == 'h' ? '90' : '0'}deg )` }}>  <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>{numeration[index + (3 * 9)]}</Text> </View>
                        </View>)}
                </Page>


                <Page size='A4' style={{ ...styles.body, display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
                    {templates[4].map((i, index) =>
                        <View style={{ ...styles.form, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: numeration.indexOf(numeration[index + (4 * 9)]) !== 36 ? '80mm' : '160mm', height: numeration.indexOf(numeration[index + (4 * 9)]) !== 36 ? '120mm' : '120mm', margin: '1.5mm' }} key={`A-${numeration[index + (4 * 9)]}`}>





                            {numeration.indexOf(numeration[index + (4 * 9)]) == 36 &&
                                <View style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: '50%', position: 'absolute', top: '0' }}>

                                    <View style={{ boxSizing: 'border-box', width: '50%', height: '100%', position: 'relative', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1.5mm solid rgb(229, 229, 229)' }}  >
                                        <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[4][index] == 'h' ? '90' : '0'}deg )` }}></Image>
                                        <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>35</Text>
                                    </View>
                                    <View style={{ boxSizing: 'border-box', width: '50%', height: '100%', position: 'relative', right: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1.5mm solid rgb(229, 229, 229)', }} >
                                        <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[4][index] == 'h' ? '90' : '0'}deg )` }}></Image>
                                        <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>36</Text>
                                    </View>
                                </View>}

                            {numeration.indexOf(numeration[index + (4 * 9)]) == 36 && 
                            <View style={{boxSizing: 'border-box', display: 'flex', flexDirection: 'row', width: '100%', height: '50%', position: 'absolute', bottom: '0' }} >
                                <View style={{boxSizing: 'border-box', width: '100%', height: '100%', position: 'relative', right: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1.5mm solid rgb(229, 229, 229)', }}>
                                    <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[4][index] == 'h' ? '90' : '0'}deg )` }}></Image>
                                    <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>37</Text>
                                </View>
                                <View style={{boxSizing: 'border-box', width: '100%', height: '100%', position: 'relative', right: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1.5mm solid rgb(229, 229, 229)', }} >
                                    <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[4][index] == 'h' ? '90' : '0'}deg )` }}></Image>
                                    <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>38</Text>7ç40111:_¨*
                                                                    </View>pç+i 
                            </View>}

                            {numeration.indexOf(numeration[index + (4 * 9)]) !== 36 && <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[4][index] == 'h' ? '90' : '0'}deg )` }}></Image>}
                            {numeration.indexOf(numeration[index + (4 * 9)]) !== 36 &&
                                <View style={{ ...styles.heart, transform: `rotate(${templates[4][index] == 'h' ? '90' : '0'}deg )` }}>
                                    <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>{numeration[index + (4 * 9) + 1]}</Text>
                                </View>}




                            {image[`Image-${numeration[index + (4 * 9)]}`] && <Image src={image[`Image-${numeration[index + (4 * 9)]}`].url} style={{
                                ...styles.image, transform: `rotate(${templates[4][index] == 'h' ? '90' : '0'}deg )`, objectFit: 'cover',



                                width: templates[4][index] == 'h'
                                    ? (numeration.indexOf(numeration[index + (4 * 9)]) > 36
                                        ? '117mm' : '100%')
                                    : '100%',

                                height: templates[4][index] == 'h'
                                    ? (numeration.indexOf(numeration[index + (4 * 9)]) > 36
                                        ? '77mm' : '100%')
                                    : '100%',




                                position: 'absolute'
                            }} />}
                        </View>)}
                </Page>




                <Page size='A4' style={{ ...styles.body, flexDirection: 'row-reverse', display: 'flex', justifyContent: 'center' }} >
                    {templates[4].map((i, index) =>
                        <View style={{ ...styles.formReverse, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: numeration.indexOf(numeration[index + (4 * 9)]) !== 36 ? '80mm' : '160mm', height: numeration.indexOf(numeration[index + (4 * 9)]) !== 36 ? '120mm' : '120mm', margin: '1.5mm' }} key={`A-${numeration[index + (4 * 9)]}`}>

                            {numeration.indexOf(numeration[index + (4 * 9)]) == 36 && 
                            <View style={{boxSizing: 'border-box', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: '60mm', position: 'absolute', top: '0' }}>

                                <View style={{boxSizing: 'border-box', width: '50%', height: '60mm', position: 'relative', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0.5mm dashed rgb(229, 229, 229)', borderTop: 'none', borderLeft: 'none' }} >
                                    <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[4][index] == 'h' ? '90' : '0'}deg )` }}></Image>
                                    <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>35</Text>
                                </View>
                                <View style={{boxSizing: 'border-box', width: '50%', height: '60mm', position: 'relative', right: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0.5mm dashed rgb(229, 229, 229)', borderTop: 'none', borderRight: 'none' }}>
                                    <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[4][index] == 'h' ? '90' : '0'}deg )` }}></Image>
                                    <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>36</Text>
                                </View>
                            </View>}
                            {numeration.indexOf(numeration[index + (4 * 9)]) == 36 && 
                            <View style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'row', width: '100%', height: '60mm', position: 'absolute', bottom: '0' }} >
                                <View style={{boxSizing: 'border-box', width: '100%', height: '60mm', position: 'relative', right: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0.5mm dashed rgb(229, 229, 229)', borderBottom: 'none', borderLeft: 'none' }}>
                                    <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[4][index] == 'h' ? '90' : '0'}deg )` }}></Image>
                                    <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>37</Text>
                                </View>
                                <View style={{boxSizing: 'border-box', width: '100%', height: '60mm', position: 'relative', right: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0.5mm dashed rgb(229, 229, 229)', borderBottom: 'none', borderRight: 'none' }}>
                                    <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[4][index] == 'h' ? '90' : '0'}deg )` }}></Image>
                                    <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>38</Text>
                                </View>
                            </View>}

                            {numeration.indexOf(numeration[index + (4 * 9)]) !== 36 && <Image src='/heart.png' style={{ ...styles.heart, transform: `rotate(${templates[4][index] == 'h' ? '90' : '0'}deg )` }}></Image>}
                            {numeration.indexOf(numeration[index + (4 * 9)]) !== 36 && <View style={{ ...styles.heart, transform: `rotate(${templates[4][index] == 'h' ? '90' : '0'}deg )` }}>  <Text style={{ ...styles.heart, fontSize: '10px', paddingTop: '16px' }}>{numeration[index + (4 * 9) + 1]}</Text> </View>}



                        </View>)}
                </Page>

            </Document>
        </PDFViewer>
    )
}

export default PDFView


















