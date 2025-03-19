import threebottles from "../assets/images/threebottles.png";
import wave from "../assets/images/wave.png";

export const FlavorFull = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${wave})`,
        backgroundSize: "cover",
        height: "380px",
        position: "relative",
      }}
      className=""
    >
      <div className="absolute -bottom-7 left-1/2 flex max-w-[1200px] -translate-x-1/2 text-white">
        <div className="">
          <img src={threebottles} alt="" className="w-[600px]" />
        </div>
        <div className="flex w-[600px] flex-col items-center justify-center text-center">
          <h3 className="text-6xl font-bold">Flavor Full!</h3>
          <p className="mt-4 px-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis qui amet architecto repellendus odio eius eos ut autem.
            Ea quia deleniti officia magnam eaque dolor odit optio cum eos!
            Asperiores.
          </p>
          <button className="bg-verde mt-2 w-1/3 p-2 font-bold">
            <a href="#">LEARN MORE</a>
          </button>
        </div>
      </div>
    </div>
  );
};
