import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div id="sideBar">
        <ul>
          <li className="avatar">
            <div className="media">
              <img
                src="/images/avatar.png"
                alt="Avatar"
                className="avatar-lg rounded-circle mr-3"
              />
              <div className="media-body text-truncate">
                <h4>Sammy jim</h4>
                <p className="text-muted">huiyt</p>
              </div>
            </div>
          </li>
          <li className="sub-header" data-aos="fade-in">
            <span>My account</span>
          </li>
          <li>
            <NavLink to="/dashboard">
              <i className="fa-solid fa-wallet"></i>
              <span>Dashbaord</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/account-details">
              <i className="fa-solid fa-user"></i>
              <span>Deposit</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions-log">
              <i className="fa-solid fa-file"></i>
              <span>Withdrawal</span>
            </NavLink>
          </li>
          <li className="sub-header">
            <span>ACCOUNT TRANSFERS</span>
          </li>
          <li>
            <NavLink to="/international-transfer">
              <i className="fa-solid fa-globe"></i>
              <span> Transactions</span>
            </NavLink>
          </li>{" "}
          <li className="sub-header">
            <span>SELF SERVICE</span>
          </li>
          <li>
            <NavLink to="/forgot-password">
              <i className="fa-solid fa-lock"></i>
              <span>change password</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/reset-pin">
              <i className="fa-solid fa-key"></i>
              <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
