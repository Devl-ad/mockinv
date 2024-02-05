interface Props {
  children: JSX.Element;
}

const Breadcrum = ({ children }: Props) => {
  return (
    <>
      <section className="banner-area">
        <div className="banner-overlay">
          <div className="banner-text text-center">
            <div className="container">
              {/* <!-- Section Title Starts --> */}
              <div className="row  justify-content-center">
                <div className=" justify-content-center text-center">
                  {/* <!-- Title Starts --> */}
                  <h2 className="title-head">{children}</h2>
                  {/* <!-- Title Ends --> */}
                  <hr />
                </div>
              </div>
              {/* <!-- Section Title Ends --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrum;
