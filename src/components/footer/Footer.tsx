import React from "react";

import { MdOutlinePlace, MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import {
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className={`flex flex-col justify-center items-center h-[300px] bg-cyan-800 bottom-0 w-full text-lime-300 `}
    >
      <div className={`flex gap-40`}>
        <div>
          <h2 className={`text-center text-2xl mb-3`}>Contato</h2>
          <span
            className={`flex items-center gap-2 text-xl mb-2 hover:cursor-pointer`}
          >
            <MdOutlinePlace />
            <p className={`text-white hover:text-lime-500`}>São Paulo, SP</p>
          </span>
          <span
            className={`flex items-center gap-2 text-xl mb-2 hover:cursor-pointer`}
          >
            <BsTelephone />
            <p className={`text-white hover:text-lime-500`}>(XX)X XXXX-XXXX</p>
          </span>
          <span
            className={`flex items-center gap-2 text-xl mb-2 hover:cursor-pointer `}
          >
            <MdOutlineEmail />
            <p className={`text-white hover:text-lime-500`}>
              ongficticia@gmail.com
            </p>
          </span>
        </div>
        <div className={`flex flex-col`}>
          <h2 className={`self-center text-2xl  mb-10`}>Redes Sociais</h2>
          <div className={`self-center flex gap-4 text-3xl`}>
            <AiOutlineInstagram
              className={`hover:cursor-pointer text-white hover:text-lime-500`}
            />
            <AiOutlineFacebook
              className={`hover:cursor-pointer text-white hover:text-lime-500`}
            />
            <AiOutlineWhatsApp
              className={`hover:cursor-pointer text-white hover:text-lime-500`}
            />
          </div>
        </div>
      </div>
      <span className={"w-full h-[0.1rem] mt-4 bg-lime-100"}></span>
      <p className={`mt-5 mb-0 pt-2 text-lg`}>
        Todos os direitors reservados <span className={`font-semibold text-lime-400 hover:cursor-pointer`}> &copy; ONG Fictícia </span>
      </p>
    </footer>
  );
};

export default Footer;
