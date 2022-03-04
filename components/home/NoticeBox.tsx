import { useLocale } from "hooks";
import Link from "next/link";
import { HiSpeakerphone } from "react-icons/hi";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const NoticeBoxItem = () => {
  return (
    <div className="shadow-md bg-white p-4 border-l-8 border-blue-400 flex items-center">
      <span className="flex flex-col items-center justify-center bg-blue-600 h-16 w-16 rounded-full">
        <strong className="text-white">24</strong>
        <span className="text-neutral-100 text-sm">FEB</span>
      </span>
      <Link href="/notice-board/slug">
        <a className="flex-1 ml-4 line-clamp-2 text-ellipsis overflow-hidden text-blue-500 hover:text-blue-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          obcaecati neque dignissimos officiis corrupti sunt itaque animi
          molestiae quasi consequuntur! Labore, repellat sunt officia mollitia
          illo nisi ut odit laborum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquam obcaecati neque dignissimos officiis
          corrupti sunt itaque animi molestiae quasi consequuntur! Labore,
          repellat sunt officia mollitia illo nisi ut odit laborum? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aliquam obcaecati neque
          dignissimos officiis corrupti sunt itaque animi molestiae quasi
          consequuntur! Labore, repellat sunt officia mollitia illo nisi ut odit
          laborum?
        </a>
      </Link>
    </div>
  );
};

const NoticeBox = () => {
  const { localeConst } = useLocale();
  return (
    <section className="mt-12 bg-yellow-300">
      <div className="max-w-6xl p-4 mx-auto flex">
        <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:mr-4">
          <h1 className="capitalize text-5xl text-blue-600 font-semibold">
            {localeConst.ROUTES.noticeBoard}
          </h1>
          <HiSpeakerphone size={220} className="text-red-500" />
        </div>
        <div className="flex-1 bg-white rounded-xl h-96 py-4 overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            direction="vertical"
            slidesPerView="auto"
            allowTouchMove={false}
            className="h-full w-full"
            speed={5000}
            spaceBetween={16}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            loopFillGroupWithBlank={false}
            autoHeight
            loop
          >
            {Array.from({ length: 7 }).map((_, index) => (
              <SwiperSlide key={index} className="px-4">
                <NoticeBoxItem />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NoticeBox;
