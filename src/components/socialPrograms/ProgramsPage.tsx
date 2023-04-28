import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Props, Programs } from "../../interfaces";

const ProgramsPage = ({ data }: Props) => {
  return (
    <section
      className={`xl:mx-[200px] flex flex-wrap items-center justify-center gap-7 pt-[150px] pb-[100px] px-10 bg-gray-100 `}
    >
      {data.map((program: Programs) => (
        <Link
          href={`/social-programs/${program.id}`}
          className={`flex flex-col justify-center items-center p-4 max-w-xl min-h-[585px]  border bg-white rounded-lg shadow hover:scale-[1.031] hover:cursor-pointer`}
          key={program.id}
        >
          <Image
            width={400}
            height={200}
            alt={program.name}
            src={program.image}
          />
          <h1 className={`text-2xl font-semibold py-2 text-cyan-700`}>
            {program.name}
          </h1>
          <p
            className={`max-w-sm text-lg font-medium py-2 text-cyan-500 indent-px`}
          >
            {program.description}
          </p>
        </Link>
      ))}
    </section>
  );
};

export default ProgramsPage;
