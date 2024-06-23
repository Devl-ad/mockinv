import { useFormik } from "formik";
import { toast } from "react-toastify";
import { SignInContext } from "../../pages/Login";
import { useContext } from "react";
import { twoFaSchema } from "../../schema";
import CustomButton from "../../../../components/CustomButton";
import IconInput from "../../../../components/IconInput";
import { BASE_URL, axiosPublic } from "../../../../utils";

const StepTwo = () => {
  const { laoding, setloading, storeDate } = useContext(SignInContext)!;

  const submitForm = async (value: typeof values) => {
    setloading(true);
    try {
      console.log({
        ...value,
        userid: storeDate?.userid,
      });
      const { data } = await axiosPublic.post("/verify-otp/", {
        ...value,
        userid: storeDate?.userid,
      });

      console.log(data);
      if (data.error) {
        toast.error(`${data.error}`);
      } else {
        toast.info("Successfully Loggin");
        window.location.href = `${BASE_URL}/loginuser/?token=${storeDate?.token}`;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        code: "",
      },
      validationSchema: twoFaSchema(),
      onSubmit(values) {
        submitForm(values);
      },
    });

  return (
    <>
      <div className="form-container mt-2">
        <div>
          <div className=" text-center">
            <h2 className="title-head  ">
              Verify <span className="primary-color">2FA</span>
            </h2>
            <p className="info-form">Two factor verification</p>
          </div>
          <div className="s;p"></div>
          <form className="login-form" onSubmit={handleSubmit}>
            <IconInput
              name="code"
              required={true}
              icon="fa-user"
              placeholder="Code"
              type="number"
              label={false}
              children={null}
              className={""}
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.code}
              touched={touched.code}
              value={values.code}
            />

            <div className="form-group">
              <CustomButton
                color="primary"
                text="Submit"
                loading={laoding}
                type="submit"
              />
              <p className="text-center"></p>
              <p className="text-center">
                Don't have an account ? <a href="/register">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
