import React from "react";
import { SellType } from "../App";





export default function ({ isOpen, sellType, setIsOpen }: Args) {
  return (
    <>
      {isOpen && (<div className="selling-modal" onClick={() => setIsOpen(false)}>
        <div className="selling-modal__body">
          <div className="selling-modal__body--title">
            Ваш заказ
          </div>
          {sellType == SellType.X && (<div selling-modal__body--name>Тариф X — 390р.</div>)}
          {sellType == SellType.Black && (<div selling-modal__body--name>Тариф Black — 490р.</div>)}
          {sellType == SellType.Premium && (<div selling-modal__body--name>Тариф Premium — 790р.</div>)}
          <div className="selling-modal__body--button btn" onClick={() => alert("Dummy: sending data")}>
            Купить
          </div>
        </div>
      </div>)}
    </>
  )
}

interface Args {
  isOpen: boolean,
  sellType: SellType,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

