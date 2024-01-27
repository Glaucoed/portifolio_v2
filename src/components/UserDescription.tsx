"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function UserDescription() {
  const [nextMessage, setNextMessage] = useState({
    primary: false,
    second: false,
  });

  return (
    <div className="min-h-64">
      <TypeAnimation
        sequence={[
          `Olá, me chamo `,
          1000,
          () => {
            setNextMessage({...nextMessage, primary: true});
          },

        ]}
        wrapper="h1"
        speed={50}
        className="text-h1 font-semibold"
        cursor={false}
      />
      {nextMessage.primary && (
        <TypeAnimation
          sequence={["Glauco Esverzuthe Damasceno", 1000, 
          () => {
            setNextMessage({...nextMessage, second: true});
          },]}
          wrapper="h1"
          speed={50}
          className="text-h1 font-bold text-dourado"
          cursor={false}
        />
      )}
      {nextMessage.second && (
        <TypeAnimation
          sequence={["Sou desenvolvedor FullStack Júnior", 1000]}
          wrapper="h2"
          speed={50}
          className="text-h2 font-semibold"
        />
      )}
    </div>
  );
}
