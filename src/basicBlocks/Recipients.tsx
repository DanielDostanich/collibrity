import React from "react";

// @ts-ignore
import pict from '../assets/picts/pict4.png'

export default function Recipients() {
  return (
    <section className="recipients container-fluid">
      <div className="recipients__title">
        ДЛЯ ЧЕГО ЭТОТ ПРОДУКТ?
      </div>
      <div className="recipients__content">
        <div className="recipients__text">
          <div className="recipients__subtitle">Если ты хочешь:</div>
          <ul className="recipients__list">
            <ListItem text={'Изучать психологию'} />
            <ListItem text={'Больше понимать себя и начать что-то менять в своей жизни'} />
            <ListItem text={'Найти выход, если погряз в рутине и почти не испытываешь положительных эмоций'} />
            <ListItem text={'Решить множество неразрешённых проблем'} />
            <ListItem text={'Стремиться быть лучше и улучшать свою жизнь'} />
            <ListItem text={'Работать над собой'} />
          </ul>
        </div>
        <img src={pict} alt="" className="recipients__img" />
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