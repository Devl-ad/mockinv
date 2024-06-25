import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar  ">
        <div className="dismiss">
          <button className="animated">
            <span className="icon-bar top"></span>
            <span className="icon-bar middle"></span>
            <span className="icon-bar bottom"></span>
          </button>
        </div>

        <ul className="list-unstyled menu-elements">
          <li className=" ">
            <Link className="scroll-link" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="scroll-link" to="/about/">
              {" "}
              About us
            </Link>
          </li>

          <li>
            <Link className="scroll-link" to="/packages/">
              {" "}
              Packages
            </Link>
          </li>
          <li>
            <Link className="scroll-link" to="/contact-us">
              {" "}
              Contact us
            </Link>
          </li>
          <li>
            <Link className="scroll-link" to="/">
              {" "}
              Login
            </Link>
          </li>
          <li>
            <Link className="scroll-link" to="/register/">
              {" "}
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
