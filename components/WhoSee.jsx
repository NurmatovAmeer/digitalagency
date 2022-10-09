import Image from "next/image";
import React from "react";
import { images } from "../constants";

const cards = [
  { img: images.whosee1, title: "Тем, кто ищет в поиске Google Вашу компанию" },
  {
    img: images.whosee2,
    title: "Тем, кто ищет в поиске Google ваш продукт или услугу",
  },
  { img: images.whosee3, title: "Тем, кто уже был на вашем сайте" },
  {
    img: images.whosee4,
    title: "Тем, кто ищет в поиске Google решение своей проблемы",
  },
];

const WhoSee = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="pt-[80px] pb-[100px]">
          <h2 className="font-black text-[28px] lg:text-lg text-center text-bluedepths mb-[30px] sm:mb-[40px] md:mb-[60px]">
            Кому мы показываем рекламу в Google?​
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[30px] sm:gap-5 lg:gap-[40px]">
            {cards.map((card, i) => (
              <div className="flex flex-col items-center justify-start" key={i}>
                <div className="flex items-center justify-center mb-[40px] p-2 sm:p-[30px] border border-seadrive rounded-xl">
                  <Image src={card.img} alt="icon" />
                </div>
                <p className="font-bold text-20px text-darkblue text-center">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoSee;
