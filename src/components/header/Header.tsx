import React from "react";

import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className={`p-6 bg-cyan-800 position fixed w-full z-10`}>
      <nav className={`flex justify-between items-center   ${inter.className}`}>
        <Link href="/" className={`text-3xl font text-lime-200`}>
          ONG
        </Link>
        <ul className={`flex flex-row gap-4 text-lime-700 font-medium`}>
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
      </nav>
    </header>
  );
};

export default Header;
