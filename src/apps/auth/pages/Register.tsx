import { useFormik } from "formik";
import IconInput from "../../../components/IconInput";
import { RegisterSchema } from "../schema";
import { axiosPublic } from "../../../utils";
import { useEffect, useState } from "react";
import { ExistingDetailsReqInterface } from "../../../types";

const Register = () => {
  const [emails, setEmails] = useState<string[]>([]);
  const [username, setUsername] = useState<string[]>([]);
  useEffect(() => {
    axiosPublic
      .get<ExistingDetailsReqInterface>("/register/")
      .then(({ data }) => {
        console.log({ data });
        setEmails(data.emails);
        setUsername(data.usernames);
      })
      .catch((e) => {
        console.log(e);
      });

    // return () => {

    // }
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        fullname: "",
        username: "",
        email: "",
        phone: "",
        password: "",
      },
      validationSchema: RegisterSchema(emails, username),
      onSubmit(values) {
        submitForm(values);
      },
    });

  const submitForm = async (value: typeof values) => {
    console.log(emails, username);
    try {
      const { data } = await axiosPublic.post("/register/", value);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="auth-section register" style={{ height: "100%" }}>
        <div className="container">
          <div className="auth-content register pt-5">
            <div className="row">
              <div className="col-xl-12">
                <div className="row">
                  <div className=" col-xl-12 justify-content-center text-center">
                    {/* <!-- Logo Starts --> */}
                    <a className="visible-xs" href="/">
                      <img
                        id="logo"
                        style={{ width: "30%" }}
                        className="img-responsive mobile-logo"
                        src="/images/svg/s.svg"
                        alt="logo"
                      />
                    </a>
                    {/* <!-- Logo Ends --> */}
                    <div className="form-container">
                      <div>
                        {/* <!-- Section Title Starts --> */}
                        <div className=" text-center">
                          <h2 className="title-head hidden-xsu">
                            get <span className="primary-color">started</span>
                          </h2>
                          <p className="info-form">
                            Open account for free and start Earning now!
                          </p>
                        </div>
                        {/* <!-- Section Title Ends -->
                                            <!-- Form Starts --> */}
                        <form className="register-form" onSubmit={handleSubmit}>
                          <IconInput
                            name="fullname"
                            required={true}
                            icon="fa-user"
                            placeholder="FULLNAME"
                            type="text"
                            label={false}
                            children={null}
                            className={""}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            error={errors.fullname}
                            touched={touched.fullname}
                            value={values.fullname}
                          />

                          <IconInput
                            name="username"
                            required={true}
                            icon="fa-edit"
                            placeholder="Username"
                            type="text"
                            label={false}
                            children={null}
                            className={""}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            error={errors.username}
                            touched={touched.username}
                            value={values.username}
                          />

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
                            name="phone"
                            required={true}
                            icon="fa-phone"
                            placeholder="Phone"
                            type="tel"
                            label={false}
                            children={null}
                            className={""}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            error={errors.phone}
                            touched={touched.phone}
                            value={values.phone}
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
                            <button
                              className="btn btn-primary submit_btn"
                              type="submit"
                            >
                              create account
                            </button>
                            <p className="text-center">
                              already have an account ?{" "}
                              <a href="/login">Login</a>
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

export default Register;
