import IconInput from "../../../../components/IconInput";
import { LoginSchema } from "../../schema";
import { useFormik } from "formik";
import { BASE_URL, axiosPublic } from "../../../../utils";
import CustomButton from "../../../../components/CustomButton";
import { useContext } from "react";
import { LoginResponse } from "../../../../types";
import { toast } from "react-toastify";
import { SignInContext } from "../../pages/Login";

const Login = () => {
  const { laoding, setloading, setstoreDate, setCurrentPage } =
    useContext(SignInContext)!;

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
    setloading(true);
    try {
      const { data } = await axiosPublic.post<LoginResponse>("/login/", value);
      // console.log(data);

      if (data.error) {
        setloading(false);
        toast.error("Incorrect Email or password try again");
      } else {
        if (data.otp_enabled === false) {
          toast.info("Successfully Loggin");
          window.location.href = `${BASE_URL}/loginuser/?token=${data.token}`;
        } else {
          toast.warning("Verify Two factor authentication");
          setloading(false);
          setstoreDate(data);
          setCurrentPage((prev) => prev + 1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa fa-eye-slash password-toggle"></i>
                </span>
              </div>
            </IconInput>

            {/* <!-- Submit Form Button Starts --> */}
            <div className="form-group">
              <CustomButton
                color="primary"
                text="Submit"
                loading={laoding}
                type="submit"
              />

              <p className="text-center">
                {/* <a href="/password-reset/">Forgot Password ?</a> */}
              </p>
              <p className="text-center">
                Don't have an account ? <a href="/register">Register</a>
              </p>
            </div>
            {/* <!-- Submit Form Button Ends --> */}
          </form>
          {/* <!-- Form Ends --> */}
        </div>
      </div>
    </>
  );
};

export default Login;
