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
            <ListItem text={'Как выстроить правильные отношения с собой'} />
            <ListItem text={'Как начать себя действительно ценить'} />
            <ListItem text={'Как стать уверенным в себе человеком'} />
            <ListItem text={'Как обрести целостность'} />
            <ListItem text={'Как выстраивать и определять свои личные границы'} />
            <ListItem text={'Как выстраивать отношения с окружающими (близкими, друзьями, партнером)'} />
            <ListItem text={'Что делать со страхом неопределённости, неуверености в своем будущем, в стабильности и безопасности завтрашнего дня'} />
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