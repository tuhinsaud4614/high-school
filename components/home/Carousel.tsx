import Image from "next/image";
import { ReactNode } from "react";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  children?: ReactNode;
  imageHeight: number;
  imageWidth: number;
  image: { src: string; alt: string };
}

const CarouselItem = ({ children, imageHeight, imageWidth, image }: Props) => {
  return (
    <div
      className="relative w-full h-full"
      style={{ paddingBottom: `${(imageHeight / imageWidth) * 100}%` }}
    >
      <div className="absolute left-0 top-0 w-full h-full">
        <div className="w-full h-full relative">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            priority
            className="animate-zooming"
          />
          <div className="hidden md:flex absolute inset-0 p-10 overflow-hidden items-end justify-center bg-gradient-to-t from-black/75 via-black/0">
            <h3
              style={{
                textShadow: "2px 1px 2px rgba(0, 0, 0, 0.6)",
              }}
              className="text-white pl-2.5 border-l-4 border-red-600 text-2xl"
            >
              {children}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Carousel = () => {
  const imageWidth = 1920;
  const imageHeight = 600;
  return (
    <Swiper
      // modules={[Autoplay, EffectFade, Pagination]}
      modules={[Autoplay, EffectFade]}
      slidesPerView={1}
      effect="fade"
      // pagination={{
      //   clickable: true,
      //   bulletActiveClass:
      //     "swiper-pagination-bullet-active home-carousel-bullet-active",
      //   bulletClass: "swiper-pagination-bullet home-carousel-bullet",
      //   clickableClass:
      //     "bg-black/30 !bottom-0 flex items-center justify-center py-2 px-4",
      // }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={5000}
      loop
      allowTouchMove={false}
      className="h-[50vh] md:h-[70vh]"
    >
      <SwiperSlide>
        <CarouselItem
          image={{ alt: "Slide", src: "/home.jpeg" }}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ut
          dignissimos soluta aperiam iste veniam voluptates impedit ex.
        </CarouselItem>
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          image={{ alt: "Slide", src: "/home1.jpeg" }}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ut
          dignissimos soluta aperiam iste veniam voluptates impedit ex.
        </CarouselItem>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
