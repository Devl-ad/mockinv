import Breadcrum from "../components/Breadcrum";
import CallToAction from "../components/CallToAction";

const Contact = () => {
  return (
    <>
      {/* Breadcrum */}

      <Breadcrum>
        <>
          GET IN <span className="primary-color">TOUCH</span>
        </>
      </Breadcrum>
      {/* Breadcrum */}
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8 contact-form">
              <h3 className="col-xs-12">feel free to drop us a message</h3>
              <p className="col-xs-12">
                Need to speak to us? Do you have any queries or suggestions?
                Please contact us about all enquiries including membership and
                volunteer work using the form below.
              </p>

              <form className="form-contact" method="post">
                <div className="form-row">
                  <div className="form-group col-xl-6">
                    <input
                      className="form-control"
                      name="firstname"
                      id="firstname"
                      placeholder="FIRST NAME"
                      type="text"
                      required={true}
                    />
                  </div>

                  <div className="form-group col-xl-6">
                    <input
                      className="form-control"
                      name="lastname"
                      id="lastname"
                      placeholder="LAST NAME"
                      type="text"
                      required={true}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-xl-6">
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="EMAIL"
                      type="email"
                      required={true}
                    />
                  </div>

                  <div className="form-group col-xl-6">
                    <input
                      className="form-control"
                      name="text"
                      id="subject"
                      placeholder="SUBJECT"
                      type="text"
                      required={true}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12 col-xs-12">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="MESSAGE"
                      required={true}
                    ></textarea>
                  </div>
                </div>

                <div className="form-group col-xs-12 col-sm-6">
                  <button className="btn btn-primary btn-contact" type="button">
                    Use the live support
                  </button>
                </div>

                <div className="col-xs-12 text-center output_message_holder d-none">
                  <p className="output_message"></p>
                </div>
              </form>
            </div>

            <div className="col-xs-12 col-md-4">
              <div className="widget">
                <div className="contact-page-info">
                  <div className="contact-info-box">
                    <i className="fa fa-home big-icon primary-color"></i>
                    <div className="contact-info-box-content">
                      <h4>Address</h4>
                      <p>
                        123 Disney Street Slim Av. Brooklyn Bridge, NY, New York
                      </p>
                    </div>
                  </div>

                  {/* <!--<div class="contact-info-box">
                                    <i class="fa fa-phone big-icon primary-color"></i>
                                    <div class="contact-info-box-content">
                                        <h4>Phone Numbers</h4>
                                        <p>+88 0123 4567 890<br>+88 0231 3421 453</p>
                                    </div>
                                </div>--> */}

                  <div className="contact-info-box">
                    <i className="fa fa-envelope big-icon primary-color"></i>
                    <div className="contact-info-box-content">
                      <h4>Email Addresses</h4>

                      <p>
                        WORLDCRYPTO
                        <br />
                        CURRENCIES1@GMAIL.COM{" "}
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-box">
                    <i className="fa fa-share-alt big-icon primary-color"></i>
                    <div className="contact-info-box-content">
                      <h4>Social Profiles</h4>
                      <div className="social-contact">
                        <ul>
                          <li className="facebook">
                            <a href="#" target="_blank">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="twitter">
                            <a href="#" target="_blank">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li className="google-plus">
                            <a href="#" target="_blank">
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Social Media Icons Starts --> */}
                </div>
              </div>
            </div>
            {/* <!-- Contact Widget Ends --> */}
          </div>
        </div>
      </section>
      {/* <!-- Call To Action Section Starts --> */}
      <CallToAction />
    </>
  );
};

export default Contact;
