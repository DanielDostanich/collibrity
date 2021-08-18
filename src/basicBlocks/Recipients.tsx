import React from "react";

// @ts-ignore
import pict from '../assets/picts/pict4.png'

export default function Recipients() {
  return (
    <section className="recipients">
      <div className="recipients__container container">
        <div className="recipients__title">
          ДЛЯ КОГО ЭТОТ ПРОДУКТ?
        </div>
        <div className="recipients__text">
          <ul className="recipients__list">
            <ListItem text={'Для тех, кто очень увлекается психологией'} />
            <ListItem text={'Для тех, кто хочет расширить границы своего мышления'} />
            <ListItem text={'Для тех, кто погряз в рутине и почти не испытывает положительных эмоций'} />
            <ListItem text={'Для тех, у кого есть множество неразрешенных проблем, которые тянутся уже долгое время'} />
            <ListItem text={'Для тех, кто наконец хочет что-то изменить в своей жизни'} />
            <ListItem text={'Для тех, кто желает глубже понимать аспекты нашей жизни'} />
            <ListItem text={'Для тех, кто стремится быть лучше и улучшать свою жизнь'} />
            <ListItem text={'Для тех, кто хочет работать над собой'} />
          </ul>
          <img src={pict} alt="" className="recipients__img" />
        </div>
      </div>
    </section>
  )
}

interface ListItemInfo {
  text: string
}

function ListItem({ text }: ListItemInfo) {
  return (
    <li className="recipients__list-item">
      {text}
    </li>
  )
}