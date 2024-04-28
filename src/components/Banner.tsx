"use client";

import Link from "next/link";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Banner() {
  const [nextMessage, setNextMessage] = useState({
    primary: false,
    second: false,
  });
  //
  return (
    <div className="bg-[url('/banner.jpeg')] bg-cover">
      <div className="bg-black opacity-90 h-[calc(100vh-70px)] text-white flex flex-col justify-center gap-20 lg:px-20 px-4">
        <div className="min-h-64">
          <TypeAnimation
            sequence={[
              `Olá, me chamo `,
              1000,
              () => {
                setNextMessage({ ...nextMessage, primary: true });
              },
            ]}
            wrapper="h1"
            speed={50}
            className="text-h1 font-semibold"
            cursor={false}
          />
          {nextMessage.primary && (
            <TypeAnimation
              sequence={[
                "Glauco Esverzuthe Damasceno",
                1000,
                () => {
                  setNextMessage({ ...nextMessage, second: true });
                },
              ]}
              wrapper="h1"
              speed={50}
              className="text-h1 font-bold text-dourado"
              cursor={false}
            />
          )}
          {nextMessage.second && (
            <TypeAnimation
              sequence={["Sou desenvolvedor FullStack.", 1000]}
              wrapper="h2"
              speed={50}
              className="text-h2 font-semibold"
            />
          )}
        </div>
        <Link href="/">
          <div className="border-2 border-dourado hover:bg-dourado-100 w-52 h-12 flex items-center justify-center rounded-2xl hover:text-escuro font-bold">
            Meus Projetos
          </div>
        </Link>
      </div>
    </div>
  );
}
