import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
import { RiCloseCircleLine } from "react-icons/ri";
import { images } from "../constants";

const regularList = [
  "Стоимость / мес.",
  "Количество запросов",
  "Количество объявлений",
  "Количество кампаний",
  "Реклама в поиске",
  "Реклама в КМС",
  "Ретаргетинг",
  "Настройка аналитики",
  "Google my business аккаунт",
  "Баннерная реклама",
  "Видеореклама (Youtube)",
];

const carts = [
  {
    img: images.breifcase,
    title: "Малый бизнес",
    text: "Бюджет рекламной кампании",
    price: "до 1000 евро",
    items: [
      { text: "100 евро" },
      { text: "до 100 запросов" },
      { text: "до 100 объявлений" },
      { text: "до 10 кампаний" },
      {
        icon: (
          <IoIosCheckmarkCircleOutline fontSize={25} className="text-green" />
        ),
      },
      {
        icon: (
          <IoIosCheckmarkCircleOutline fontSize={25} className="text-green" />
        ),
      },
      {
        icon: (
          <IoIosCheckmarkCircleOutline fontSize={25} className="text-green" />
        ),
      },
      {
        icon: (
          <IoIosCheckmarkCircleOutline fontSize={25} className="text-green" />
        ),
      },
      {
        icon: (
          <IoIosCheckmarkCircleOutline fontSize={25} className="text-green" />
        ),
      },
      {
        icon: <RiCloseCircleLine fontSize={25} className="text-red" />,
      },
      {
        icon: <RiCloseCircleLine fontSize={25} className="text-red" />,
      },
    ],
  },
  {
    img: images.doublebreifcase,
    title: "Средний бизнес",
    text: "Бюджет рекламной кампании",
    price: "до 1000 евро",
    items: [
      { text: "10-25% бюджета кампании" },
      { text: "до 1000 запросов" },
      { text: "до 10 кампаний" },
      { text: "до 10000 объявлений" },
      {
        icon: (
          <IoIosCheckmarkCircleOutline fontSize={25} className="text-green" />
        ),
      },
      {
        icon: (
          <IoIosCheckmarkCircleOutline fontSize={25} className="text-green" />
        ),
      },
      {
        icon: (
          <IoIosCheckmarkCircleOutline fontSize={25} className="text-green" />
        ),
      },
      {
        icon: (
          <IoIosCheckmarkCircleOutline fontSize={25} className="text-green" />
        ),
      },
      {
        icon: (
          <IoIosCheckmarkCircleOutline fontSize={25} className="text-green" />
        ),
      },
      {
        icon: (
          <IoIosCheckmarkCircleOutline fontSize={25} className="text-green" />
        ),
      },
      {
        icon: (
          <IoIosCheckmarkCircleOutline fontSize={25} className="text-green" />
        ),
      },
    ],
  },
];

