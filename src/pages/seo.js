import React from "react";
import Image from "next/image";
import { images } from "../constants";
import {accordionDataSeo} from '../constants/accordion.data'
import Accordion from "../components/accordion/Accordion";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import FoooterLayout from '../components/Footer.Layout'

export default function Seo() {
  const zoomInProperties = {
		indicators: true,
		scale: 1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div style={{ width: "30px",top:'390px', cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
				</svg>
			</div>
		),
		nextArrow: (
			<div style={{ width: "30px",top:'390px', right: "30px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
				</svg>
			</div>
		),
	};

  return (
    
    <>
      <header className="w-full header bg-[url('../assets/img/seo-background.png')] md:h-[416px] ss:h-[260px] pt-[70px]">
        <h1 className="text-white text-xxl md:text-xxl sm:text-xl ss:text-xl md:w-[350px] ss:w-[210px] sm:w-[370px] ml-40 sm:ml-20 ss:ml-8">Оптимизация сайта SEO</h1>
        <p className="text-white text-base md:w-[560px] ss:w-[290px] sm:w-[560px] ml-40 sm:ml-20 ss:ml-8">Превращение текстового наполнения сайта в мощный маркетинговый инструмент</p>
      </header>
      {/* SEO optimization 1-section */}
      <section className="w-full bg-[url('../assets/img/footer-background.png')] flex justify-center items-center pt-[80px] pl-16 pr-16 ss:flex-col md:flex-row sm:flex-row sm:h-[554px] ss:h-[654px] ">
        <div>
        <Image src={images.seo_optimization} alt="seo optimization" />
        </div>
        <div className="flex flex-col md:w-[462px] lg:w-[680px] sm:w-[462px] ss:w-[288px] sm:h-full ss:h-[300px] pb-10 sm:box-border sm:overflow-y-scroll md:overflow-hidden sm:overflow-hidden">
          <h1 className="text-bluedepths text-lg">Поисковая оптимизация. Что мы предлагаем?</h1>
          <p className="text-bluedepths text-sm my-10">Мы проводим работы по оптимизации Вашего сайта для его выхода на лидирующие позиции в результатах выдачи Google, Yandex или других поисковых системах по релевантным ключевым запросам.
          Говоря коммерческим языком, главной целью поисковой оптимизации (SEO) является увеличение органической посещаемости сайта для конвертирования посетителей в новые заказы, заявки, звонки.
          </p>
          <p className="bg-[#FBF7F1] rounded text-bluedepths text-sm p-6">Мы используем максимально прозрачный подход в работе по SEO. В следующем блоке мы детально описываем поэтапные шаги по оптимизации Вашего сайта.</p>
        </div>
      </section>
      {/* How we work 2-section */}
      <section className="w-full">
        <h1 className="text-xl mb-0 mt-10 text-center">Как мы работаем?​</h1>
        <Accordion data={accordionDataSeo}/>
      </section>
      {/* Price of service 3-section */}
      <section>
      <h1 className="text-xl mb-0 mt-10 text-center">Стоимость услуг​</h1>
     <div className="service_table w-full flex justify-center mt-6">
     <table className="table-auto border-collapse border border-seadrive lg:w-[944px] lg:h-[493px] md:w-[944px] md:h-[493px] sm:w-[689px] sm:h-[529px] ss:w-[288px] ss:h-[645px] ss:ml-[25px] sm:ml-0">
  <thead>
    <tr>
      <th className="border border-seadrive">Услуга</th>
      <th className="border border-seadrive">Объем работ</th>
      <th className="border border-seadrive">Стоимость</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-insigniawhite">
      <td className="border border-seadrive">SEO-аудит</td>
      <td className="border border-seadrive">от 10 часов</td>
      <td className="border border-seadrive">от 0 EUR</td>
    </tr>
    <tr>
      <td className="border border-seadrive">Технический аудит сайта</td>
      <td className="border border-seadrive">весь сайт</td>
      <td className="border border-seadrive">от 0 EUR</td>
    </tr>
    <tr className="bg-insigniawhite">
      <td className="border border-seadrive">Сбор семантического ядра</td>
      <td className="border border-seadrive">от 30 запросов</td>
      <td className="border border-seadrive">от 0 EUR</td>
    </tr>
    <tr>
      <td className="border border-seadrive">Исправление ошибок на сайте</td>
      <td className="border border-seadrive">весь сайт</td>
      <td className="border border-seadrive">от 0 EUR</td>
    </tr>
    <tr className="bg-insigniawhite">
      <td className="border border-seadrive">Комплексная оптимизация страниц под семантическое ядро</td>
      <td className="border border-seadrive">весь сайт</td>
      <td className="border border-seadrive">от 0 EUR</td>
    </tr>
    <tr>
      <td className="border border-seadrive">Формирование оптимизированной структуры</td>
      <td className="border border-seadrive">весь сайт</td>
      <td className="border border-seadrive">от 0 EUR</td>
    </tr>
    <tr className="bg-insigniawhite">
      <td className="border border-seadrive">SEO-копирайтинг</td>
      <td className="border border-seadrive">определенные абзацы, страницы или весь сайт</td>
      <td className="border border-seadrive">от 0 EUR</td>
    </tr>
    <tr>
      <td className="border border-seadrive">Реализация проекта</td>
      <td className="border border-seadrive">весь сайт</td>
      <td className="border border-seadrive">от 0 EUR</td>
    </tr>
  </tbody>
</table>
     </div>
      </section>
      {/* difference SEO 4-section*/}
      <section className="bg-darkblue w-full pt-14 mt-16">
      <h1 className="text-xl text-white mb-0 mt-10 text-center">Чем SEO отличается от других инструментов продвижения?​</h1>
      <div className="flex justify-around align-center md:h-[522px] mt-4 ss:hidden sm:flex">
        <div className="w-[25%] border-t-[2px] border-blankstare mt-6 pt-4">
          <Image src={images.award_icon} className="w-full h-full" alt="award"/>
          <h3 className="text-white text-base mt-4">Долгосрочный результат</h3>
          <p className="text-white text-sm mt-1">Пожалуй, самое главное - долгосрочность результатов. После того, как комплекс работ по поисковой оптимизации выведет ваш сайт на более высокие позиции выдачи поисковых систем, то можно с уверенностью сказать, что вы надолго останетесь там, при условии, что будете продолжать работу над поисковой оптимизацией, не забывая про другие эффективные методы продвижения. Помните, только комплекс продвижения будет приносить постоянные результаты.</p>
        </div>
        <div className="w-[25%] border-t-[2px] border-blankstare mt-6 pt-4">
          <Image src={images.like_icon} className="w-full h-full" alt="like"/>
          <h3 className="text-white text-base mt-4">Доверие людей</h3>
          <p className="text-white text-sm mt-1">Будем откровенны, люди больше доверяют органике, нежели рекламным сообщениям. На подсознательном уровне заложено то, что компании, которые появляются на первых 2-3 страницах выдачи Google, Yandex и др. являются неким эталоном надежности и бесопасны для клиента (клиенты определенно предполагают, что такая компания давно на рынке, определенно у нее большой и компетентный штат сотрудников и т.д.).</p>
        </div>
        <div className="w-[25%] border-t-[2px] border-blankstare mt-6 pt-4">
          <Image src={images.euro_icon} className="w-full h-full" alt="euro"/>
          <h3 className="text-white text-base mt-4">Низкая стоимость клиента ​</h3>
          <p className="text-white text-sm mt-1">Определенно, вы будете конкурировать с рекламными сообщениями в Google или Yandex. Но если ваш сайт находится на высоких позициях выдачи, то потенциальный клиент его с большей доли вероятности посетит, так как все изучают множество предложений перед покупкой. Находясь на высоких позициях вы можете получать клиента с более скромными бюджетами на рекламу или вообще не вкладываясь в рекламы (но этого делать мы искренне не советуем) нежели конкуренты.</p>
        </div>
      </div>
      {/* carousel */}
      <div className="ml-4 ss:block sm:hidden w-full">

<Zoom {...zoomInProperties}>
      <div className="w-[90%] border-t-[2px] border-blankstare mt-6 pt-4">
    <Image src={images.award_icon} className="w-full h-full" alt="award"/>
    <h3 className="text-white text-base mt-4">Долгосрочный результат</h3>
    <p className="text-white text-sm mt-1">Пожалуй, самое главное - долгосрочность результатов. После того, как комплекс работ по поисковой оптимизации выведет ваш сайт на более высокие позиции выдачи поисковых систем, то можно с уверенностью сказать, что вы надолго останетесь там, при условии, что будете продолжать работу над поисковой оптимизацией, не забывая про другие эффективные методы продвижения. Помните, только комплекс продвижения будет приносить постоянные результаты.</p>
  </div>
  <div className="w-[90%] border-t-[2px] border-blankstare mt-6 pt-4">
    <Image src={images.like_icon} className="w-full h-full" alt="like"/>
    <h3 className="text-white text-base mt-4">Доверие людей</h3>
    <p className="text-white text-sm mt-1">Будем откровенны, люди больше доверяют органике, нежели рекламным сообщениям. На подсознательном уровне заложено то, что компании, которые появляются на первых 2-3 страницах выдачи Google, Yandex и др. являются неким эталоном надежности и бесопасны для клиента (клиенты определенно предполагают, что такая компания давно на рынке, определенно у нее большой и компетентный штат сотрудников и т.д.).</p>
  </div>
  <div className="w-[90%] border-t-[2px] border-blankstare mt-6 pt-4">
    <Image src={images.euro_icon} className="w-full h-full" alt="euro"/>
    <h3 className="text-white text-base mt-4">Низкая стоимость клиента ​</h3>
    <p className="text-white text-sm mt-1">Определенно, вы будете конкурировать с рекламными сообщениями в Google или Yandex. Но если ваш сайт находится на высоких позициях выдачи, то потенциальный клиент его с большей доли вероятности посетит, так как все изучают множество предложений перед покупкой. Находясь на высоких позициях вы можете получать клиента с более скромными бюджетами на рекламу или вообще не вкладываясь в рекламы (но этого делать мы искренне не советуем) нежели конкуренты.</p>
  </div>
</Zoom>
</div>
      </section>
      {/* question 5-section*/}
      <section className="w-full bg-[url('../assets/img/footer-background.png')] pt-[70px] sm:pl-16 ss:pl-6 pr-16 md:flex-row sm:flex-row md:h-[930px] lg:h-[870px] sm:h-[708px] ss:h-[1460px] ">
      <h1 className="text-xl text-bluedepths mb-0 text-center">Чем SEO отличается от других инструментов продвижения?​</h1>
        <div className="sm:flex justify-center md:mt-0 sm:mt-20 ss:mt-0 ss:flex-col sm:flex-row-reverse">
        <div>
        <Image src={images.question_icon} alt="question" />
        </div>
        <div className="flex flex-col md:w-[580px] lg:w-[600px] sm:w-[605px] ss:w-[288px] pb-10 sm:h-[306px] ss:h-[334px]  sm:box-border sm:overflow-y-scroll md:overflow-visible sm:mt-20 ss:mt-0">
          <h1 className="text-bluedepths text-lg">Что такое оптимизация сайта (SEO)?</h1>
          <p className="text-bluedepths text-sm my-6">Оптимизация сайта включает в себя определенный фронт работ по изменению и улучшению (непосредственно на сайте и за его пределами), которые делают сайт более заметным в поисковых системах Google, Yandex, Bing и др., и, соответственно, более полезным для посетителей.</p>
          <h1 className="text-bluedepths text-lg">Почему стоит оптимизировать сайт?</h1>
          <p className="text-bluedepths text-sm my-6">После правильно проделанных работ по оптимизации сайта можно с уверенностью говорить о том, что сайт будет ранжироваться на более высоких позициях в поисковых системах в сравнении с изначальными позициями. Стоит напомнить о том, что вклад в SEO является долгосрочным вкладом в бизнес.</p>
          <h1 className="text-bluedepths text-lg">Сколько времени занимает оптимизация?</h1>
          <p className="text-bluedepths text-sm my-6">Это зависит от множества факторов. Возьмем самые весомые: уровень конкуренции, качество предложения, спрос. Если мы возьмем среднеконкурентную нишу (при условии, что у вас в сравнении с конкурентами предложения является как минимум не хуже), то первые положительные результаты можно будет наблюдать в первый месяц работы.</p>
           </div>
        </div>
      </section>
      {/* Footer layout */}
      <FoooterLayout/>
    </>
  );
}
