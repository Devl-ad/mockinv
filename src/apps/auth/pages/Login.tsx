import { createContext, useState } from "react";
import Steps from "../components/login/Step";
import { ISignInContext, LoginResponse } from "../../../types";

export const SignInContext = createContext<ISignInContext | undefined>(
  undefined
);

const Login = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [laoding, setloading] = useState(false);
  const [storeDate, setstoreDate] = useState<LoginResponse>();
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
                    <a className="visible-xs text-center" href="#">
                      <img
                        id="logo"
                        style={{ width: "30%" }}
                        className="img-responsive mobile-logo"
                        src="/images/svg/s.svg"
                        alt="logo"
                      />
                    </a>
                    {/* <!-- Logo Ends --> */}
                    <SignInContext.Provider
                      value={{
                        currentPage,
                        setCurrentPage,
                        setstoreDate,
                        storeDate,
                        laoding,
                        setloading,
                      }}
                    >
                      <Steps />
                    </SignInContext.Provider>
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
