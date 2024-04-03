const SetPassword = () => {
  return (
    <>
      <section className="auth-section">
        <div className="container">
          <div className="auth-content login pt-5">
            <div className="row">
              <div className="col-xl-12">
                <div className="row">
                  <div className=" col-xl-12 justify-content-center ">
                    {/* <!-- Logo Starts --> */}
                    <a className="visible-xs text-center" href="index.html">
                      <img
                        id="logo"
                        style={{ width: "30%" }}
                        className="img-responsive mobile-logo"
                        src="/images/svg/s.svg"
                        alt="logo"
                      />
                    </a>
                    {/* <!-- Logo Ends --> */}
                    <div className="form-container mt-4">
                      <div>
                        {/* <!-- Section Title Starts --> */}
                        <div className=" text-center">
                          <h2 className="title-head hidden-xis">
                            Reset{" "}
                            <span className="primary-color"> Password</span>
                          </h2>
                          <p className="info-form">
                            Input your email to recieve a confirmation email
                          </p>
                        </div>
                        {/* <!-- Section Title Ends --> */}

                        <div className="s;p"></div>

                        {/* <!-- Form Starts --> */}

                        {/* <!-- Form Ends --> */}
                      </div>
                    </div>
                    {/* <!-- Copyright Text Starts --> */}
                    <p className="text-center copyright-text">
                      Copyright © WEALTHLINES LTD All Rights Reserved
                    </p>
                    {/* <!-- Copyright Text Ends --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SetPassword;
