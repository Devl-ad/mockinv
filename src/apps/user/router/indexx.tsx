import { RouteInterface } from "../../../types";
import { getRandomNumber } from "../../../utils/";
import Dashboard from "../pages/Dashboard";

const UserRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: <Dashboard />,
    path: "/dashboard",
  },
];
export default UserRoutes;
