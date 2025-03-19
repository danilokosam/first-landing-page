import threebottles from "../assets/images/threebottles.png";
import wave from "../assets/images/wave.png";

export const FlavorFull = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${wave})`,
      }}
      className="relative h-[600px] w-full bg-cover lg:h-[380px]"
    >
      <div className="absolute bottom-2 flex w-full flex-col items-center text-white lg:-bottom-7 lg:left-1/2 lg:max-w-[1000px] lg:-translate-x-1/2 lg:flex-row">
        <div className="">
          <img src={threebottles} alt="" className="w-[350px] lg:w-[600px]" />
        </div>
        <div className="flex w-[350px] flex-col items-center justify-center text-center lg:w-[600px]">
          <h3 className="text-5xl font-bold lg:text-6xl">Flavor Full!</h3>
          <p className="mt-2 px-3 lg:mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis qui amet architecto repellendus odio eius eos ut autem.
            Ea quia deleniti officia magnam eaque dolor odit optio cum eos!
            Asperiores.
          </p>
          <button className="bg-verde mt-2 p-2 font-bold">
            <a href="#">LEARN MORE</a>
          </button>
        </div>
      </div>
    </div>
  );
};
