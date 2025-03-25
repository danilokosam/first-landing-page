import greenbottle from "../assets/images/greenbottle.png";

export const C2 = () => {
  return (
    <div className="flex h-130 w-full flex-row justify-center bg-gradient-to-tl from-[#E3FF73] to-[#e58f56]">
      {/* Texto Izquierda */}
      <div className="container mx-auto flex h-full w-full max-w-sm items-center justify-center p-4">
        <div className="flex-1">
          <h1 className="text-center text-3xl font-bold text-white select-none md:text-left lg:text-5xl">
            BANANAMILK.
            <br />
            It's A Thing.
          </h1>
          <p className="p-2 text-sm font-bold text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            suscipit, earum assumenda dolorem, repudiandae minima blanditiis
            maiores deleniti excepturi ut, sed officia quod quae id quaerat.
          </p>
          <p className="p-2 text-left font-bold text-white">Email*</p>
          <input
            type="email"
            className="w-full rounded-sm bg-white p-1 outline-none"
          />
          <div className="my-4 flex flex-row items-start">
            <input type="checkbox" id="subscribe" className="mt-1 mr-2" />
            <label htmlFor="subscribe" className="text-sm font-bold text-white">
              Keep me updated on Mooala deals and promotions!
            </label>
          </div>
          <a
            href="#"
            className="flex items-center justify-center bg-[#99ce4a] px-6 py-2 font-bold text-white transition-all duration-300 hover:bg-[#6b9e34]"
          >
            EMAIL COUPON
          </a>
        </div>
      </div>
      {/* Botella Derecha */}
      <div className="mt-6 hidden h-[500px] py-5 md:block md:overflow-hidden">
        <img
          src={greenbottle}
          alt="Green Bottle"
          className="h-full object-contain object-center"
          width="300"
          height="500"
        />
      </div>
    </div>
  );
};
