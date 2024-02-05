import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const HomeLayout = () => {
  return (
    <>
      {/* <!-- SVG Preloader Starts --> */}
      <div id="preloader" className="preloader">
        <div className="sk-bounce">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/* <!-- SVG Preloader Ends --> */}

      <main className="wrapper">
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
      </main>
    </>
  );
};

export default HomeLayout;
