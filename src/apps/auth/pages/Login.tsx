import IconInput from "../../../components/IconInput";
import { LoginSchema } from "../schema";
import { useFormik } from "formik";
import { BASE_URL, axiosPublic } from "../../../utils";
import CustomButton from "../../../components/CustomButton";
import { useState } from "react";
import { LoginResponse } from "../../../types";
import { toast } from "react-toastify";

const Login = () => {
  const [loading, setloading] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",

        password: "",
      },
      validationSchema: LoginSchema(),
      onSubmit(values) {
        submitForm(values);
      },
    });

  const submitForm = async (value: typeof values) => {
    try {
      const { data } = await axiosPublic.post<LoginResponse>("/login/", value);
      console.log(data.token);
      if (data.error) {
        toast.error("Incorrect Email or password try again");
      } else {
        toast.info("Successfully Loggin");
        window.location.href = `${BASE_URL}/loginuser/?token=${data.token}`;
      }

      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

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
                        <form className="login-form" onSubmit={handleSubmit}>
                          <IconInput
                            name="email"
                            required={true}
                            icon="fa-envelope"
                            placeholder="Email"
                            type="email"
                            label={false}
                            children={null}
                            className={""}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            error={errors.email}
                            touched={touched.email}
                            value={values.email}
                          />

                          <IconInput
                            name="password"
                            required={true}
                            icon="fa-lock"
                            placeholder="Password"
                            type="password"
                            label={false}
                            className={""}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            error={errors.password}
                            touched={touched.password}
                            value={values.password}
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
                            <CustomButton
                              color="primary"
                              text="Submit"
                              loading={loading}
                              type="submit"
                            />

                            <p className="text-center">
                              {/* <a href="/password-reset/">Forgot Password ?</a> */}
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
                      Copyright © Wealthlines LTD All Rights Reserved
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
