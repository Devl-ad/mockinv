const Confirm = () => {
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
                    <div className="form-container mt-2">
                      <div>
                        {/* <!-- Section Title Starts --> */}
                        <div className=" text-center">
                          <h2 className="title-head  ">
                            Verify <span className="primary-color">Email</span>
                          </h2>
                          <h4 className="info-form mb-4">
                            Check your mail box for confirmation mail
                          </h4>
                        </div>
                        {/* <!-- Section Title Ends --> */}

                        <div className="s;p"></div>
                      </div>
                    </div>
                    {/* <!-- Copyright Text Starts --> */}
                    <p className="text-center copyright-text">
                      Copyright © 2021 WORLDCRYPTO LTD All Rights Reserved
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

export default Confirm;
