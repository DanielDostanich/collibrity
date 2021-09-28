import React from "react";

// @ts-ignore
import pict from '../assets/picts/pict5.png'

export default function ContentList() {
  return (
    <section className="content-list">
      <div className="content-list__container container">
        <div className="content-list__title">
          СОДЕРЖАНИЕ ГАЙДА
        </div>
        <ul className="content-list__list">
          <ListItem text={'Введение (что будет в Гайде, почему он на такую тему, рекомендации к прочтению)'} />
          <ListItem text={'Наше восприятие всего в жизни'} />
          <ListItem text={'Отношения с самим собой'} />
          <ListItem text={'Самоценность (полное принятие себя, уверенности)'} />
          <ListItem text={'Личные границы (тест + теория)'} />
          <ListItem text={'Уверенность в себе'} />
          <ListItem text={'Целостность (что это такое, как её достичь)'} />
          <ListItem text={'Взаимоотношения с окружающими людьми'} />
          <ListItem text={'Отношения между мужчиной и женщиной'} />
          <ListItem text={'Неопределенность (страх будущего, неуверенность в завтрашнем дне)'} />
          <ListItem text={'Заключение'} />
        </ul>
        <img src={pict} alt="" className="content-list__image" />
      </div>
    </section>
  )
}

interface ListItemInfo {
  text: string
}

function ListItem({ text }: ListItemInfo) {
  return (
    <li className="content-list__item">
      {text}
    </li>
  )
}