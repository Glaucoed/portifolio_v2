"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import SwipperSlideCard from "@/components/SwipperSlideCard";
import { dataProjects } from "@/utils/data"

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SwiperCoverflow() {
  return (
      <Swiper
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="!py-20"
      >
        {
          dataProjects.map((project) => (
            <SwiperSlide key={project.id}>
            <SwipperSlideCard 
              title={project.title}
              content={project.content}
              conclusion={project.conclusion}
              link={project.link}
              path={project.path}
              />
          </SwiperSlide>
          ))
        }
      </Swiper>
  );
}
