import Image from "next/image";
import React from "react";
import { dataBack, dataFront } from "@/utils/data"
import LiComponent from "./LiComponent";

export default function Skills() {
  return (
    <div className="flex justify-center lg:mb-10">
      <div
        className="lg:w-[1200px] mx-auto flex lg:flex-row flex-col rounded-[4rem] relative lg:-mt-52"
        style={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <div className="bg-escuro dark:bg-dourado rounded-l-[4rem] p-10 w-[600px] h-[820px]  border-r border-b border-dourado dark:border-dourado-100 flex flex-col">
          <div className="w-[100px] h-[100px] rounded-full dark:border-8 bg-dourado border-dourado-100 flex items-center justify-center self-center">
            <Image
              src="/frontend.png"
              width={50}
              height={50}
              alt="iconei front"
            />
          </div>
          <div className="self-center text-4xl font-bold text-dourado dark:text-white mt-5 uppercase">
            Front-End
          </div>
          <div className="mt-10">
            <ul className="w-full flex flex-col justify-center items-center gap-1">
              {
                dataFront.map((item) => (
                  <LiComponent key={item.id} name={item.name} />
                ))
              }
            </ul>
          </div>
        </div>
        <div className="bg-escuro dark:bg-dourado rounded-r-[4rem] p-10 w-[600px] h-[820px] border-b flex flex-col">
          <div className="w-[100px] h-[100px] rounded-full dark:border-8 bg-dourado border-dourado-100 flex items-center justify-center self-center">
            <Image
              src="/backend.png"
              width={50}
              height={50}
              alt="iconei front"
            />
          </div>
          <div className="self-center text-4xl font-bold text-dourado dark:text-white mt-5 uppercase">
            Back-End
          </div>
          <div className="mt-10">
            <ul className="w-full flex flex-col justify-center items-center gap-1">
              {
                dataBack.map((item) => (
                  <LiComponent key={item.id} name={item.name} />
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
