import React from 'react';
import { images } from '../constants';
import Image from 'next/image';

const FoooterLayout = () =>{
    return(
        <>
        <section className='footer_layout flex flex-col pt-14 items-center lg:h-[906px] md:h-[700px] sm:h-[700px] ss:h-[1200px]'>
        <h1 className="text-xl text-bluedepths mb-0">Клиенты, которые нам доверяют​​</h1>
        <div className='grid sm:grid-cols-5 sm:gap-2 ss:grid-cols-2 ss:gap-5 mt-6 '>
            <div className='flex items-center jusify-center border-2 border-seadrive rounded-md'>
                <Image src={images.airtable}/>
            </div>
            <div className='flex items-center jusify-center border-2 border-seadrive rounded-md'>
                <Image src={images.crunchbase}/>
            </div>
            <div className='flex items-center jusify-center border-2 border-seadrive rounded-md pl-12'>
                <Image src={images.hopwork}/>
            </div>
            <div className='flex items-center jusify-center border-2 border-seadrive rounded-md pl-10'>
                <Image src={images.amazon}/>
            </div>
            <div className='flex items-center jusify-center border-2 border-seadrive rounded-md'>
                <Image src={images.outreach}/>
            </div>
            <div className='flex items-center jusify-center border-2 border-seadrive rounded-md pl-12'>
                <Image src={images.salesforce}/>
            </div>
            <div className='flex items-center jusify-center border-2 border-seadrive rounded-md'>
                <Image src={images.contentsquare}/>
            </div>
            <div className='flex items-center jusify-center border-2 border-seadrive rounded-md'>
                <Image src={images.hubspot}/>
            </div>
            <div className='flex items-center jusify-center border-2 border-seadrive rounded-md'>
                <Image src={images.zendesk}/>
            </div>
            <div className='flex items-center jusify-center border-2 border-seadrive rounded-md pl-6'>
                <Image src={images.airbnb}/>
            </div>      
        </div>
        <div className='bg-blue w-[90%] rounded-md lg:h-[301px] md:h-[278px] sm:h-[274px] mt-[50px] flex sm:flex-row ss:flex-col p-[30px]'>
            <div className='w-[50%]'>
            <h1 className='text-white lg:text-xl md:text-lg sm:text-lg ss:text-lg mt-8 lg:w-full md:w-[352px] ss:w-full'>Хотите чтобы мы поучаствовали в развитии Вашего проекта?</h1>
            <p className='text-white lg:text-lg md:text-base sm:text-base ss:text-base mt-6 '>Просто позвоните нам!</p>
            </div>
            <a href="tel:+371 0000 0000" className='text-white lg:text-xxl md:text-xl sm:text-xl ss:text-lg border-b-[3px] border-white h-[30%] mt-16'>+371 0000 0000</a>
        </div>
        </section>
        </>
    )
}
export default FoooterLayout