import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { OurProducts } from "../pages/OurProducts";
import { Story } from "../pages/Story";

export const getRouteComponent = (routeName) => {
  switch (routeName) {
    case "Home":
      return <HomePage />;
    case "Our Products":
      return <OurProducts />;
    case "Our Story":
      return <Story />;
    default:
      return <NotFoundPage />;
  }
};
