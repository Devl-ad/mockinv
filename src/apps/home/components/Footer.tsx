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
                  <a href="index-2.html">
                    <img src="/images/logocaps.png" alt="/" />
                  </a>
                </div>
                <div>
                  <p className="footer-text">
                    It is the responsibility of the client to ascertain whether
                    they are permitted to use the services of the
                    aspen-investment.net brand based on the legal requirements
                    in their country of residence.
                  </p>
                  <div className="discover-more-btn">
                    <a href="certificate.jpg" className="pill-button-01 mr-3">
                      Company Certificate
                    </a>
                  </div>
                </div>
              </div>
              {/* <!--img src="assets/img/certify1.jpg" width="30%"--> */}

              <div className="col-md-4">
                <div className="quick-link">
                  <h5>Quick Link</h5>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="/about/">About Our Firm</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/term-conditions/">Terms of Service</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/faqs/">Knowledge Base</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/contact-us/">Contact Us</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/packages/">Investment Offers</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/login/">Login</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/register/">Register</a>
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
                        Bybit Tradefunds © 2023. All Rights Reserved.
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
