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
          <li className="active">
            <a className="scroll-link" href="index.html">
              Home
            </a>
          </li>

          <li>
            <a className="scroll-link" href="about/index.html">
              {" "}
              About us
            </a>
          </li>

          <li>
            <a className="scroll-link" href="packages/index.html">
              {" "}
              Packages
            </a>
          </li>
          <li>
            <a className="scroll-link" href="contact/index.html">
              {" "}
              Contact us
            </a>
          </li>
          <li>
            <a className="scroll-link" href="login/index.html">
              {" "}
              Login
            </a>
          </li>
          <li>
            <a className="scroll-link" href="register/index.html">
              {" "}
              Register
            </a>
          </li>
        </ul>
        {/* 
            <!--div class="to-top"> */}
        <a
          id="back-to-top"
          className="btn btn-primary btn-customized-3"
          href="#"
          role="button"
        >
          <i className="fa fa-arrow-up"></i> Top
        </a>
        {/* 
            <!--div class="to-top"> */}
      </nav>
    </>
  );
};

export default Sidebar;
