import React from "react"


// @ts-ignore
import pict1 from '../assets/picts/pict1.png'

export default function Title() {
  return (
    <section className="title container-fluid">
      <div className="title__text">
        <div className="title__name">С МЕНЯ ХВАТИТ!</div>
        <div className="title__author">ОТ ЕВЫ @COLLIBRITY</div>
      </div>
      <img src={pict1} alt="" className="title__pict" />
    </section>
  );
}