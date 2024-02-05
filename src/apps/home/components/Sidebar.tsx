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
            <a className="scroll-link" href="/">
              Home
            </a>
          </li>

          <li>
            <a className="scroll-link" href="/about/">
              {" "}
              About us
            </a>
          </li>

          <li>
            <a className="scroll-link" href="/packages/">
              {" "}
              Packages
            </a>
          </li>
          <li>
            <a className="scroll-link" href="/contact-us">
              {" "}
              Contact us
            </a>
          </li>
          <li>
            <a className="scroll-link" href="/login">
              {" "}
              Login
            </a>
          </li>
          <li>
            <a className="scroll-link" href="/register/">
              {" "}
              Register
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
