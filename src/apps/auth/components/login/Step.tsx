import { useContext } from "react";
import { SignInContext } from "../../pages/Login";
import StepOne from "./Stepone";
import StepTwo from "./StepTwo";

const Steps = () => {
  const { currentPage } = useContext(SignInContext)!;
  const page = [<StepOne />, <StepTwo />];
  return page[currentPage];
};

export default Steps;
