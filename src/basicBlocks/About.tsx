import React from "react"

// @ts-ignore
import pict2 from '../assets/picts/pict2.png'

export default function About() {
  return (
    <section className="about">

      <div className="about__title">
        О ЧЕМ ГАЙД?
      </div>
      <div className="about__text">
        <img src={pict2} alt="" className="about__pict" />
        <div className="about__p">
          <p>Гайд «С меня хватит!» - является концентратом знаний, само название говорит о том, что этот продукт - отправной шаг, после которого жизнь точно не будет прежней, так как начнёт меняться представление о многих сферах в вашей жизни.</p>
        </div>
      </div>
    </section>
  )
}
