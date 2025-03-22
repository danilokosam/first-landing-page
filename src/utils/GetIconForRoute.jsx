import { FaHome } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { RiShoppingBagFill } from "react-icons/ri";

export const GetIconForRoute = (routeName) => {
  switch (routeName.toLowerCase()) {
    case "home":
      return <FaHome size={20} />;
    case "our products":
      return <RiShoppingBagFill size={20} />;
    case "our story":
      return <IoBookSharp size={20} />;
    default:
      return <FaHome size={20} />;
  }
};
