import greenbottle from "../assets/images/greenbottle.png";
import Button from "./button";

export const C2 = () => {
  return (
    <div className="flex h-130 w-full items-center justify-center gap-8 bg-gradient-to-tl from-[#E3FF73] to-[#e58f56] p-6">
      {/* Texto Izquierda */}
      <div className="flex h-full w-full max-w-sm items-center justify-center">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white select-none md:text-left lg:text-5xl">
            BANANAMILK.
            <br />
            It's A Thing.
          </h1>
          <p className="my-5 text-sm font-bold text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            suscipit, earum assumenda dolorem, repudiandae minima blanditiis
            maiores deleniti excepturi ut, sed officia quod quae id quaerat.
          </p>
          <p className="py-2 text-left font-bold text-white">Email*</p>
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
          <Button text={"EMAIL COUPON"} />
          {/* <a
            href="#"
            className="flex items-center justify-center bg-[#99ce4a] px-6 py-2 font-bold text-white transition-all duration-300 hover:bg-[#6b9e34]"
          >
            EMAIL COUPON
          </a> */}
        </div>
      </div>
      {/* Botella Derecha */}
      <div className="h-[500px]">
        <img
          src={greenbottle}
          alt="Green Bottle"
          className="h-full object-contain object-center"
        />
      </div>
    </div>
  );
};
