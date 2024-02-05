import { RouteInterface } from "../../../types";
import { getRandomNumber } from "../../../utils/";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Faqs from "../pages/Faqs";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Terms from "../pages/Terms";

const HomeRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: <Home />,
    path: "/",
  },
  {
    id: getRandomNumber(),
    element: <About />,
    path: "/about",
  },
  {
    id: getRandomNumber(),
    element: <Pricing />,
    path: "/packages",
  },
  {
    id: getRandomNumber(),
    element: <Contact />,
    path: "/contact-us",
  },
  {
    id: getRandomNumber(),
    element: <Faqs />,
    path: "/faqs",
  },
  {
    id: getRandomNumber(),
    element: <Terms />,
    path: "/term-conditions",
  },
];
export default HomeRoutes;
