import React from "react";

export default function Authors(){
  return (
    <div className="authors container-fluid">
      <div className="authors__title">
        Об авторах
      </div>
      <div className="authors__cards">
        <div className="authors__eva card">
          <Card name={'Ева'} description={evaDesc}/>
        </div>
        <div className="authors__milana card">
          <Card name={'Милана'} description={milanaDesc}/>
        </div>
      </div>
    </div>
  )
}

interface CardInfo{
  name: string,
  description: string
}

function Card(cardInfo: CardInfo){
  return (
    <div className="card-body">
      <h5 className="card-title">
        {cardInfo.name}
      </h5>
      <p className="card-text">
        {cardInfo.description}
      </p>
    </div>
  )
}

const evaDesc = 'Автор паблика. Изучает психологию уже достаточно давно, за это время значительно улучшила свою жизнь, изменила своё отношение к ней, избавилась от множества проблем, страхов, тревог, переживаний, сменила окружение, наладила со всеми теплую связь, стала более открытой, искренней, жизнерадостной, осознанной. Вышла из токсичных отношений, похудела и проработала многие свои блоки, установки, убеждения.'
const milanaDesc = 'Соавтор Гайда. Изучает психологию около двух лет, работает в команде с психотерапевтом, консультирует людей по различным запросам и имеет множество сильных результатов. С помощью изучения психологии смогла самостоятельно выйти из годовой депрессии, наладить все сферы жизни, понять свои сильные стороны и качества, найти работу по душе, увеличить заработок во много раз и стать полностью независимой от кого-либо.'