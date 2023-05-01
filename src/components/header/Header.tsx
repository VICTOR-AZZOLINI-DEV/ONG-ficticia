import React, { useState } from "react";

import { Inter } from "next/font/google";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`p-6 bg-cyan-800 position fixed w-full z-20`}>
      <nav className={`flex justify-between items-center ${inter.className}`}>
        <Link href="/" className={`text-3xl font text-lime-200`}>
          ONG
        </Link>
        <ul
          className={`lg:flex lg:flex-row gap-4 text-lime-700 font-medium vsm:hidden`}
        >
          <li>
            <Link
              className={`bg-lime-200 p-3 rounded-lg trasition duration-300 hover:bg-lime-700 hover:text-lime-100 `}
              href="/social-programs"
            >
              Programas Sociais
            </Link>
          </li>
          <li>
            <Link
              className={`bg-lime-200 p-3 rounded-lg trasition duration-300 hover:bg-lime-700 hover:text-lime-100 `}
              href="/about-us"
            >
              Sobre Nós
            </Link>
          </li>
        </ul>
        <AiOutlineMenu
          onClick={() => setToggle(!toggle)}
          className={`lg:hidden hover:cursor-pointer text-xl text-lime-200`}
        />
      </nav>
      {toggle && (
        <ul
          className={`flex flex-col items-center absolute left-0 top-[60px] justify-center gap-4 text-lime-700 font-medium h-[140px] bg-cyan-800 w-full shadow-md lg:hidden`}
        >
          <span className={"w-full h-[0.01rem] bg-lime-100 "}></span>
          <li className={``}>
            <Link
              className={`text-lime-200 p-3 hover:text-white`}
              href="/social-programs"
            >
              Programas Sociais
            </Link>
          </li>
          <span className={"w-full h-[0.01rem] bg-lime-100"}></span>
          <li className={``}>
            <Link
              className={`text-lime-200 p-1 w-full hover:text-white`}
              href="/about-us"
            >
              Sobre Nós
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
