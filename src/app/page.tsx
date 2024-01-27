import UserDescription from "@/components/UserDescription";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-y-auto pt-[70px]">
      <div className="bg-black opacity-90 h-[calc(100vh-70px)] text-white flex flex-col justify-center gap-20 pl-20">
        <UserDescription />
        <Link href="/">
          <div className="border-2 border-dourado hover:bg-dourado-100 w-52 h-12 flex items-center justify-center rounded-2xl hover:text-escuro font-bold">
            Meus Projetos
          </div>
        </Link>
      </div>
      <div className="bg-zinc-200 py-10 gap-10 flex justify-center">
        <div className="flex gap-10 p-10 w-2/3">
          <div className="w-1/4">
            <Image
              src="/Glauco.png"
              width={200}
              height={300}
              className="rounded-3xl"
              alt="Foto de Glauco"
            />
          </div>
          <div className="flex flex-col gap-4 w-3/4">
            <h2 className="text-h2 font-bold text-dourado">
              Glauco Esverzuthe Damasceno
            </h2>
            <p className="w-2/3">
              Me identifiquei com programação desde 2014, desde então cursei a
              faculdade de Análise e Desenvolvimento de Sistemas em 2017,
              desenvolvi diversos projetos durante a graduação, como front-end e
              back-end, atualmente estou cursando a Trybe para ter um melhor
              desenvolvimento e especialização nas linguagens atuais.
            </p>
          </div>
          </div>
        </div>
    </main>
  );
}
