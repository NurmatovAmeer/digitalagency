import React from "react";
import FoooterLayout from '../components/Footer.Layout'
import Uslugi from "../components/Uslugi";
import WhoSee from "../components/WhoSee";
import WhatIsAd from "../components/WhatIsAd";
import StepWork from "../components/StepWork";
import WhatWin from "../components/WhatWin";

export default function GoogleAdwords() {
  return (
    <>
      <header className="w-full header bg-[url('../assets/img/google-ad-background.png')] md:h-[416px] ss:h-[310px] pt-[70px]">
        <h1 className="text-white md:text-xxl sm:text-xl ss:text-xl md:w-[560px] ss:w-[288px] sm:w-[560px] ml-40 sm:ml-20 ss:ml-8">Реклама в Google Ads</h1>
        <p className="text-white text-base md:w-[560px] ss:w-[290px] sm:w-[560px] ml-40 sm:ml-20 ss:ml-8">Новые клиенты узнают о вашем бизнесе</p>
      </header>
      <Uslugi/>
      <WhoSee/>
      <WhatIsAd />
      <StepWork />
      <WhatWin />
      <FoooterLayout/>

    </>
  );
}
