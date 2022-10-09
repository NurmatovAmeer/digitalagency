import Image from "next/image";
import Link from "next/link";
import React from "react";
import { images } from "../constants";
import { BsArrowRight } from "react-icons/bs";

const Reklama = () => {
  return (
    <section className="bg-darkblue">
      <div className="container">
        <div className="py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center justify-center">
          <h2 className="text-white font-black text-[24px] sm:text-[26px] leading-8 sm:leading-9 lg:text-xl mb-5 sm:mb-8 md:mb-[40px] text-center">
            Мы не будем рисовать несбыточные прогнозы и использовать «мёртвые»
            каналы, потому что отчитываемся перед клиентом за итоговые
            показатели. Если у вас все отлично, то мы так и скажем, прямо и без
            лишних слов.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] sm:gap-5 lg:gap-[40px]">
            <div className="pt-5 sm:pt-[30px] lg:pt-[40px] border-t-2 border-blankstare flex flex-col items-start">
              <div className="flex items-center justify-center mb-8 sm:mb-[25px] lg:mb-[40px]">
                <Image src={images.adgoogle} alt="adgoogle" />
              </div>
              <h3 className="font-bold text-[18px] leading-7 sm:leading-6 lg:text-lg text-white mb-3 lg:mb-6">
                Реклама в Google
              </h3>
              <p className="font-regular text-[16px] leading-6 lg:text-base text-white mb-6 lg:mb-8 sm:h-[187px] md:h-[168px] lg:h-[140px]">
                Наше агентство занимается разработкой и внедрением стратегий
                таргетированной и контекстной рекламы в Google. Мы помогаем
                малому бизнесу в Латвии наладить бесперебойный поток
                коммерческих сообщений до целевой аудитории.
              </p>
              <Link href={"/"}>
                <button className="py-[18px] w-full sm:w-fit text-center sm:px-[40px] lg:px-[30px] rounded-xl hover:bg-bluedepths bg-blue hover:text-blue text-white font-bold text-[16px] leading-6 flex items-center justify-center space-x-6 duration-300">
                  <span>Подробнее об услуге</span>
                  <span>
                    <BsArrowRight color="white" fontSize={16} />
                  </span>
                </button>
              </Link>
            </div>
            <div className="pt-6 md:pt-[30px] lg:pt-[40px] border-t-2 border-blankstare flex flex-col items-start">
              <div className="flex items-center justify-center mb-8 sm:mb-[25px] lg:mb-[40px]">
                <span className="mr-3 flex items-center justify-center">
                  <Image src={images.facebooklogo} alt="adgoogle" />
                </span>
                <span className="flex items-center justify-center">
                  <Image src={images.instalogo} alt="adgoogle" />
                </span>
              </div>
              <h3 className="font-bold text-[18px] leading-6 lg:text-lg text-white mb-3 lg:mb-6">
                Реклама в Facebook, Instagram
              </h3>
              <p className="font-regular text-[16px] leading-6 lg:text-base text-white mb-6 lg:mb-8">
                Мы предлагаем помощь каждому заказчику, желающему
                воспользоваться поддержкой профессиональных специалистов в сфере
                SMM-продвижения. Таргетированная реклама в Facebook и Instagram
                ‒ это отличная возможность рассказать о собственном бизнесе как
                можно большему количеству людей.
              </p>
              <Link href={"/"}>
                <button className="py-[18px] w-full sm:w-fit text-center sm:px-[40px] lg:px-[30px] rounded-xl hover:bg-bluedepths bg-blue hover:text-blue text-white font-bold text-[16px] leading-6 flex items-center justify-center space-x-6 duration-300">
                  <span>Подробнее об услуге</span>
                  <span>
                    <BsArrowRight color="white" fontSize={16} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reklama;
