import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { images, navlinks } from "../constants";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  if (toggleMenu) {
    console.log(toggleMenu);
  }
  return (
    <nav className="sticky top-0 left-0 w-full bg-white lg:bg-darkblue z-10">
      <div className="mx-4 md:mx-[40px] lg:mx-[30px]">
        <div
          className={`flex items-center justify-between flex-wrap py-4 lg:py-[30px]`}
        >
          <Link href={"/"}>
            <a className="flex items-center justify-center">
              <span className="hidden lg:block">
                <Image src={images.logo} alt="logo" />
              </span>
              <span className="block lg:hidden">
                <Image src={images.darklogo} alt="logo" />
              </span>
            </a>
          </Link>
          <div className="flex items-center lg:space-x-[60px]">
            <ul className="hidden lg:flex items-center space-x-[40px]">
              {navlinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>
                    <a className="capitalize text-seadrive hover:text-white text-[16px] leading-5 font-medium duration-300">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center sm:space-x-6">
              <button
                className={`${
                  toggleMenu && "hidden"
                } hidden sm:block py-[14px] px-6 bg-transparent font-bold border border-blue lg:border-white rounded-xl text-[16px] leading-5 text-blue lg:text-white hover:bg-blue lg:hover:bg-white hover:text-white lg:hover:text-darkblue ease-linear duration-300`}
              >
                Свяжитесь с нами
              </button>
              <button
                className={`${
                  toggleMenu && "hidden"
                } hidden sm:block py-[14px] px-6 bg-transparent font-bold border border-blue lg:border-white rounded-xl text-[16px] leading-5 text-blankstare lg:text-seadrive hover:bg-blue lg:hover:bg-white hover:text-seadrive lg:hover:text-bluedepths ease-linear duration-300`}
              >
                LV
              </button>
              <div className="lg:hidden flex items-center justify-center">
                <button
                  onClick={() => setToggleMenu((prv) => !prv)}
                  className="flex items-center justify-center"
                >
                  <span>
                    {toggleMenu ? (
                      <MdOutlineClose
                        fontSize={23}
                        className="pointer-events-none text-bluedepths"
                      />
                    ) : (
                      <AiOutlineMenu
                        fontSize={23}
                        className="pointer-events-none text-bluedepths"
                      />
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
          {toggleMenu && (
            <div className="absolute bottom-[-101%] left-0 min-h-full h-full w-full pt-[40px] px-4 sm:pl-[40px] bg-white lg:overflow-y-scroll border-t-2 border-seadrive">
              <div className="w-full sm:w-1/2 flex flex-col space-y-[40px]">
                <ul className="flex flex-col items-start space-y-8">
                  {navlinks.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href}>
                        <a className="capitalize text-blankstare hover:text-blue duration-300 text-[16px] leading-5 font-medium">
                          {link.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col items-start space-y-6">
                  <button className="py-[14px] w-full sm:w-[290px] bg-transparent font-bold border border-blue lg:border-white rounded-xl text-[16px] leading-5 text-blue lg:text-white hover:bg-blue lg:hover:bg-white hover:text-white lg:hover:text-darkblue ease-linear duration-300">
                    Свяжитесь с нами
                  </button>
                  <button className="py-[14px] w-full sm:w-[290px] bg-transparent font-bold border border-blue lg:border-white rounded-xl text-[16px] leading-5 text-blankstare lg:text-seadrive hover:bg-blue lg:hover:bg-white hover:text-seadrive lg:hover:text-bluedepths ease-linear duration-300">
                    LV
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
