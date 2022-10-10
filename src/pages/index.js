import React from "react";
import FoooterLayout from '../components/Footer.Layout'
import { images } from "../constants";
import Image from "next/image";
import Reklama from "../components/Reklama";
import Carousel from "../components/carousel/Carousel";
import Form from '../components/Form'

export default function Home() {
  return (
    <>
     <header className="w-full header bg-[url('../assets/img/main-page-background.png')] flex sm:flex-row ss:flex-col md:h-[706px] ss:h-[1182px] p-[70px]">
    <div className="flex flex-col">
    <h3 className="text-white md:text-xl sm:text-lg ss:text-xl lg:w-[679px] md:w-[462px] ss:w-[288px] sm:w-[334px] sm:ml-10 ss:ml-8">Мы помогаем малому бизнесу стартовать и меняться</h3>
        <h1 className="text-white md:text-xxl sm:text-xl ss:text-xl lg:w-[679px] md:w-[462px] ss:w-[288px] sm:w-[334px]  sm:ml-10 ss:ml-8 my-16">Digital агентство ORA</h1>
        <p className="text-white text-base lg:w-[679px] md:w-[462px] ss:w-[290px] sm:w-[334px] sm:ml-10 ss:ml-8">Объединяем ваш отраслевой опыт и нашу digital-экспертизу для достижения результатов</p>
        
    </div>
    <Form/>
       </header>
       {/* section-1 */}
       <section className="w-full bg-[url('../assets/img/footer-background.png')] flex  items-center pt-[80px] pl-16 pr-16 ss:flex-col md:flex-row sm:flex-row sm:h-[704px] ss:h-[1004px] ">
        <div>
        <Image src={images.first} alt="seo optimization" />
        </div>
        <div className="flex flex-col md:w-[462px] lg:w-[680px] sm:w-[462px] ss:w-[288px] sm:h-full ss:h-[300px] pb-10 sm:box-border sm:overflow-y-scroll md:overflow-hidden sm:overflow-hidden mt-10">
          <h1 className="text-bluedepths text-lg">Наши принципы взаимоотношений с клиентами</h1>
          <p className="text-bluedepths text-sm my-10">Мы уверены, что главное в партнерских взаимоотношениях – доверие и результат, который измеряется достижением поставленных целей, способствующих росту бизнеса клиента. Отличные показатели – это цифры, которые наглядно показывают насколько мы приблизились к цели.</p>
          <p className="bg-[#FBF7F1] rounded text-bluedepths text-sm p-6">Такой подход предполагает неминуемый успех. Работа с показателями эффективности, определение точек роста и приоритетных направлений развития – вот наша стратегия успеха.</p>
          <p className="text-bluedepths text-sm my-10">Мы не будем рисовать несбыточные прогнозы и использовать «мёртвые» каналы, потому что отчитываемся перед клиентом за итоговые показатели. Если у вас все отлично, то мы так и скажем, прямо и без лишних слов.</p>
        </div>
      </section>
       <Reklama/>
         {/* section-2 */}
      <section className="w-full bg-[url('../assets/img/footer-background.png')] pt-[70px] sm:px-16 ss:px-4 md:flex-row sm:flex-row md:h-[600px] sm:h-[508px] ss:h-[650px] ">
      <h1 className="text-xl text-bluedepths mb-1 text-center">Наши последние работы​</h1>
       <p className="text-lg text-bluedepths text-center mb-8">От задачи к результату</p>
       <Carousel/>
      </section>
      <FoooterLayout/>

    </>
  );
}
