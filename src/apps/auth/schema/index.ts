import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const RegisterSchema = (
  ExistingEmail: string[],
  ExistingUsername: string[]
) =>
  yup.object().shape({
    fullname: yup
      .string()

      .required("Fullname is required"),
    username: yup
      .string()
      .matches(/^\S*$/, "Username cannot contain spaces")
      .min(4)
      .notOneOf(ExistingUsername, "A user with this Username already exist")
      .required("Username is required"),

    email: yup
      .string()
      .email("Please enter a valid email")
      .notOneOf(ExistingEmail, "A user with this Email already exist")

      .required("Email is required"),

    phone: yup
      .string()

      .required("Phone is required"),

    password: yup
      .string()
      .min(5)
      .max(12)
      .matches(passwordRules, "Please create a stronger password")
      .required("Password Required"),

    // confirm_password: yup
    //   .string()
    //   .oneOf([yup.ref("password"), undefined], "Passwords must match")
    //   .required("Confirm password is required"),
  });

export const LoginSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")

      .required("Email is required"),

    password: yup
      .string()
      .min(5)
      .max(12)

      .required("Password Required"),
  });
