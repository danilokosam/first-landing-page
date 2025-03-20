import greenbottle from "../assets/images/greenbottle.png";

export const C2 = () => {
  return (
    <div className="flex h-125 flex-row justify-center bg-[#FAE161]">
      {/* Texto Izquierda*/}
      <div className="mt-18 w-full max-w-sm items-center justify-center">
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-bold text-white">
            BANANAMILK.
            <br />
            It's A Thing.
          </h1>
          <p className="mt-4 font-bold text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            suscipit, earum assumenda dolorem, repudiandae minima blanditiis
            maiores deleniti excepturi ut, sed officia quod quae id quaerat.
          </p>
          <p className="mt-4 text-left font-bold text-white">Email*</p>
          <input
            type="email"
            className="w-80 rounded-sm border border-gray-500 bg-white p-1"
          />
          <div className="mt-4 flex flex-row items-start">
            <input type="checkbox" id="subscribe" className="mt-1 mr-2" />
            <label htmlFor="subscribe" className="text-sm font-bold text-white">
              Keep me updated on Mooala deals and promotions!
            </label>
          </div>
          <button className="mt-2 w-50 bg-[#99ce4a] px-6 py-2 font-bold text-white">
            <a href="#">EMAIL COUPON</a>
          </button>
        </div>
      </div>
      {/* Botella Derecha*/}
      <div className="mt-6 flex overflow-hidden">
        <img
          src={greenbottle}
          alt="Green Bottle"
          className="h-168 object-cover"
        />
      </div>
    </div>
  );
};
