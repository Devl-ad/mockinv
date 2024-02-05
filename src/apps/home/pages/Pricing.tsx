import Breadcrum from "../components/Breadcrum";
import CallToAction from "../components/CallToAction";

function Pricing() {
  return (
    <>
      {/* Breadcrum */}
      <Breadcrum>
        <>
          Investment <span className="primary-color">Plan</span>{" "}
        </>
      </Breadcrum>
      {/* Breadcrum */}

      {/* <!-- Pricing --> */}
      <section className="overview-block-ptb">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <center>
                <p>
                  Which account will best suit your trading needs and style?
                  Choose from the following account types and step into the
                  world of trading.
                </p>
              </center>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="iq-pricing">
                <div className="pricing-header">
                  <h3 className="title">Classic</h3>
                  <span className="price-value">$300</span>
                </div>
                <ul className="pricing-content">
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-checkmark-round"
                    ></i>
                    Earnings : 10%/7days{" "}
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-checkmark-round"
                    ></i>
                    Negative Balance Protection
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-close-round"
                    ></i>
                    Scalping
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-close-round"
                    ></i>
                    Daily Signals
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-close-round"
                    ></i>
                    Financial Plan
                  </li>
                </ul>
                <a className="btn btn-primary" href="/register">
                  Signup
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="iq-pricing">
                <div className="pricing-header">
                  <h3 className="title">Standard</h3>
                  <span className="price-value">$1,000</span>
                </div>
                <ul className="pricing-content">
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-checkmark-round"
                    ></i>
                    Earnings : 10%/7days{" "}
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-checkmark-round"
                    ></i>
                    Negative Balance Protection
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-checkmark-round"
                    ></i>
                    Scalping
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-close-round"
                    ></i>
                    Daily Signals
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-close-round"
                    ></i>
                    Financial Plan
                  </li>
                </ul>
                <a className="btn btn-primary" href="/register">
                  Signup
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="iq-pricing">
                <div className="pricing-header">
                  <h3 className="title">Premium</h3>
                  <span className="price-value">$5,000</span>
                </div>
                <ul className="pricing-content">
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-checkmark-round"
                    ></i>
                    Earnings : 10%/7days{" "}
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-checkmark-round"
                    ></i>
                    Negative Balance Protection
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-checkmark-round"
                    ></i>
                    Scalping
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-checkmark-round"
                    ></i>
                    Daily Signals
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-close-round"
                    ></i>
                    Financial Plan
                  </li>
                </ul>
                <a className="btn btn-primary" href="/register">
                  Signup
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="iq-pricing">
                <div className="pricing-header">
                  <h3 className="title">VIP</h3>
                  <span className="price-value">$10,000</span>
                </div>
                <ul className="pricing-content">
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-checkmark-round"
                    ></i>
                    Earnings : 10%/7days{" "}
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-checkmark-round"
                    ></i>
                    Negative Balance Protection
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-checkmark-round"
                    ></i>
                    Scalping
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-checkmark-round"
                    ></i>
                    Daily Signals
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="iq-mr-10 ion-checkmark-round"
                    ></i>
                    Financial Plan
                  </li>
                </ul>
                <a className="btn btn-primary" href="/register">
                  Signup
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Pricing --> */}

      {/* <!-- Call To Action Section Starts --> */}
      <CallToAction />
    </>
  );
}

export default Pricing;
