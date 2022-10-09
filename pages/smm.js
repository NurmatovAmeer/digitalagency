import React from "react";
import { images } from "../constants";
import Image from "next/image";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import FoooterLayout from '../components/Footer.Layout'
import Accordion from "../components/accordion/Accordion";
import { accordionDataSmm } from "../constants/accordion.data";


export default function SMM() {
  const zoomInProperties = {
		indicators: true,
		scale: 1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div style={{ width: "30px",top:'90px', cursor: "pointer" }}>
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
			<div style={{ width: "30px",top:'90px', right: "30px", cursor: "pointer" }}>
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
    <header className="w-full header bg-[url('../assets/img/smm-background.png')] md:h-[416px] ss:h-[310px] pt-[70px]">
        <h1 className="text-white md:text-xxl sm:text-xl ss:text-xl md:w-[800px] ss:w-[288px] sm:w-[560px] ml-40 sm:ml-20 ss:ml-8">Продвижение в Facebook и Instagram для сферы услуг</h1>
        <p className="text-white text-base md:w-[560px] ss:w-[290px] sm:w-[560px] ml-40 sm:ml-20 ss:ml-8">От ведения страниц до таргетированной рекламы</p>
      </header>
      
      {/* section-5 */}
      <section className="bg-darkblue w-full pt-14">
      <h1 className="text-xl text-white mb-0 mt-10 text-center">Почему нужно использовать таргетированную рекламу в Facebook и Instagram?​</h1>
      <div className="flex justify-around align-center md:h-[302px] mt-4 ss:hidden sm:flex">
        <div className="w-[20%] border-t-[2px] border-blankstare mt-6 pt-4">
          <Image src={images.earth} className="w-full h-full" alt="award"/>
          <p className="text-white text-sm mt-1">Мировые социальные сети, распространенные в большинстве стран.</p>
        </div>
        <div className="w-[20%] border-t-[2px] border-blankstare mt-6 pt-4">
          <Image src={images.people} className="w-full h-full" alt="like"/>
          <p className="text-white text-sm mt-1">Большой охват целевой аудитории.</p>
        </div>
        <div className="w-[20%] border-t-[2px] border-blankstare mt-6 pt-4">
          <Image src={images.wallet} className="w-full h-full" alt="euro"/>
          <p className="text-white text-sm mt-1">Прогрессивная аудитория с высокой платежеспособностью.</p>
        </div>
        <div className="w-[20%] border-t-[2px] border-blankstare mt-6 pt-4">
          <Image src={images.stonks} className="w-full h-full" alt="euro"/>
          <p className="text-white text-sm mt-1">Лучшие алгоритмы оптимизации рекламы.</p>
        </div>
      </div>
      {/* carousel */}
      <div className="ml-4 ss:block sm:hidden w-full">

<Zoom {...zoomInProperties}>
      <div className="w-[90%] border-t-[2px] border-blankstare mt-6 pt-4">
      <Image src={images.earth} className="w-full h-full" alt="award"/>
    <p className="text-white text-sm mt-1">Мировые социальные сети, распространенные в большинстве стран.</p>
  </div>
  <div className="w-[90%] border-t-[2px] border-blankstare mt-6 pt-4">
  <Image src={images.people} className="w-full h-full" alt="like"/>
    <p className="text-white text-sm mt-1">Большой охват целевой аудитории.</p>
  </div>
  <div className="w-[90%] border-t-[2px] border-blankstare mt-6 pt-4">
  <Image src={images.wallet} className="w-full h-full" alt="euro"/>
    <p className="text-white text-sm mt-1">Прогрессивная аудитория с высокой платежеспособностью.</p>
  </div>
  <div className="w-[90%] border-t-[2px] border-blankstare mt-6 pt-4">
  <Image src={images.stonks} className="w-full h-full" alt="euro"/>
    <p className="text-white text-sm mt-1">Лучшие алгоритмы оптимизации рекламы.</p>
  </div>
</Zoom>
</div>
      </section>
      {/* section-6 */}
      <section className="lg:px-[130px] md:px-[60px] sm:px-[30px] ss:px-[10px] w-full pb-6">
      <div>
      <h1 className="text-xl mb-0 mt-10 text-bluedepths">Настройки таргетинга в Facebook и Instagram</h1>
      <p className="text-bluedepths mt-6">При настройке таргетированной рекламы мы детально изучаем профиль Вашей целевой аудитории и с высокой точностью настраиваем таргетинг для донесения рекламного сообщения до человека, который заинтересован в Вашей услуге или товаре.</p>
      </div>
      {/* 1st pos */}
      <h3 className="text-lg text-bluedepths mt-14">Чтобы таргетинг был максимально точным, на этапе настройки таргетинга мы будем задавать множество определенных параметров:</h3>
      <div className="flex sm:flex-row ss:flex-col justify-between mt-6">
        <div className="flex mt-4">
          <div className="flex items-start">
           <div className="w-[22px]">
           <Image src={images.correct} className="w-[22px]"/>
           </div>
            <p className="text-bluedepths lg:w-[276px] md:w-[189px] sm:w-[125px] ml-6">место проживания выбираем необходимую страну/страны или отдельные города или радиус вокруг отдельного конкретного места</p>
          </div>
        </div>
        <div className="flex flex-col">
        <div className="flex mt-4">
          <div className="flex items-start">
          <div className="w-[22px]">
           <Image src={images.correct} />
           </div>
            <p className="text-bluedepths lg:w-[276px] md:w-[189px] sm:w-[125px]  ml-4">возраст</p>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex items-start">
          <div className="w-[22px]">
           <Image src={images.correct} />
           </div>
            <p className="text-bluedepths lg:w-[276px] md:w-[189px] sm:w-[125px]  ml-4">пол</p>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex items-start">
          <div className="w-[22px]">
           <Image src={images.correct} />
           </div>
            <p className="text-bluedepths lg:w-[276px] md:w-[189px] sm:w-[125px]  ml-4">язык</p>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex items-start">
          <div className="w-[22px]">
           <Image src={images.correct} />
           </div>
            <p className="text-bluedepths lg:w-[276px] md:w-[189px] sm:w-[125px] ml-4">семейное положение</p>
          </div>
        </div>
        </div>
        <div className="flex flex-col">
        <div className="flex mt-4">
          <div className="flex items-start">
          <div className="w-[22px]">
           <Image src={images.correct} />
           </div>
            <p className="text-bluedepths lg:w-[276px] md:w-[189px] sm:w-[125px] ml-4">предпочтения</p>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex items-start">
          <div className="w-[22px]">
           <Image src={images.correct} />
           </div>
            <p className="text-bluedepths lg:w-[276px] md:w-[189px] sm:w-[125px] ml-4">события из жизни</p>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex items-start">
          <div className="w-[22px]">
           <Image src={images.correct} />
           </div>
            <p className="text-bluedepths lg:w-[276px] md:w-[189px] sm:w-[125px] ml-4">сфера деятельности</p>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex items-start">
          <div className="w-[22px]">
           <Image src={images.correct} />
           </div>
            <p className="text-bluedepths lg:w-[276px] md:w-[189px] sm:w-[125px] ml-4">хобби и интересы</p>
          </div>
        </div>
        </div>
        <div className="flex flex-col">
        <div className="flex mt-4">
          <div className="flex items-start">
          <div className="w-[22px]">
           <Image src={images.correct} />
           </div>
            <p className="text-bluedepths lg:w-[276px] md:w-[189px] sm:w-[125px] ml-4">образ жизни</p>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex items-start">
          <div className="w-[22px]">
           <Image src={images.correct} />
           </div>
            <p className="text-bluedepths lg:w-[276px] md:w-[189px] sm:w-[125px] ml-4">операционная система или модель телефона</p>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex items-start">
          <div className="w-[22px]">
           <Image src={images.correct} />
           </div>
            <p className="text-bluedepths lg:w-[276px] md:w-[189px] sm:w-[125px] ml-4">и другие второстепенные параметры</p>
          </div>
        </div>
        </div>
      </div>
        {/* 2nd pos */}
      <div>
      <h1 className="text-xl mb-0 mt-14 text-bluedepths">Настройка рекламы по базе клиентов и похожей аудитории</h1>
      <p className="text-bluedepths mt-6">Пожалуй, данный вид рекламы является самым эффективным с точки зрения повторных покупок или сделок. Как это работает? Всё просто. За время работы Вашего бизнеса у Вас собирается информация о клиентах (их имена, номера телефонов, e-mail и тд.). Всю эту информацию можно загрузить в рекламный кабинет Facebook, сформировать аудиторию и запускать по ней рекламу.</p>
      </div>
      <h3 className="text-lg text-bluedepths mt-14">С теоретической точки зрения, мы можем выделить 3 цели для запуска рекламы по базе клиентов:</h3>
      <div className="flex sm:flex-row ss:flex-col mt-6 justify-between">
      <div className="flex items-start">
            <Image src={images.correct} />
            <p className="text-bluedepths lg:w-[276px] md:w-[189px] sm:w-[125px] ml-4">Ретаргет (ремаркетинг) с целью допродажи</p>
      </div>
      <div className="flex items-start">
            <Image src={images.correct} />
            <p className="text-bluedepths lg:w-[276px] md:w-[189px] sm:w-[125px] ml-4">Таргет с целью подписать на Ваши социальные сети</p>
        </div>
          <div className="flex items-start">
            <Image src={images.correct} />
            <p className="text-bluedepths lg:w-[276px] md:w-[189px] sm:w-[125px] ml-4">Создание похожей целевой аудитории с функцией LTV (работа над привлечением и удержанием клиентов)</p>
        </div>
      </div>
      {/* under texts */}
      <p className="text-bluedepths mt-12">Со своей стороны, мы рекомендуем запускать ремаркетинг на данную аудиторию. Для Ваших клиентов будет актуально получать информацию о новых товарах, акциях, грядущих мероприятиях, всё то, что будем им ценно и будет мотивировать на дальнейшее сотрудничество с Вами.</p>
      <h3 className="text-base text-bluedepths mt-10">Дополнительным бонусом является то, что данную аудиторию можно расширить. Каким образом? Рассказываем. В Facebook есть возможность создавать «похожие аудитории».</h3>
      <div className="bg-seadrive rounded text-bluedepths mt-12 p-6">
        <h3 className="text-base text-bluedepths">Пример:</h3>
        <p className="text-bluedepths text-sm">За основу мы берем Вашу базу клиентов и формируем аудиторию. Далее мы создаем “похожую аудиторию” – алгоритмы социальной сети сами будут искать людей, которые по поведенческим характеристикам будут максимально похожи на Вашу базу клиентов. Таким образом, мы получаете практически со 100% вероятностью “клонов” Ваших клиентов, на которых можно таргетировать рекламу в Facebook и Instagram, и, скорее всего, они отреагируют на Ваше рекламное сообщение.</p>
      </div>
      </section>
      {/* section-7 */}
      <section className="w-full bg-[url('../assets/img/footer-background.png')] pt-[80px] sm:px-[150px] ss:px-4 ss:flex-col sm:flex-row md:h-[804px] sm:h-[804px] ss:h-[1054px] ">
      <h1 className="sm:text-xl ss:text-lg text-bluedepths mb-0 text-center">Цели рекламной кампании​</h1>
      <p className="text-bluedepths text-base text-center">После определения аудитории, по который будет запускаться реклама – необходимо выбрать цель. Сейчас мы детально расскажем о том, какие цели рекламы есть в Facebook и Instagram, и в каких случаях их необходимо использовать:</p>
      <div className="w-full flex justify-center mt-10">

      <table className="table-fixed border-collapse lg:w-[804px] md:w-[944px] sm:w-[689px]  sm:block ss:hidden">
  <thead>
    <tr className="bg-white h-[50px]">
      <th className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]">Узнаваемость</th>
      <th className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]">Лиды</th>
      <th className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]">Конверсия</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-insigniawhite h-[50px]">
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]">Узнаваемость бренда</td>
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]">Трафик</td>
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]">Конверсия</td>
    </tr>
    <tr className="bg-white h-[50px]">
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]">Охват</td>
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]">Вовлеченность</td>
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]">Продажи товаров из каталога</td>
    </tr>
    <tr className="bg-insigniawhite h-[50px]">
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]"></td>
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]">Установки приложения</td>
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]">Посещения точек</td>
    </tr>
    <tr className="bg-white h-[50px]">
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]"></td>
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]">Просмотры видео</td>
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]"></td>
    </tr>
    <tr className="bg-insigniawhite h-[50px]">
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]"></td>
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]">Генерация лидов</td>
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]"></td>
    </tr>
    <tr className="bg-white h-[50px]">
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]"></td>
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]">Сообщения</td>
      <td className="border border-seadrive text-bluedepths lg:w-[300px] md:w-[260px]"></td>
    </tr>
  </tbody>
