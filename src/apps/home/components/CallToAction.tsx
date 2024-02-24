import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <>
      <section className="call-action-all">
        <div className="call-action-all-overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xs-12">
                {/* <!-- Call To Action Text Starts --> */}
                <div className="action-text text-center">
                  <h2>Get Started Today With Bitcoin</h2>
                  <p className="lead">
                    Open account for free and start trading Bitcoins!
                  </p>
                </div>
                {/* <!-- Call To Action Text Ends -->
                            <!-- Call To Action Button Starts --> */}
                <p className="action-btn ">
                  <Link className="btn btn-primary" to="/register">
                    Register Now
                  </Link>
                </p>
                {/* <!-- Call To Action Button Ends --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
