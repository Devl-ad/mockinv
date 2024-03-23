import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer-01">
        <br />
        <div id="ytWidget"></div>
        <div className="container">
          <div className="footer-subscribe">
            <div className="row align-items-center"></div>
          </div>
          <div className="footer-top">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-logo">
                  <Link to="index-2.html">
                    <img src="/images/logocaps.png" alt="/" />
                  </Link>
                </div>
                <div>
                  <p className="footer-text">
                    It is the responsibility of the client to ascertain whether
                    they are permitted to use the services of the
                    aspen-investment.net brand based on the legal requirements
                    in their country of residence.
                  </p>
                  <div className="discover-more-btn">
                    <Link to="certificate.jpg" className="pill-button-01 mr-3">
                      Company Certificate
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--img src="assets/img/certify1.jpg" width="30%"--> */}

              <div className="col-md-4">
                <div className="quick-link">
                  <h5>Quick Link</h5>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <Link to="/about/">About Our Firm</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/term-conditions/">Terms of Service</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/faqs/">Knowledge Base</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/contact-us/">Contact Us</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/packages/">Investment Offers</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/login/">Login</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/register/">Register</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 text-right"></div>
              <div className="footer-bottom">
                <div className="container">
                  <div className="row align-items-right">
                    <div className="col-md-6">
                      <p className="mb-0" style={{ color: "#fff" }}>
                        Wealthlines © 2023. All Rights Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
