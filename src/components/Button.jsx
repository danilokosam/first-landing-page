import React from "react";

const Button = ({ text }) => {
  return (
    <button className="hover:before:transition-delay-100 relative m-auto flex h-12 w-4/5 cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-white bg-[#99ce4a] px-8 py-4 text-[15px] font-bold text-[#131313] shadow-[0_2px_0_2px_#000] transition-all duration-500 before:absolute before:top-1/2 before:h-[120%] before:w-[290px] before:-translate-x-[150%] before:-translate-y-1/2 before:skew-x-[30deg] before:bg-[#ff6700] before:transition-all before:duration-500 before:content-[''] hover:bg-[#4cc9f0] hover:text-white hover:shadow-[0_2px_0_2px_#0d3b66] hover:before:translate-x-[150%] active:scale-[0.9]">
      {text}
    </button>
  );
};

export default Button;