</table>
{/* responsive table */}
<table className="table-fixed rounded border-collapse border border-seadrive sm:hidden ss:block w-full">
  <tr className="bg-white w-full border border-seadrive h-[40px]"><th className="text-bluedepths w-[290px] pl-4">Узнаваемость</th></tr>
  <tr className=" w-full border border-seadrive h-[40px]"><td className="text-bluedepths w-[290px] pl-4">Узнаваемость бренда</td></tr>
  <tr className=" w-full border border-seadrive h-[40px]"><td className="text-bluedepths w-[290px] pl-4">Охват</td></tr>

  <tr className="bg-white w-full border border-seadrive h-[40px]"><th className="text-bluedepths w-[290px]">Лиды</th></tr>
  <tr className=" w-full border border-seadrive h-[40px]"><td className="text-bluedepths w-[290px] pl-4">Трафик</td></tr>
  <tr className=" w-full border border-seadrive h-[40px]"><td className="text-bluedepths w-[290px] pl-4">Вовлеченность</td></tr>
  <tr className=" w-full border border-seadrive h-[40px]"><td className="text-bluedepths w-[290px] pl-4">Установки приложения</td></tr>
  <tr className=" w-full border border-seadrive h-[40px]"><td className="text-bluedepths w-[290px] pl-4">Просмотры видео</td></tr>
  <tr className=" w-full border border-seadrive h-[40px]"><td className="text-bluedepths w-[290px] pl-4">Генерация лидов</td></tr>
  <tr className=" w-full border border-seadrive h-[40px]"><td className="text-bluedepths w-[290px] pl-4">Сообщения</td></tr>

  <tr className="bg-white w-full border border-seadrive h-[40px]"><th className="text-bluedepths w-[290px] pl-4">Конверсия</th></tr>
  <tr className=" w-full border border-seadrive h-[40px]"><td className="text-bluedepths w-[290px] pl-4">Конверсия</td></tr>
  <tr className=" w-full border border-seadrive h-[40px]"><td className="text-bluedepths w-[290px] pl-4">Продажи товаров из каталога</td></tr>
  <tr className=" w-full border border-seadrive h-[40px]"><td className="text-bluedepths w-[290px] pl-4">Посещения точек</td></tr>
