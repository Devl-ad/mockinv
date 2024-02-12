import { Outlet } from "react-router-dom";
import "./assets/scss/style.scss";
import "./assets/scss/style.responsible.scss";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";

const UserLayout = () => {
  return (
    <div className="user-wrapper">
      <Header />
      <div className="wrapper-content">
        {/* side bar   */}
        <SideBar />
        {/* side bar ends */}
        <div className="wrapper-inner-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
