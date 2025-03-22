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
            className="w-full w-max-lg"
          />
        </div>

        {/* Contenedor del Texto */}
        <div className="flex-1 text-center text-white md:mt-5 md:text-left md:ml-6">
          <h3 className="text-4xl font-extrabold sm:text-5xl">Flavor Full!</h3>
          <p className="my-2 max-w-sm rounded-lg bg-black/30 p-4 text-lg leading-relaxed md:bg-transparent md:p-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis qui amet architecto repellendus odio eius eos ut autem.
          </p>
          <button className="bg-verde mt-4 rounded-md px-6 py-3 text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-green-700">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};
