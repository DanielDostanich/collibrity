import React from "react";

export default function Results() {
  return (
    <div className="results container">
      <div className="results__title">
        Какой результат вы получите после прочтения Гайда?
      </div>
      <div className="results__intro-text">
        <p>Этот гайд создан для того, чтобы вы смогли благодаря нему погрузиться во многие аспекты нашей жизни со
          стороны психологии, потому что именно это даёт ключи к решению наших проблем, помогает значительно улучшать
          качество нашей жизни и уровень нашего удовлетворения ею.
        </p>
        <p>После прочтения данного Гайда вы поймёте, из чего складывается наша жизнь и что первостепенно влияет на неё.
        </p>
        <p>Вы узнаете:</p>
      </div>
      <ul className="results__list">
        <li className="results__list-item">
          Как выстроить правильные отношения с собой
        </li>
        <li className="results__list-item">
          Как начать себя действительно ценить
        </li>
        <li className="results__list-item">
          Как стать уверенным в себе человеком
        </li>
        <li className="results__list-item">
          Как обрести целостность
        </li>
        <li className="results__list-item">
          Как выстраивать и определять свои личные границы
        </li>
        <li className="results__list-item">
          Как выстраивать отношения с окружающими (близкими, друзьями, партнером)
        </li>
        <li className="results__list-item">
          Что делать со страхом неопределенности, неуверенности в своём будущем, в стабильности и безопасности завтрашнего дня
        </li>
      </ul>
      <div className="results__outro-text">
        Кроме этого, в Гайде есть множество рекомендаций, советов, практик, которые вы сможете применять в своей жизни и ещё эффективнее работать над собой и создавать эту жизнь.
      </div>
    </div>
  )
}