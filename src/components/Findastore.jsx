import mapbg from "../assets/images/map-bg.jpg";

export const Findastore = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${mapbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center py-2 text-center text-gray-100 backdrop-brightness-50">
        <h3 className="text-3xl font-bold md:text-5xl">Find a Store</h3>
        <p className="p-2 text-sm md:w-[600px] md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum
          corporis voluptatem
        </p>
        <a href="#" className="bg-verde mt-2 px-6 py-2 font-bold">
          Find us
        </a>
      </div>
    </div>
  );
};
