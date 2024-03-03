import { Outlet } from "react-router-dom";
import ToastDialog from "../../components/ToastDailog";

const AuthLayout = () => {
  return (
    <>
      <Outlet />
      <ToastDialog />
    </>
  );
};

export default AuthLayout;
