import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>   
                    <link rel="icon" href="/logo.png" />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='apple-touch-icon' href='/logo.png' />
                    <meta name="theme-color" content="#E51F22" />
                    <meta name="msapplication-navbutton-color" content="#E51F22" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="#E51F22" />
                    <meta name="description" content="Sistema de Administracion de Clientes y Formularios" />
                    <meta name="keywords" content="Logistics Gear" />
                    <meta name="author" content="Logistics Gear" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}