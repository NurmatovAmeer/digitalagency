import Image from "next/image";
import React from "react";
import { images } from "../constants";
import Slider from "react-slick";

const carts = [
  {
    img: images.stepworkicon,
    title: "Изучаем проект",
    text: "Мы знакомимся с вашим бизнесом, изучаем специфику ниши и анализируем активность конкурентов и определяем целевую аудиторию (ЦА).",
  },
  {
    img: images.stepworkicon,
    title: "Разрабатываем медиаплан",
    text: "Выбираем инструменты, составляем медиаплан. Определяем с вами цели.",
  },
  {
    img: images.stepworkicon,
    title: "Создаем кампанию",
    text: "Мы создаем и настраиваем Google Analytics, создаем цели в GA, создаем аудитории. Составляем рекламные объявления, собираем релевантные коммерческие ключи и определяем список минус-слов. Запускаем рекламу.",
  },
  {
    img: images.stepworkicon,
    title: "Оптимизируем",
    text: "После запуска рекламы мы анализируем результаты и оптимизируем цели рекламной кампании (автоматическая оптимизация роботами).",
  },
  {
    img: images.stepworkicon,
    title: "Улучшаем",
    text: "Определяем и используем дополнительные инструменты и опции внутри системы, исправляем недочеты (если такие были), корректируем ставки (цена за клик, цена конверсии и т.д.).",
  },
  {
    img: images.stepworkicon,
    title: "Подготавливаем отчеты",
    text: "Подготавливаем и предоставляем детальную отчетность о проделанной работе и результатах запущенных кампаний в Google Adwords. Составляем перечень рекомендаций по дальнейшему ведению кампаний.",
  },
];

const StepWork = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="bg-white">
      <div className="container">
        <div className="py-[80px]">
          <h2 className="font-black text-lg lg:text-xl text-bluedepths text-center mb-[60px]">
            Этапы работы
          </h2>
          <div className="hidden sm:grid grid-cols-3 gap-5 lg:gap-[40px]">
            {carts.map((cart, i) => (
              <div
                className="w-full border-t-2 border-seadrive flex flex-col items-start pt-[40px]"
                key={i}
              >
                <div className="flex items-center justify-start mb-[40px]">
                  <Image src={cart.img} alt="icon" />
                </div>
                <h3 className="font-bold text-[18px] lg:text-[26px] text-darkblue mb-3 lg:mb-6">
                  {cart.title}
                </h3>
                <p className="font-regular text-[16px] lg:text-[20px] leading-7 text-darkblue">
                  {cart.text}
                </p>
              </div>
            ))}
          </div>
          <div className="sm:hidden block">
            <Slider {...settings} className="w-full">
              {carts.map((cart, i) => (
                <div
                  className="w-full border-t-2 border-seadrive flex flex-col items-start pt-[40px]"
                  key={i}
                >
                  <div className="flex items-center justify-start mb-[40px]">
                    <Image src={cart.img} alt="icon" />
                  </div>
                  <h3 className="font-bold text-[18px] lg:text-[26px] text-darkblue mb-3 lg:mb-6">
                    {cart.title}
                  </h3>
                  <p className="font-regular text-[16px] lg:text-[20px] leading-7 text-darkblue">
                    {cart.text}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepWork;
