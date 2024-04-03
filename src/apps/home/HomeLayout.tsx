import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const HomeLayout = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <Sidebar />
      {/* <!-- End sidebar --> */}

      {/* <!-- Dark overlay --> */}
      <div className="overlay"></div>

      {/* Header */}
      <Header />
      <Outlet />

      {/* <!-- Sidebar --> */}
      <Footer />
      {/* <!-- End sidebar --> */}
    </>
  );
};

export default HomeLayout;
