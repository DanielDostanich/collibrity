import React from "react";

export default function Recipients() {
  return (
    <div className="recipients container">
      <div className="recipients__title">
        Для кого этот продукт?
      </div>
      <ul className="recipients__list list-group list-group-flush">
        <li className="recipients__list-item list-group-item">
          Для тех, кто очень увлекается психологией
        </li>
        <li className="recipients__list-item list-group-item">
          Для тех, кто хочет расширить границы своего мышления
        </li>
        <li className="recipients__list-item list-group-item">
          Для тех, кто погряз в рутине и почти не испытывает положительных эмоций
        </li>
        <li className="recipients__list-item list-group-item">
          Для тех, у кого есть множество неразрешенных проблем, которые тянутся уже долгое время
        </li>
        <li className="recipients__list-item list-group-item">
          Для тех, кто наконец хочет что-то изменить в своей жизни
        </li>
        <li className="recipients__list-item list-group-item">
          Для тех, кто желает глубже понимать аспекты нашей жизни
        </li>
        <li className="recipients__list-item list-group-item">
          Для тех, кто стремится быть лучше и улучшать свою жизнь
        </li>
        <li className="recipients__list-item list-group-item">
          Для тех, кто хочет работать над собой
        </li>
      </ul>
    </div>
  )
}