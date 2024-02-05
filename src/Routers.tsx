import { Route, Routes } from "react-router-dom";
import HomeLayout from "./apps/home/HomeLayout";
import HomeRoutes from "./apps/home/routes";
 
function Routers() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          {HomeRoutes.map((elm) => (
            <Route element={elm.element} path={elm.path} key={elm.id} />
          ))}
        </Route>
        
      </Routes>
    </>
  );
}

export default Routers;