import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

export const GoTop = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.scrollY > 300);
  };

  const handleScrollUp = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleScrollUp();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
    return () => window.removeEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <button
      type="button"
      onClick={handleScrollUp}
      onKeyDown={handleKeyDown}
      className={`${
        showGoTop ? "block" : "hidden"
      } fixed bottom-[12%] left-[85%] z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-[25px] bg-[rgba(252,248,241,0.8)] text-center leading-[30px] shadow-[2px_2px_5px_#FFC107] transition-transform duration-300 hover:scale-110 md:left-[90%] lg:left-[95%]`}
      aria-label="Volver arriba"
      tabIndex={0}
    >
      <FaArrowAltCircleUp size={25} />
    </button>
  );
};
