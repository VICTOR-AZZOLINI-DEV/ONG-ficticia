import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className={`bg-[url('https://images.pexels.com/photos/6646989/pexels-photo-6646989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover mt-1 w-full h-[90vh] lg:bg-center flex justify-center items-center flex-col gap-4 sm:bg-center`}
    >
      <p
        className={` text-white font-bold max-w-3xl bg-gray-transparent p-9 lg:max-w-4xl lg:text-3xl md:max-w-2xl md:text-2xl sm:text-1xl sm:max-w-xl `}
      >
        Bem vindo a ONG Ficticia, aqui desenvolvemos o amor através dos nossos
        programas socias, venha conhecê-los!
      </p>
      <button
        className={`bg-lime-700 p-4 rounded-lg text-white trasition duration-300 hover:bg-lime-300 hover:text-lime-700 lg:w-3xl lg:text-xl lg:p-5 md:max-w-xl md:text-1xl sm:text-1xl sm:max-w-xl  `}
      >
        <Link href="/social-programs">Nossos Programas</Link>
      </button>
    </section>
  );
};

export default HeroSection;
