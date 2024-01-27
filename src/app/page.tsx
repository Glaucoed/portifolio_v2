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
      <div className="bg-zinc-200 gap-10 flex justify-center flex-col p-20">
        <div>
        <h2 className="text-h1 uppercase font-bold text-escuro">Sobre mim</h2>
        <div className="bg-dourado h-2 w-24" />

        </div>
        <div className="flex">
          <div className="w-1/3">
            <Image
              src="/teste.jpg"
              width={500}
              height={500}
              alt="Foto de Glauco"
            />
          </div>
          <div className="flex flex-col gap-10 w-2/3">
            <div className="w-1/2">
              <h2 className="text-h2 font-bold text-escuro">
                Glauco Esverzuthe Damasceno
              </h2>
              <p className="text-dourado font-bold text-center text-h4">Desenvolvedor Fullstack</p>
            </div>
            <p className="w-2/3">
            Desde 2014, minha afinidade com programação tem sido evidente. Em 2017, iniciei minha jornada acadêmica na faculdade de Análise e Desenvolvimento de Sistemas, onde participei ativamente do desenvolvimento de diversos projetos, abrangendo tanto a área de front-end quanto a de back-end. Posteriormente, busquei aprimorar minhas habilidades e conhecimentos ao ingressar na Trybe, onde concluí meu curso e me formei como desenvolvedor fullstack. Atualmente, atuo profissionalmente nas tecnologias Node.js e Next.js, buscando constantemente aprimorar minha expertise nesse campo dinâmico e em constante evolução.
            </p>
            <div className="grid grid-cols-2 w-2/3 gap-5">
              <div className="flex gap-2 border-b-2 border-escuro pb-2 mr-10">
                <p className="text-h5 font-bold text-escuro">Contato: </p>
                <p className="text-h5 text-escuro">11 00000-0000</p>                
              </div>
              <div className="flex gap-2 border-b-2 border-escuro pb-2 mr-10 ">
                <p className="text-h5 font-bold text-escuro">Contato: </p>
                <p className="text-h5 text-escuro">11 00000-0000</p>                
              </div>
              <div className="flex gap-2 border-b-2 border-escuro pb-2 mr-10">
                <p className="text-h5 font-bold text-escuro">Contato: </p>
                <p className="text-h5 text-escuro">11 00000-0000</p>                
              </div>
              <div className="flex gap-2 border-b-2 border-escuro pb-2 mr-10">
                <p className="text-h5 font-bold text-escuro">Contato: </p>
                <p className="text-h5 text-escuro">11 00000-0000</p>                
              </div>
              <div className="flex gap-2 border-b-2 border-escuro pb-2 mr-10">
                <p className="text-h5 font-bold text-escuro">Contato: </p>
                <p className="text-h5 text-escuro">11 00000-0000</p>                
              </div>
              <div className="flex gap-2 border-b-2 border-escuro pb-2 mr-10">
                <p className="text-h5 font-bold text-escuro">Contato: </p>
                <p className="text-h5 text-escuro">11 00000-0000</p>                
              </div>
              
            </div>
          </div>
          </div>
        </div>
    </main>
  );
}
