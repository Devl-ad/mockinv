import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="userHeader">
        <nav>
          <div className="logo" data-aos="fade-right">
            <img src="/images/logott.png" alt="logo" />
          </div>
          <div className="menu">
            <ul>
              <li data-aos="fade-left" data-aos-delay="100">
                <a href="mailto:support@onlineseacoastacct.net">
                  <i className="fa-solid fa-envelope" data-ballon></i>
                </a>
              </li>
              <li
                className="hiddenMobile"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <Link to="/reset-pin">
                  <i className="fa-solid fa-cog" data-ballon></i>
                </Link>
              </li>
              <li
                className="hiddenWide"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <a href="#" id="toogleSidebar">
                  <i className="fa-solid fa-bars"></i>
                </a>
              </li>
              <li
                className="hiddenMobile"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="dropdowny">
                  <a href="#" className="dropdown-k">
                    <img
                      src="/images/avatar.png"
                      alt="Avatar"
                      className="avatar-lg rounded-circle"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
