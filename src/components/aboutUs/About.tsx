import React from "react";

import Image from "next/image";

const About = () => {
  return (
    <section
      className={`min-h-screen pt-[70px] max-w-[1200px] mx-[auto] flex lg:flex-row items-center gap-5 vsm:flex-col mb-10`}
    >
      <div className={`flex flex-col place-self-start gap-5 text-lg p-10`}>
        <h1
          className={`text-2xl font-semibold py-2 text-cyan-700 `}
        >
          Bem-vindo(a) à nossa ONG!
        </h1>
        <p>
          Nós somos uma organização sem fins lucrativos dedicada a ajudar
          comunidades em todo o mundo. Temos diversos programas sociais
          associados que visam atender às necessidades específicas de cada grupo
          e região, abrangendo áreas como saúde, educação, alimentação, moradia
          e muito mais.
        </p>
        <p>
          Nossa missão é trabalhar com as comunidades para enfrentar os desafios
          que elas enfrentam, desenvolvendo soluções criativas e sustentáveis
          que promovam a justiça social e a igualdade de oportunidades.
          Acreditamos que, juntos, podemos criar um mundo mais justo e
          igualitário, onde todos tenham as ferramentas e recursos necessários
          para alcançar seu pleno potencial.
        </p>
        <h2>Nossos programas sociais</h2>
        <ul>
          <li>
            <span className={`text-xl font-semibold py-2 text-cyan-700 self-center `}>Programa de Educação:</span> nosso objetivo é oferecer
            acesso à educação de qualidade para todas as crianças e jovens,
            independentemente de sua origem ou condição financeira. Oferecemos
            programas de alfabetização, escolarização e formação profissional
            para ajudar a construir um futuro melhor.
          </li>
          <li>
            <span className={`text-xl font-semibold py-2 text-cyan-700 self-center `}>Programa de Alimentação:</span> trabalhamos para garantir
            que todos tenham acesso a alimentos nutritivos e saudáveis, em
            especial as famílias em situação de vulnerabilidade. Oferecemos
            programas de alimentação escolar, distribuição de cestas básicas e
            promoção de agricultura sustentável.
          </li>
          <li>
            <span className={`text-xl font-semibold py-2 text-cyan-700 self-center `}>Programa de Moradia:</span> visamos construir moradias
            seguras e saudáveis para as pessoas que vivem em áreas de risco ou
            sem condições adequadas de habitação. Oferecemos programas de
            construção de casas populares, reforma de moradias e melhorias de
            infraestrutura básica.
          </li>
        </ul>
      </div>
      <Image src="https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='voluntários' width={600} height={400} className={`lg:self-start vsm:self-center lg:pt-[100px]`}/>
    </section>
  );
};

export default About;
