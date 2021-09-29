import React from "react";
import { SellType } from "../App";

export default function Selling({ showModal }: Args) {
  return (
    <section className="selling">
      <div className="container">
        <div className="selling__title">
          ТАРИФЫ
        </div>
        <div className="selling__content">
          <div className="selling__card selling__stroke-right">
            <div className="selling__card-title">
              Тариф X
            </div>
            <div className="selling__card-first-border">
              <div className="selling__card-top-text">
                Доступ к гайду навсегда
              </div>
            </div>
            <div className="selling__card-price">
              390р.
            </div>
            <div className="selling__card-button btn" onClick={() => showModal(SellType.X)}>
              Купить
            </div>
          </div>
          <div className="selling__card selling__stroke-right">
            <div className="selling__card-title">
              Тариф Black
            </div>
            <div className="selling__card-top-text">
              Доступ к гайду навсегда
            </div>
            <div className="selling__card-bottom-text">
              Обсуждение вопросов с кураторами
            </div>
            <div className="selling__card-price">
              490р.
            </div>
            <div className="selling__card-button btn" onClick={() => showModal(SellType.Black)}>
              Купить
            </div>
          </div>
          <div className="selling__card">
            <div className="selling__card-title">
              Тариф Premium
            </div>
            <div className="selling__card-top-text">
              Доступ к гайду навсегда
            </div>
            <div className="selling__card-bottom-text">
              Личное обуждение вопросов с Евой
            </div>
            <div className="selling__card-price">
              790р.
            </div>
            <div className="selling__card-button btn" onClick={() => showModal(SellType.Premium)}>
              Купить
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface Args {
  showModal: (type: SellType) => void
}