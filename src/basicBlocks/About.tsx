import React from "react"

// @ts-ignore
import pict2 from '../assets/picts/pict2.png'

// @ts-ignore
import pict3 from '../assets/picts/pict3.png'

export default function About() {
  return (
    <section className="about">
      <div className="about__container container">
        <div className="about__title">
          О ЧЕМ ГАЙД?
        </div>
        <div className="about__text">
          <img src={pict2} alt="" className="about__pict1" />
          <div className="about__p1">
            <p>Этот гайд включает в себя основную и фундаментальную информацию, которая поможет вам иначе взглянуть на свою жизнь, увидеть все не удовлетворяющие вас моменты и изменить их.</p>
          </div>
          <div className="about__p2">
            <p>Гайд «С меня хватит!» является концентратом знаний, которые проверены на личном опыте и действительно работают. Само название говорит о том, что этот продукт – отправной шаг, после которого жизнь точно не будет прежней, так как начнёт меняться представление о многих сферах вашей жизни.</p>
          </div>
          <img src={pict3} alt="" className="about__pict2" />
        </div>
      </div>
    </section>
  )
}
