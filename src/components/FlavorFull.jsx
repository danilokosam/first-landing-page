import threebottles from "../assets/images/threebottles.png";
import wave from "../assets/images/wave.png";

export const FlavorFull = () => {
  return (
    <div
      style={{ backgroundImage: `url(${wave})` }}
      className="relative min-h-[450px] w-full overflow-hidden bg-cover bg-center lg:min-h-[380px]"
    >
      <div className="mx-auto mb-7 flex max-w-4xl flex-col items-center justify-center gap-1 md:flex-row">
        {/* Contenedor de la Imagen */}
        <div className="flex flex-1 justify-center">
          <img
            src={threebottles}
            alt="Three bottles"
            className="w-max-lg w-full"
          />
        </div>

        {/* Contenedor del Texto */}
        <div className="flex flex-1 flex-col items-center justify-center text-white md:mt-5 md:ml-6 md:text-left">
          <h3 className="text-4xl font-extrabold sm:text-5xl">Flavor Full!</h3>
          <p className="my-2 rounded-lg p-4 text-sm leading-relaxed md:bg-transparent md:p-0 md:text-base lg:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis qui amet architecto repellendus odio eius eos ut autem.
          </p>
          <a
            href="#"
            className="flex w-40 items-center justify-center bg-[#99ce4a] px-6 py-2 font-bold text-white transition-all duration-300 hover:bg-[#6b9e34]"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};
