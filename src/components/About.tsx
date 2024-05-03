"use client"

import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { containerAnimation } from "@/Animations/AnimationDefault";

export default function About() {

  const ref = useRef(null);
  const isView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  
  useEffect(() => {
    if (isView) {
      mainControls.start("visible");
    }
    }, [isView, mainControls]);

  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      animate={mainControls}
      ref={ref}
    >
    
    <div className="bg-zinc-200 dark:bg-escuro gap-10 flex justify-center flex-col lg:p-20 p-4 lg:pb-80">
    <div className="mt-20">
      <h2 className="text-h1 uppercase font-bold text-escuro dark:text-white">
        Sobre mim
      </h2>
      <div className="bg-dourado h-2 w-24" />
    </div>
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-1/3 w-full">
        <Image
          src="/teste.jpg"
          width={500}
          height={500}
          alt="Foto de Glauco"
        />
      </div>
      <div className="flex flex-col lg:gap-4 gap-10 lg:w-2/3">
        <div className="lg:mt-0 mt-10">
          <h2 className="text-h2 font-bold text-escuro dark:text-white">
            Glauco Esverzuthe Damasceno
          </h2>
          <p className="text-dourado font-bold text-h4">
            Desenvolvedor Fullstack
          </p>
        </div>
        <div className="lg:w-2/3 flex flex-col lg:gap-4 gap-10 dark:text-gray-200">
          <p>
            Sou um desenvolvedor FullStack apaixonado por programação desde
            2014, quando descobri minha habilidade na área, sou formado em
            Analise e Desenvolvimento de Sistemas, ao longo dos anos, tenho
            me especializado em diversas tecnologias.
          </p>
          <p>
            Atuo como programador FullStack. No Frontend, possuo domínio do
            React e do Next.js, com uma base sólida em HTML, CSS3 e
            JavaScript. Também utilizo bibliotecas de estilização como
            Tailwind CSS, Chakra UI, Shadcn UI e Material UI, além do
            Bootstrap. No Backend, desenvolvo soluções escaláveis, com alta
            segurança e pensando em escalabilidade, realizando Testes
            Unitários, E2E e de Integração.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-2/3 gap-5 ">
          <div className="flex gap-2 border-b-2 border-escuro pb-2 mr-10 dark:border-dourado ">
            <p className="text-h5 font-bold text-escuro dark:text-dourado">
              Nome:
            </p>
            <p className="text-h5 text-escuro dark:text-gray-200">
              Glauco Esverzuthe Damasceno
            </p>
          </div>
          <div className="flex gap-2 border-b-2 border-escuro dark:border-dourado pb-2 mr-10">
            <p className="text-h5 font-bold text-escuro dark:text-dourado">
              GitHub:
            </p>
            <p className="text-h5 text-escuro dark:text-gray-200">
              github.com/Glaucoed
            </p>
          </div>
          <div className="flex gap-2 border-b-2 border-escuro pb-2 mr-10 dark:border-dourado">
            <p className="text-h5 font-bold text-escuro dark:text-dourado">
              Email:
            </p>
            <p className="text-h5 text-escuro dark:text-gray-200">
              gesverzuthe@gmail.com
            </p>
          </div>
          <div className="flex gap-2 border-b-2 border-escuro pb-2 mr-10 dark:border-dourado">
            <p className="text-h5 font-bold text-escuro dark:text-dourado">
              Linkedin:
            </p>
            <p className="text-h5 text-escuro whitespace-nowrap dark:text-gray-200">
              linkedin.com/in/glauco-esverzuthe
            </p>
          </div>
          <div className="flex gap-2 border-b-2 border-escuro pb-2 mr-10 dark:border-dourado">
            <p className="text-h5 font-bold text-escuro dark:text-dourado">
              Contato:
            </p>
            <p className="text-h5 text-escuro dark:text-gray-200">
              11 98681-3662
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </motion.div>
  )
}
