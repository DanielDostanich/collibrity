import React from "react";

export default function Results() {
  return (
    <section className="results">
      <div className="results__container container">
        <div className="results__title">
          КАКОЙ РЕЗУЛЬТАТ ВЫ ПОЛУЧИТЕ?
        </div>
        <div className="results__text">
          <ol className="results__list">
            <ListItem text={'Выстроите правильные отношения с собой'} />
            <ListItem text={'Проработаете негативные установки в голове и замените их на позитивные'} />
            <ListItem text={'Начнёте любить и ценить себя'} />
            <ListItem text={'Обретёте целостность и раскроете свою индивидуальность'} />
            <ListItem text={'Станете уверенным в себе человеком'} />
            <ListItem text={'Определите и выстроите свои личные границы'} />
            <ListItem text={'Сможете сразу распознавать токсичных людей, которые пытаются вами манипулировать'} />
            <ListItem text={'Научитесь выстраивать здоровые отношения с окружающими людьми (близкими, друзьями, партнёром)'} />
          </ol>
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
    <li className="results__list-item">
      {text}
    </li>
  )
}