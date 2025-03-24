export const C3 = () => {
  return (
    <div className="w-full bg-white p-8 text-center">
      <h2 className="text-5xl font-bold text-[#67829F]">IT'S BANANAS!</h2>
      <p className="mx-auto mt-5 max-w-2xl max-sm:text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
        blanditiis? Culpa quisquam amet voluptates illo quia rerum perspiciatis,
        fugit harum at ullam alias, sint quidem totam beatae iste ut aperiam
        error incidunt et excepturi quo sit deleniti.
      </p>

      <div className="relative my-12 inline-block">
        <img src="/src/assets/images/viñeta.png" alt="" className="w-full" />
        <p className="absolute inset-0 flex items-center justify-center text-center text-xs font-semibold text-white sm:text-sm md:text-base">
          USDA ORGANIC • NON-GMO • 60 CALORIES • 6 INGREDIENTS
        </p>
      </div>
    </div>
  );
};
