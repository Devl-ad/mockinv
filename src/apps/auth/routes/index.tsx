import { RouteInterface } from "../../../types";
import { getRandomNumber } from "../../../utils/";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import SetPassword from "../pages/SetPassword";

const AuthRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: <Login />,
    path: "/login",
  },
  {
    id: getRandomNumber(),
    element: <Register />,
    path: "/register",
  },
  {
    id: getRandomNumber(),
    element: <ResetPassword />,
    path: "/password-reset",
  },
  {
    id: getRandomNumber(),
    element: <SetPassword />,
    path: "/set-password",
  },
];
export default AuthRoutes;
