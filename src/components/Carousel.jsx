import Marquee from "react-fast-marquee";
import { imgImports } from "../data/imgImports";

export const Carousel = () => {
  return (
    <div className="relative h-auto w-full overflow-hidden bg-[#62C8F5] py-2 lg:py-4">
      <div className="before:blur-3 after:blur-3 absolute inset-0 z-20 before:absolute before:top-0 before:left-0 before:h-full before:w-40 before:filter after:absolute after:top-0 after:right-0 after:h-full after:w-40 after:bg-gradient-to-l after:to-transparent after:filter"></div>
      <div className="mb-4 hidden items-center justify-center py-3 text-sm font-bold text-white md:flex md:text-3xl lg:text-5xl">
        OUR PARTNERS
      </div>
      <Marquee speed={50} gradient={false}>
        {imgImports.map((image, index) => (
          <div
            key={index}
            className="mx-6 flex w-24 flex-shrink-0 items-center justify-center sm:w-32 md:w-40 lg:w-48"
          >
            <img
              src={image.image}
              alt={image.alt}
              className="max-h-16 object-contain sm:max-h-24 md:max-h-32 lg:max-h-40"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
