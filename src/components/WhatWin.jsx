import Image from "next/image";
import React from "react";
import { images } from "../constants";

const texts = [
  "Увеличение притока потенциальных горячих клиентов с уже определенной и сформированной потребностью",
  "Вывод вашего сайта на лидирующие позиции на первой странице результатов поиска с пометкой «реклама»",
  "Продуманная рекламная стратегия",
  "Постоянный анализ эффективности рекламных кампаний",
  "Рекомендации по развитию рекламной стратегии",
  "Регулировка уровня затрат",
];

const WhatWin = () => {
  return (
    <section className="bg-[url('../assets/img/footer-background.png')]">
      <div className="container">
        <div className="py-[80px]">
          <h2 className="font-black text-lg lg:text-xl text-bluedepths text-center mb-[60px]">
            Что вы получаете в результате?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[50px]">
            {texts.map((text, i) => (
              <div className="flex items-center" key={i}>
                <div className="flex items-center justify-center">
                  <Image src={images.kubok} alt='kubok' className="w-full h-full"/>
                </div>
                <p className="font-bold text-[16px] lg:text-[20px] text-darkblue  ml-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWin;
