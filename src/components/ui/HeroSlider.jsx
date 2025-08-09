import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/splash.jpg",
    alt: "Nightsky",
    title: "Join one of the largest Muslim Hiking groups in Ontario",
    text: "From exploring the Bruce Trail, to camping and stargazing events! Ontario is yours to discover!",
    actions: [
      {
        variant: "primary",
        target: "_blank",
        text: "Join our next Hike!",
        href: "https://lu.ma/muslim",
        icon: "tabler:tree",
      },
      {
        variant: "primary",
        target: "_blank",
        text: "Become a Hike Lead!",
        href: "https://muslimoutdooradventures.com/apply",
        icon: "tabler:rocket",
      },
    ],
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-10">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
              <p className="mb-4">{slide.text}</p>
              <div className="flex space-x-4 justify-center lg:justify-start">
                {slide.actions.map((action, i) => (
                  <a
                    key={i}
                    href={action.href}
                    target={action.target}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2"
                  >
                    <span>{action.text}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={slide.image}
                alt={slide.alt}
                width="600" height="600" sizes="(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px" style="object-fit: cover; object-position: center; max-width: 600px; max-height: 600px; aspect-ratio: 1; width: 100%;" class="mx-auto rounded-md w-full" loading="eager" decoding="async"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;