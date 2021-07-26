import React from "react";

export default function Recipients() {
  return (
    <div className="recipients container">
      <div className="recipients__title">
        Для кого этот продукт?
      </div>
      <ul className="recipients__list list-group list-group-flush">
        <ListItem text={'Для тех, кто очень увлекается психологией'}/>
        <ListItem text={'Для тех, кто хочет расширить границы своего мышления'}/>
        <ListItem text={'Для тех, кто погряз в рутине и почти не испытывает положительных эмоций'}/>
        <ListItem text={'Для тех, у кого есть множество неразрешенных проблем, которые тянутся уже долгое время'}/>
        <ListItem text={'Для тех, кто наконец хочет что-то изменить в своей жизни'}/>
        <ListItem text={'Для тех, кто желает глубже понимать аспекты нашей жизни'}/>
        <ListItem text={'Для тех, кто стремится быть лучше и улучшать свою жизнь'}/>
        <ListItem text={'Для тех, кто хочет работать над собой'}/>
      </ul>
    </div>
  )
}

interface ListItemInfo {
  text: string
}

function ListItem({text}: ListItemInfo) {
  return (
    <li className="recipients__list-item list-group-item">
      {text}
    </li>
  )
}