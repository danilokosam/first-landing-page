import { motion } from "motion/react";
import carouselImages from "../data/carouselImages.json";

export const Carousel = () => {
  const img = carouselImages;
  const duplicatedImages = [...carouselImages, ...carouselImages];
  console.log(duplicatedImages);
  console.log(img);
  return (
    <div className="relative my-9 h-auto w-full overflow-hidden bg-blue-900 py-4">
      <div className="before:blur-3 after:blur-3 absolute inset-0 z-20 before:absolute before:top-0 before:left-0 before:h-full before:w-40 before:bg-gradient-to-r before:from-black before:to-transparent before:filter after:absolute after:top-0 after:right-0 after:h-full after:w-40 after:bg-gradient-to-l after:from-black after:to-transparent after:filter"></div>
      <div className="flex items-center justify-center pb-4 text-4xl text-fuchsia-500">
        OUR PARTNERS
      </div>
      <motion.div
        className="flex"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / img.length}%` }}
          >
            <div className="flex h-36 items-center justify-center border-y border-gray-300">
              <img src={image.url} alt={image.alt} className="max-h-full" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
