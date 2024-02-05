const Header = () => {
  return (
    <>
      <header className="header">
        <div className="mobile-menu wow slideInUp" id="mobile-menu">
          <div className="container">
            <a className="mobile-logo" href="#">
              <img
                id="mobile-logo"
                className="img-responsive"
                src="/images/svg/s.svg"
                alt=""
              />
            </a>
            <div>
              <ul className="unstyled bitcoin-stats second text-center">
                <li>
                  <h6>12.820 BTC</h6>
                  <span>24 hour volume</span>
                </li>

                <li>
                  <div
                    className="btcwdgt-price"
                    data-bw-theme="light"
                    data-bw-cur="usd"
                  ></div>
                  <span>Live Bitcoin price</span>
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
              {/* <!-- Logo For ONLY Mobile display Starts --> */}
              <a className="logo-mobile" href="#">
                <img
                  id="logo-mobile"
                  className="img-responsive"
                  src="static/images/svg/s.svg"
                  alt=""
                />
              </a>
              {/* <!-- Logo For ONLY Mobile display Ends --> */}
              {/* <!-- Toggle Icon for Mobile Starts --> */}
              {/* <!--button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target="navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button--> */}
              {/* <!-- Toggle Icon for Mobile Ends --> */}
              <div className="  navbar-collapse navbar-responsive-collapse">
                {/* <!-- Main Menu Starts --> */}
                <ul className="nav navbar-nav">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/packages/">Packages</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact Us</a>
                  </li>

                  <li>
                    <a href="/register/">Register</a>
                  </li>
                  <li>
                    <a href="/login/">Login</a>
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
