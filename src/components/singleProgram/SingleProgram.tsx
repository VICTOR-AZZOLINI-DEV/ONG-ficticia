import React from "react";

import Image from "next/image";

import { Programs } from "@/interfaces";
const SingleProgram = (data: Programs) => {
  return (
    <section
      className={`min-h-screen m-w-[1200px] mx-[100px] py-[100px] flex justify-center items-center`}
    >
      <div className={`m-w-[1200px] max-h-[900px] z-10`}>
        <div
          className={`flex lg:flex-row bg-white shadow gap-5 border rounded-lg  p-4 vsm:flex-col md:items-center`}
        >
          <Image
            className={`md:w-[700px] md:w-[400px]  max-w-[900px] max-h-[450px] self-center`}
            width={200}
            height={100}
            alt={data.name}
            src={data.image}
          />
          <div className={`flex flex-col  max-w-[500px]`}>
            <h1
              className={`text-2xl font-semibold py-2 text-cyan-700 self-center `}
            >
              {data.name}
            </h1>
            <h2 className={`text-xl font-semibold py-2 text-cyan-700`}>
              Descrição
            </h2>
            <p>{data.description}</p>
            <h2 className={`text-xl font-semibold py-2 text-cyan-700`}>
              Objetivo
            </h2>
            <p>{data.objectives}</p>
            <h2 className={`text-xl font-semibold py-2 text-cyan-700`}>
              Metas
            </h2>
            <p>{data.goals}</p>
            <h2 className={`text-xl font-semibold py-2 text-cyan-700`}>
              Impacto
            </h2>
            <p>{data.impact}</p>
            <div className={`flex self-center gap-4`}>
              <button
                className={`bg-lime-300 text-lime-800 font-semibold w-[10rem] my-4 p-3 rounded-lg trasition duration-300 hover:bg-lime-500 hover:text-lime-100 `}
              >
                Faça Parte
              </button>
              <button
                className={`bg-lime-300 text-lime-800 font-semibold w-[10rem] my-4 p-3 rounded-lg trasition duration-300 hover:bg-lime-500 hover:text-lime-100 `}
              >
                Doar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProgram;
