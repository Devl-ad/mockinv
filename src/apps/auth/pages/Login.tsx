import IconInput from "../../../components/IconInput";

const Login = () => {
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
                            Member <span className="primary-color">Login</span>
                          </h2>
                          <p className="info-form">
                            Welcome back login into your account to continue
                          </p>
                        </div>
                        {/* <!-- Section Title Ends --> */}

                        <div className="s;p"></div>

                        {/* <!-- Form Starts --> */}
                        <form
                          className="login-form"
                          method="POST"
                          action="/login/"
                        >
                          <IconInput
                            name="email"
                            required={true}
                            icon="fa-envelope"
                            placeholder="Email"
                            type="email"
                            label={false}
                            children={null}
                            className={""}
                          />

                          <IconInput
                            name="password"
                            required={true}
                            icon="fa-lock"
                            placeholder="Password"
                            type="password"
                            label={false}
                            className={""}
                          >
                            <div className="input-group-addon">
                              <span
                                className="input-group-text"
                                id="basic-addon1"
                              >
                                <i className="fa fa-eye-slash password-toggle"></i>
                              </span>
                            </div>
                          </IconInput>

                          {/* <!-- Submit Form Button Starts --> */}
                          <div className="form-group">
                            <button
                              className="btn btn-primary submit_btn"
                              type="submit"
                            >
                              Login
                            </button>
                            <p className="text-center">
                              <a href="/password-reset/">Forgot Password ?</a>
                            </p>
                            <p className="text-center">
                              Don't have an account ?{" "}
                              <a href="/register">Register</a>
                            </p>
                          </div>
                          {/* <!-- Submit Form Button Ends --> */}
                        </form>
                        {/* <!-- Form Ends --> */}
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

export default Login;
