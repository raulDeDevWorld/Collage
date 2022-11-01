import React from "react";
import Card from "./Card";
import image1 from "../assets/image1.png";
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'

const cards = [
  {
    id: 1,
    title: "Solicitar crédito",
    image: image1,
    link: "/Cotizar",
    text: "hola1",
  },
  {
    id: 2,
    title: "Cotizaciones automaticas",
    image: image2,
    link: "/Datos",
    text: "hola2",
  },
  {
    id: 3,
    title: "Ver viviendas o locales",
    image: image3,
    link: "/Solicitud",
    text: "hola3",
  },
  {
    id: 4,
    title: "Registrar prospectos",
    image: image4,
    url: "https://youtube.com/fazttech",
    text: "hola4",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id, text, link }) => (
          <div className="col-3" key={id}>
            <Card imageSource={image} title={title} url={url} text={text}
            link={link}/>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Cards;
