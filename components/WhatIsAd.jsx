import Image from "next/image";
import React from "react";
import { aboutgooglead } from "../constants";

const WhatIsAd = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="py-[80px]">
          <h2 className="font-black text-bluedepths text-[28px] leading-9 md:text-lg lg:text-xl mb-[45px] text-center">
            Что такое реклама в Google?
          </h2>
          <div className="flex flex-col space-y-7 md:space-y-[50px] lg:space-y-[140px]">
            {aboutgooglead.map((item, i) => (
              <div
                className="my-4 sm:my-0 flex flex-col md:flex-row even:flex-col-reverse odd:flex-col-reverse sm:odd:flex-row md:even:flex-row-reverse items-center justify-between space-y-5"
                key={i}
              >
                <div className="flex flex-col sm:w-6/12 lg:w-5/12 my-4 sm:my-0">
                  <h3 className="font-bold text-[18px] lg:text-[26px] text-darkblue mb-3 lg:mb-6">
                    {item.title}
                  </h3>
                  <p className="font-regular text-[14px] leading-6 lg:text-[20px] text-darkblue">
                    {item.text}
                  </p>
                  <a
                    href="#!"
                    className="mt-2 sm:hidden block text-blue text-base underline"
                  >
                    Развернуть
                  </a>
                </div>
                {/* <div className=" w-[800px]"> */}
                <Image
                  src={item.img}
                  alt="google-img"
                  className="w-full sm:w-5/12 lg:w-9/12"
                />
                {/* </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAd;
