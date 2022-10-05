import React from "react";
import Link from "next/link";
import Image from "next/image";
import { images, navlinks } from "../constants";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <nav className="sticky top-0 left-0 w-full bg-white lg:bg-darkblue">
      <div className="mx-[40px] lg:mx-[30px]">
        <div className="flex items-center justify-between flex-wrap py-[30px]">
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
                    <a className="capitalize text-seadrive text-[16px] leading-4 font-medium">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-6">
              <button className="py-[14px] px-6 bg-transparent font-bold border border-blue lg:border-white rounded-xl text-[16px] leading-5 text-blue lg:text-white hover:bg-blue lg:hover:bg-white hover:text-white lg:hover:text-darkblue ease-linear duration-300">
                Свяжитесь с нами
              </button>
              <button className="py-[14px] px-6 bg-transparent font-bold border border-blue lg:border-white rounded-xl text-[16px] leading-5 text-blankstare lg:text-seadrive hover:bg-blue lg:hover:bg-white hover:text-seadrive lg:hover:text-bluedepths ease-linear duration-300">
                LV
              </button>
              <div className="lg:hidden flex items-center justify-center">
                <button>
                  <span>
                    <AiOutlineMenu
                      // color="#242A56"
                      className="text-lg pointer-events-none text-bluedepths"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
