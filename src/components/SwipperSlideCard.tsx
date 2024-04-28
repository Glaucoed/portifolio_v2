import { SwiperSlide } from "swiper/react";

export default function SwipperSlideCard({
  title,
  content,
  conclusion,
  link,
  path,
}: {
  title: string;
  content: string;
  conclusion: string;
  link: string;
  path: string;
}) {
  return (
    <div className="dark:bg-escuro bg-white rounded-3xl h-full arrounde dark:text-white text-black drop-shadow-md ">
      <div className="w-full h-[85%]">
        <div className="w-full h-16 flex justify-center items-center text-2xl text-escuro font-bold dark:text-dourado">
          {title}
        </div>
        <div
          className={`w-full h-64 flex items-end text-sm border dark:border-escuro`}
          style={{
            backgroundImage: `url(${path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="p-2 h-28 m-2 flex items-center">
          <span className="text-sm">{content}</span>
        </div>
      </div>
      <div className="rounded-b-[20px] w-full h-[15%] flex border-t-2 dark:border-dourado">
        <div className="w-1/2 flex flex-col items-center justify-center gap-1  text-xs">
          <span className="font-bold dark:text-dourado">Data da entrega</span>
          <span className="font-light">{conclusion}</span>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <a href={link} target="_blank">
            <button className="bg-dourado hover:bg-orange-200 dark:text-white font-semibold py-2 px-4 rounded-lg text-sm">
              Veja mais
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
