import Image from "next/image";

const HeadMasterCard = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 md:mt-20 mt-7 md:flex md:items-center">
      <div className="relative h-[11.25rem] w-full md:h-[18.75rem] md:w-[30rem]">
        <div className="absolute inset-0 w-full h-full rounded-full border-2 border-blue-500">
          <div className="relative w-full h-full rounded-full overflow-hidden md:mt-3 md:ml-3">
            <Image
              src="/home.jpeg"
              alt="Welcome Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="md:flex-1 md:pl-8">
        <div className="bg-white shadow-md p-4 rounded-3xl">
          <blockquote className="text-neutral-800 relative">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem laudantium, porro est repellendus consequuntur
            maiores vitae odit dignissimos ratione placeat quod sapiente quaerat
            excepturi ipsa amet.
          </blockquote>
          <h6 className="text-[#757575] flex flex-col items-end border-t mt-3 ml-auto w-fit">
            <strong>Mr. Abdul Rahim</strong>
            <span>-Headmaster</span>
          </h6>
        </div>
      </div>
    </section>
  );
};

export default HeadMasterCard;