</table>

      </div>
      </section>
      {/* section-8 */}
      <section className="sm:px-[130px] ss:px-4 mt-16">
        <h1 className="text-bluedepths md:text-lg ss:text-base">
        После определения аудитории, по который будет запускаться реклама – необходимо выбрать цель. Сейчас мы детально расскажем о том, какие цели рекламы есть в Facebook и Instagram, и в каких случаях их необходимо использовать:
        </h1>
        <Accordion data={accordionDataSmm}/>
      </section>
      {/* section-9 */}
      <section className="w-full bg-[url('../assets/img/footer-background.png')] pt-[70px] sm:px-[130px] ss:px-4 md:flex-row sm:flex-row md:h-[670px] sm:h-[708px] ss:h-[1080px] ">
      <h1 className="text-xl text-bluedepths mb-0 text-center">Стоимость услуг​</h1>
      <div className="w-full flex justify-center items-center mt-16">
      <table className="table-fixed border-collapse  sm:block ss:hidden">
  <thead>
    <tr className="bg-white h-[50px]">
      <th className="border border-seadrive text-bluedepths w-[300px] pl-4">Стратегия SMM продвижения</th>
      <th className="border border-seadrive text-bluedepths w-[300px] pl-4">Ведение соц.сетей</th>
      <th className="border border-seadrive text-bluedepths w-[300px] pl-4">Таргетированная реклама</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-insigniawhite h-[50px]">
      <td className="border border-seadrive text-bluedepths w-[300px] pl-4">Цена: <b>от 0 EUR</b></td>
      <td className="border border-seadrive text-bluedepths w-[300px] pl-4">Цена: <b>от 0 EUR</b></td>
      <td className="border border-seadrive text-bluedepths w-[300px] pl-4">Цена: <b>от 0 EUR</b></td>
    </tr>
    <tr className="bg-white h-[50px]">
      <td className="border border-seadrive text-bluedepths w-[300px] pl-4">
        <ol>
          <li>- SMM-стратегия</li>
          <li>- Аудит страниц и рекламы</li>
          <li>- Концепция, контент-планы</li>
          <li>- Анализ бренда и конкурентов</li>
        </ol>
      </td>
      <td className="border border-seadrive text-bluedepths w-[300px]">
      <ol>
          <li>- Графическое оформление аккаунтов</li>
          <li>- Шаблоны для постов и хайлайтс</li>
          <li>- Концепция, контент-планы</li>
          <li>- Анализ бренда и конкурентов</li>
          <li>- Создание контента</li>
          <li>- Детальная аналитика</li>
        </ol>
      </td>
      <td className="border border-seadrive text-bluedepths w-[300px]">
      <ol>
          <li>- Таргетированная реклама в Facebook и Instagram</li>
          <li>- Реклама по базам клиентов и look-a-like (похожие аудитории)</li>
          <li>- Подбор аудиторий, сегментация по интересам, разбивка на группы</li>
          <li>- Настройка рекламных кампаний, подбор плейсментов</li>
          <li>- Установка Facebook Pixel, настройка конверсий</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>
{/* responsive table */}
<table className="table-fixed rounded border-collapse border border-seadrive sm:hidden ss:block w-full">
<tr className="bg-white flex flex-col border border-seadrive rounded">
      <th className=" text-bluedepths lg:w-[300px] md:w-[260px] pl-4 mt-2">Стратегия SMM продвижения</th>
      <td className=" text-bluedepths lg:w-[300px] md:w-[260px] pl-4 mt-2">Цена: <b>от 0 EUR</b></td>
      <td className=" text-bluedepths lg:w-[300px] md:w-[260px] pl-4 mt-2">
        <ol>
          <li className="mt-2">- SMM-стратегия</li>
          <li className="mt-2">- Аудит страниц и рекламы</li>
          <li className="mt-2">- Концепция, контент-планы</li>
          <li className="mt-2">- Анализ бренда и конкурентов</li>
        </ol>
      </td>
    </tr>
    <tr className=" flex flex-col border border-seadrive rounded">
      <th className=" text-bluedepths lg:w-[300px] md:w-[260px] pl-4 mt-2">Ведение соц.сетей</th>
      <td className=" text-bluedepths lg:w-[300px] md:w-[260px] pl-4 mt-2">Цена: <b>от 0 EUR</b></td>
      <td className=" text-bluedepths lg:w-[300px] md:w-[260px] pl-4 mt-2">
        <ol>
          <li className="mt-2">- Графическое оформление аккаунтов</li>
          <li className="mt-2">- Шаблоны для постов и хайлайтс</li>
          <li className="mt-2">- Конкурсы и марафоны</li>
          <li className="mt-2">- Создание контента</li>
          <li className="mt-2">- Детальная аналитика</li>
        </ol>
      </td>
    </tr>
    <tr className="bg-white flex flex-col border border-seadrive rounded">
      <th className=" text-bluedepths lg:w-[300px] md:w-[260px] pl-4 mt-2">Таргетированная реклама</th>
      <td className=" text-bluedepths lg:w-[300px] md:w-[260px] pl-4 mt-2">Цена: <b>от 0 EUR</b></td>
      <td className=" text-bluedepths lg:w-[300px] md:w-[260px] pl-4 mt-2">
      <ol>
          <li className="mt-2">- Таргетированная реклама в Facebook и Instagram</li>
          <li className="mt-2">- Реклама по базам клиентов и look-a-like (похожие аудитории)</li>
          <li className="mt-2">- Подбор аудиторий, сегментация по интересам, разбивка на группы</li>
          <li className="mt-2">- Настройка рекламных кампаний, подбор плейсментов</li>
          <li className="mt-2">- Установка Facebook Pixel, настройка конверсий</li>
        </ol>
      </td>
    </tr>
</table>
      </div>
      </section>
      <FoooterLayout/>
    </>
  );
}