const Uslugi = () => {
  return (
    <section className="bg-insigniawhite">
      <div className="container">
        <div className="py-[80px]">
          <h2 className="font-black text-lg text-center text-bluedepths mb-[40px] lg:mb-[60px]">
            Стоимость услуг
          </h2>
          <div className="grid grid-cols-3 gap-5 md:gap-7 lg:gap-[40px] lg-cards">
            <div className="bg-transparent flex flex-col justify-end mb-[190px] md:mb-[105px] lg:mb-[120px]">
              <ul className="flex flex-col">
                {regularList.map((item, i) => (
                  <li
                    className="even:bg-white py-3 pl-5 border-y border-seadrive relative xopacity-50"
                    key={i}
                  >
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {carts.map((cart, i) => (
              <div
                className="bg-white rounded-xl border border-seadrive pt-[40px] p-5 lg:p-[40px] relative"
                key={i}
              >
                <span className="absolute -top-1 right-7 lg:right-10 py-[10px] md:py-6 px-[10px] lg:px-[16px] bg-seadrive rounded-t-[2px] rounded-b-[12px] flex items-center justify-center">
                  <Image src={cart.img} className="w-full h-full" alt="icon" />
                </span>
                <div className="flex flex-col mb-[17px]">
                  <h3 className="font-bold text-darkblue text-[18px] lg:text-[26px] lg:leading-[130%] mb-2 lg:mb-3">
                    {cart.title}
                  </h3>
                  <p className="font-regular text-[16px] lg:text-base text-darkblue">
                    {cart.text}
                  </p>
                  <span className="font-bold text-[20px] md:text-base text-darkblue">
                    {cart.price}
                  </span>
                </div>
                <ul className="flex flex-col">
                  {cart.items.map((item, i) => (
                    <li
                      className="even:bg-insigniawhite py-4 md:py-3 pl-3 border-y border-seadrive relative xopacity-50"
                      key={i}
                    >
                      {item.text && (
                        <span className="font-regular md:font-bold text-[16px] md:leading-6 lg:text-[20px] text-darkblue">
                          {item.text}
                        </span>
                      )}
                      {item.icon && <span>{item.icon}</span>}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-start">
                  <button className="py-[18px] w-full lg:w-fit text-center  lg:px-[65px] rounded-xl hover:bg-bluedepths bg-blue hover:text-blue text-white font-bold text-[16px] leading-6 flex items-center justify-center space-x-6 duration-300">
                    <span>Заказать</span>
                    <span>
                      <BsArrowRight color="white" fontSize={16} />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-3 smallscreen-cards">
            <div className="bg-white rounded-xl border border-seadrive pt-[40px] p-5 lg:p-[40px] relative">
              <span className="absolute -top-1 right-7 lg:right-10 py-[10px] md:py-6 px-[10px] lg:px-[16px] bg-seadrive rounded-t-[2px] rounded-b-[12px] flex items-center justify-center">
                <Image
                  src={images.breifcase}
                  className="w-full h-full"
                  alt="icon"
                />
              </span>
              <div className="flex flex-col mb-[17px]">
                <h3 className="font-bold text-darkblue text-[18px] lg:text-[26px] lg:leading-[130%] mb-2 lg:mb-3">
                  Малый бизнес
                </h3>
                <p className="font-regular text-[16px] lg:text-base text-darkblue">
                  Бюджет рекламной кампании
                </p>
                <span className="font-bold text-[20px] md:text-base text-darkblue">
                  до 1000 евро
                </span>
              </div>
              <ul className="flex flex-col">
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Стоимость / мес.
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <span className="font-regular md:font-bold text-[16px] md:leading-6 lg:text-[20px] text-darkblue">
                      100 евро
                    </span>
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Количество запросов
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <span className="font-regular md:font-bold text-[16px] md:leading-6 lg:text-[20px] text-darkblue">
                      до 100 запросов
                    </span>
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Количество объявлений
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <span className="font-regular md:font-bold text-[16px] md:leading-6 lg:text-[20px] text-darkblue">
                      до 100 объявлений
                    </span>
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Количество кампаний
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <span className="font-regular md:font-bold text-[16px] md:leading-6 lg:text-[20px] text-darkblue">
                      до 10 кампаний
                    </span>
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Реклама в поиске
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <IoIosCheckmarkCircleOutline
                      fontSize={25}
                      className="text-green"
                    />
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Реклама в КМС
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <IoIosCheckmarkCircleOutline
                      fontSize={25}
                      className="text-green"
                    />
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Ретаргетинг
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <IoIosCheckmarkCircleOutline
                      fontSize={25}
                      className="text-green"
                    />
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Настройка аналитики
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <IoIosCheckmarkCircleOutline
                      fontSize={25}
                      className="text-green"
                    />
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Google my business аккаунт
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <IoIosCheckmarkCircleOutline
                      fontSize={25}
                      className="text-green"
                    />
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Баннерная реклама
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <RiCloseCircleLine fontSize={25} className="text-red" />
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Видеореклама (Youtube)
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <RiCloseCircleLine fontSize={25} className="text-red" />
                  </div>
                </li>
              </ul>
              <div className="mt-5 flex items-center justify-start">
                <button className="py-[18px] w-full lg:w-fit text-center  lg:px-[65px] rounded-xl hover:bg-bluedepths bg-blue hover:text-blue text-white font-bold text-[16px] leading-6 flex items-center justify-center space-x-6 duration-300">
                  <span>Заказать</span>
                  <span>
                    <BsArrowRight color="white" fontSize={16} />
                  </span>
                </button>
              </div>
            </div>
            {/* second cart */}
            <div className="bg-white rounded-xl border border-seadrive pt-[40px] p-5 lg:p-[40px] relative">
              <span className="absolute -top-1 right-7 lg:right-10 py-[10px] md:py-6 px-[10px] lg:px-[16px] bg-seadrive rounded-t-[2px] rounded-b-[12px] flex items-center justify-center">
                <Image
                  src={images.doublebreifcase}
                  className="w-full h-full"
                  alt="icon"
                />
              </span>
              <div className="flex flex-col mb-[17px]">
                <h3 className="font-bold text-darkblue text-[18px] lg:text-[26px] lg:leading-[130%] mb-2 lg:mb-3">
                  Средний бизнес
                </h3>
                <p className="font-regular text-[16px] lg:text-base text-darkblue">
                  Бюджет рекламной кампании
                </p>
                <span className="font-bold text-[20px] md:text-base text-darkblue">
                  до 1000 евро
                </span>
              </div>
              <ul className="flex flex-col">
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Стоимость / мес.
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <span className="font-regular md:font-bold text-[16px] md:leading-6 lg:text-[20px] text-darkblue">
                      10-25% бюджета кампании
                    </span>
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Количество запросов
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <span className="font-regular md:font-bold text-[16px] md:leading-6 lg:text-[20px] text-darkblue">
                      до 1000 запросов
                    </span>
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Количество объявлений
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <span className="font-regular md:font-bold text-[16px] md:leading-6 lg:text-[20px] text-darkblue">
                      до 1000 объявлений
                    </span>
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Количество кампаний
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <span className="font-regular md:font-bold text-[16px] md:leading-6 lg:text-[20px] text-darkblue">
                      до 25 кампаний
                    </span>
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Реклама в поиске
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <IoIosCheckmarkCircleOutline
                      fontSize={25}
                      className="text-green"
                    />
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Реклама в КМС
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <IoIosCheckmarkCircleOutline
                      fontSize={25}
                      className="text-green"
                    />
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Ретаргетинг
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <IoIosCheckmarkCircleOutline
                      fontSize={25}
                      className="text-green"
                    />
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Настройка аналитики
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <IoIosCheckmarkCircleOutline
                      fontSize={25}
                      className="text-green"
                    />
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Google my business аккаунт
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <IoIosCheckmarkCircleOutline
                      fontSize={25}
                      className="text-green"
                    />
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Баннерная реклама
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <IoIosCheckmarkCircleOutline
                      fontSize={25}
                      className="text-green"
                    />
                  </div>
                </li>
                <li className="odd:bg-insigniawhite py-4 md:py-3 px-3 border-y border-seadrive flex items-center xopacity-50">
                  <div className="w-1/2">
                    <span className="font-bold text-[16px] leading-6 lg:text-[20px] text-darkblue">
                      Видеореклама (Youtube)
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center sm:justify-start">
                    <IoIosCheckmarkCircleOutline
                      fontSize={25}
                      className="text-green"
                    />
                  </div>
                </li>
              </ul>
              <div className="mt-5 flex items-center justify-start">
                <button className="py-[18px] w-full lg:w-fit text-center  lg:px-[65px] rounded-xl hover:bg-bluedepths bg-blue hover:text-blue text-white font-bold text-[16px] leading-6 flex items-center justify-center space-x-6 duration-300">
                  <span>Заказать</span>
                  <span>
                    <BsArrowRight color="white" fontSize={16} />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-insigniawhite mt-[60px] p-5 sm:py-5 sm:px-[40px] lg:p-[40px] border border-seadrive rounded-xl">
            <div className="flex sm:flex-row flex-col sm:items-center space-y-2 sm:space-x-5">
              <span className="flexflex-row items-start justify-center">
                <IoInformationCircle fontSize={30} className="text-blue" />
              </span>
              <p className="font-regular text-darkblue text-[16px] lg:text-base">
                Минимальный бюджет на рекламу составляет от 100 евро / месяц.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uslugi;
