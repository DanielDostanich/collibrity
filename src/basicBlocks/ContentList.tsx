import React from "react";

export default function ContentList(){
  return (
    <div className="content-list container-fluid">
      <div className="content-list__title">
        Содержание Гайда
      </div>
      <ul className="content-list__list list-group">
        <ListItem text={'Введение (что будет в Гайде, почему он на такую тему, рекомендации по прочтению)'}/>
        <ListItem text={'Наше восприятие всего в жизни'}/>
        <ListItem text={'Отношения с самим собой'}/>
        <ListItem text={'Самоценность (полное принятие себя, ощущение внутренней гармонии, цельности, уверенности в себе)'}/>
        <ListItem text={'Личные границы (тест + теория: наше личное пространство, интересы, убеждения, принципы, ценности, зачем защищать свои личные границы, как их выстраивать)'}/>
        <ListItem text={'Уверенность в себе'}/>
        <ListItem text={'Целостность (что это такое, как ее достичь)'}/>
        <ListItem text={'Взаимоотношения с окружающими людьми'}/>
        <ListItem text={'Отношения между мужчиной и женщиной'}/>
        <ListItem text={'Неопределённость (страх будущего, непонимание себя, неуверенность в завтрашнем дне)'}/>
        <ListItem text={'Заключение'}/>
      </ul>
    </div>
  )
}

interface ListItemInfo{
  text: string
}

function ListItem({text}: ListItemInfo){
  return (
    <li className="content-list__item list-group-item">
      {text}
    </li>
  )
}