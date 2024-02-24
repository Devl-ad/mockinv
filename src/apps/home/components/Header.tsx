import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="mobile-menu wow slideInUp" id="mobile-menu">
          <div className="container">
            <Link className="mobile-logo" to="/">
              <img
                id="mobile-logo"
                className="img-responsive"
                src="/images/svg/s.svg"
                alt=""
              />
            </Link>
            <div>
              <ul className="unstyled bitcoin-stats second text-center">
                <li>
                  <h6>179k</h6>
                  <span>24 hour volume</span>
                </li>

                <li>
                  {/* <div
                    className="btcwdgt-price"
                    data-bw-theme="light"
                    data-bw-cur="usd"
                  ></div> */}
                  <h6>2M+</h6>
                  <span>Active Users</span>
                </li>
              </ul>
            </div>
            <div className="sidebar-toggler">
              <button className="btn-nav">
                <span className="icon-bar top"></span>
                <span className="icon-bar middle"></span>
                <span className="icon-bar bottom"></span>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Navigation Menu Starts --> */}
        <nav
          className="site-navigation navigation wow fadInRightBig"
          id="site-navigation"
        >
          <div className="container">
            <div className="site-nav-inner">
              <a className="logo-mobile" href="#">
                <img
                  id="logo-mobile"
                  className="img-responsive"
                  src="static/images/svg/s.svg"
                  alt=""
                />
              </a>

              <div className="  navbar-collapse navbar-responsive-collapse">
                {/* <!-- Main Menu Starts --> */}
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/packages/">Packages</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>

                  <li>
                    <Link to="/register/">Register</Link>
                  </li>
                  <li>
                    <Link to="/login/">Login</Link>
                  </li>
                </ul>
                {/* <!-- Main Menu Ends --> */}
              </div>
            </div>
          </div>
        </nav>
        {/* <!-- Navigator Menu Ends --> */}
      </header>
    </>
  );
};

export default Header;
