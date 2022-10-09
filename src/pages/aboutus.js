import React from 'react'
import Image from 'next/image'
import { images } from '../constants'
import Accordion from "../components/accordion/Accordion";
import { accordionDataAbout } from '../constants/accordion.data';

export default function aboutus() {
  return (
    <>
     <header className="w-full header bg-[url('../assets/img/about-background.png')] md:h-[416px] ss:h-[260px] pt-[70px]">
        <h1 className="text-white text-xxl md:text-xxl sm:text-xl ss:text-xl md:w-[350px] ss:w-[210px] sm:w-[370px] ml-40 sm:ml-20 ss:ml-8">О нас</h1>
        <p className="text-white text-base md:w-[560px] ss:w-[290px] sm:w-[560px] ml-40 sm:ml-20 ss:ml-8">Ora – маркетинговое агентство, специализирующееся на работе с малым бизнесом.</p>
      </header>
      {/* section-1 team */}
      <section className="w-full bg-[url('../assets/img/footer-background.png')] flex justify-center items-center ss:p-0 sm:pt-[80px] lg:px-[100px] p-[30px] ss:flex-col md:flex-row sm:flex-row sm:h-[600px] ss:h-[1202px] ">
        <div className="flex flex-col w-full sm:h-[600px] ss:h-[1052px] pb-10 sm:box-border sm:overflow-y-scroll md:overflow-hidden sm:overflow-hidden">
          <h1 className="text-bluedepths text-lg leading-8">Наша команда является специалистами в сфере digital-маркетинга, но на данной стадии мы делаем упор только на определенные сферы продвижения, а именно: реклама в Google, Facebook и Instagram.</h1>
          <p className="text-bluedepths text-md mt-10">Мы предлагаем клиентам:</p>
          <ul class="list-decimal mt-4 text-bluedepths">
            <li>
            - Работы по полному обслуживанию бизнеса (full service);
            </li>
            <li>
            - Работы по реализации отдельных проектов в рамках бизнеса.
            </li>
            <li>
            - В своей работе мы ценим порядочность и честность, так как эти составляющие позволяют нам меняться и совершенствоваться вместе с клиентами. Мы ценим это и в наших клиентах.
            </li>
          </ul>
          <p className="bg-[#FBF7F1] rounded text-bluedepths text-md mt-12 p-6">Благодаря такому подходу большая часть наших клиентов совершают с нами сделки о повторной работе, потому что остались довольны сотрудничеством с нами. </p>
          <p className="text-bluedepths text-md mt-10">Преимущественно, мы работаем с маленькими латвийскими компаниями, поэтому высокие стандарты в работе для нас являются основополагающими, так как в маленьком бизнесе работа маркетинга заметна и все действия приводят к росту.</p>
        </div>
      </section>
      {/* section-2 why choose us */}
      <section className="w-full flex justify-center items-center pt-[80px] pl-16 pr-16 ss:flex-col md:flex-row sm:flex-row sm:h-[704px] ss:h-[604px] ">
        <div className='lg:w-[635px] md:w-[455px] sm:w-[329px] ss:w-[283px]'>
        <Image src={images.about_icon} />
        </div>
        <div className="flex flex-col md:w-[462px] lg:w-[680px] sm:w-[462px] ss:w-[288px] sm:h-full ss:h-[300px] pb-10 overflow-y-scroll">
          <h1 className="text-bluedepths text-lg">Почему стоит выбрать именно нас?</h1>
          <Accordion data={accordionDataAbout}/>
              </div>
      </section>
      {/* section-3 numbers */}
      <section className="bg-darkblue w-full p-14 mt-16 flex justify-center items-center md:flex-row ss:flex-col">
        <div className='flex flex-col md:w-[800px]'>
        <h1 className="lg:text-xl ss:text-lg text-white mb-4 ">Цифры говорят за нас​</h1>
        <p className='text-white lg:text-lg sm:text-md'>Мы уже помогли увеличить показатели многих латвийских компаний. Ваша следующая?</p>  
        </div>      
        <div className='flex md:mt-0 sm:mt-8 sm:flex-nowrap ss:flex-wrap mt-8'>
          <div className='flex flex-col sm:w-auto ss:w-[50%]'>
            <h1 className='text-white sm:text-xxl ss:text-xl'>87</h1>
            <p className='text-white sm:text-md ss:text-sm'>Довольных клиентов</p>
          </div>
          <div className='flex flex-col sm:w-auto ss:w-[50%] sm:mx-6 ss:mx-0'>
            <h1 className='text-white sm:text-xxl ss:text-xl'>150</h1>
            <p className='text-white sm:text-md ss:text-sm'>Завершенных проектов</p>
          </div>
          <div className='flex flex-col sm:w-auto ss:w-[50%]'>
            <h1 className='text-white sm:text-xxl ss:text-xl'>7+</h1>
            <p className='text-white sm:text-md ss:text-sm'>Лет успешной деятельности</p>
          </div>
        </div>
      </section>
    </>
  )
}
