// import { useEffect } from "react";
import useScript from "../../../hooks/useScript";

const Home = () => {
  useScript(
    "https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"
  );

  return (
    <>
      {/* <!-- Slider Starts --> */}
      <div
        id="main-slide"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active bg-parallax item-1">
            <div className="slider-content">
              <div className="container">
                <div className="slider-text text-center ">
                  <h3 className="slide-title">
                    <span>Welcome</span> to <span>Bybit</span>
                    <br />{" "}
                    <small>
                      {" "}
                      Bybit Tradefunds institution, providing you secured and
                      trusted capital investment service.
                    </small>
                  </h3>
                  <p>
                    <a
                      href="/register"
                      className="slider btn btn-primary"
                      style={{ marginRight: "10px" }}
                    >
                      Get started
                    </a>
                    <a href="/login" className="slider btn btn-primary">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Slider Ends --> */}

      <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
        currency="usd"
        background-color="#ffffff"
        locale="en"
        font-color="#000000"
      ></coingecko-coin-price-marquee-widget>

      {/* <!--  About Start  --> */}
      <section id="about" className="byt about-01 py-6">
        <div className="container">
          <div className="about-item">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-img">
                  <img src="/images/12.jpg" alt="/" />
                  <br />

                  <p>
                    Bybit Tradefunds is 100% legal in 321 countries are at
                    liberty to invest or trade Bitcoin with Bybit Tradefunds
                    expert traders. Invest your Bitcoin here is 100% secured
                    with good profit returns.
                  </p>
                  <img src="/images/bg-home-013.jpg" alt="/" />
                  <br />
                  <br />
                  <div
                    style={{
                      width: "100%",
                      height: "0px ",
                      position: "relative",
                      paddingBottom: "55.405%",
                    }}
                  >
                    <iframe
                      src="https://bybit-tradefunds.com/presentation.mp4"
                      width="100%"
                      height="100%"
                      allowFullScreen
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                      }}
                    ></iframe>
                  </div>
                  <br />
                  <p>
                    Available wallet which is working perfectly well, get your
                    own and start investing, Trading with Bybit Tradefund
                    company.
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="title-box">
                      <h2 className="main-title">About our company</h2>
                      <p className="sub-title">
                        Focusing on evolving needs of today's investors
                      </p>
                    </div>
                  </div>
                </div>
                <p className="about-content">
                  <p>
                    {" "}
                    Bybit Tradefunds is an international commercial
                    organization, it was created for the purpose of providing
                    it's members with the safest and most secure capital
                    investment services, with the best possible and achievable
                    returns at the best risk management framework. There are no
                    unrealistic promises presented here, just steady and
                    consistent result.
                  </p>

                  <p>
                    We leverage our years of experience in the digital asset
                    space and our strong industry relationships to co-invest in
                    a portfolio of leading digital assets.
                  </p>

                  <p>
                    Our cross-knowledge strength comes from our different
                    background as entrepreneurs, legal and financial
                    professionals. Vast majority of our partners comes from the
                    field of Initial Coin Offerings (ICOs) with close
                    partnerships with venture capitalists, hedge funds, and big
                    mining facilities across Asia and Europe.
                  </p>
                </p>
                <ul className="about-description-box">
                  <li>
                    <p>
                      Continous Innovation – we keep involving in utilization of
                      new technology.
                    </p>
                  </li>
                  <li>
                    <p>
                      Effective Management – we employ extensive high discipline
                      and experience insight in decision making.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Strategy & Planning – we keep focus on technology and
                      industries that evolves needs of today's investor.
                    </p>
                  </li>
                  <li>
                    <p>
                      Artficial Intelligence – we believe that artificial
                      intelligence (AI) learning system will transform all
                      sector in the economy and we venture in it's early age.
                    </p>
                  </li>
                </ul>
                <div className="discover-more-btn">
                  <a
                    href="indexe47e.html?a=about"
                    className="pill-button-01 mr-3"
                  >
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--  About End  --> */}

      {/* <!--  Why Choose Start  --> */}
      <section className="why-choose-01 pb-6 byt">
        <div className="container">
          {/* <!--  Title  --> */}
          <div className="row"></div>
          <div className="row">
            <div className="col-lg-6">
              <div className="tab-boxes">
                <div className="card tab-card border-0">
                  <div className="card-header tab-card-header px-0">
                    <ul
                      className="nav nav-tabs card-header-tabs m-0"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item active">
                        <a
                          className="nav-link active"
                          id="one-tab"
                          data-toggle="tab"
                          href="indexbc14.html?a=home#one"
                          role="tab"
                          aria-controls="one"
                          aria-selected="true"
                        >
                          <span>Our Skills</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="two-tab"
                          data-toggle="tab"
                          href="indexbc14.html?a=home#two"
                          role="tab"
                          aria-controls="two"
                          aria-selected="false"
                        >
                          <span>Our Mission</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="three-tab"
                          data-toggle="tab"
                          href="indexbc14.html?a=home#three"
                          role="tab"
                          aria-controls="three"
                          aria-selected="false"
                        >
                          <span>Our Advantage</span>
                        </a>
                      </li>
                      <li className="tab-background"></li>
                    </ul>
                  </div>
                  <div className="tab-content h-100 mt-4" id="myTabContent">
                    {/* <!-- Item 01 --> */}
                    <div
                      className="tab-pane fade show active py-3"
                      id="one"
                      role="tabpanel"
                      aria-labelledby="one-tab"
                    >
                      <p className="about-content">
                        For us, responsible investment is a way to get the best
                        possible return for you in short and long term. We’ve
                        always believed that companies that conduct their
                        business in a responsible and sustainable way are more
                        likely to succeed over time, benefiting both you and
                        society. Bad practices don’t just hit the headlines,
                        they hit the bottom line as well.
                      </p>
                      {/* <!-- Skill --> */}
                      <div className="skill-box">
                        <div className="skillbar clearfix" data-percent="98%">
                          <div className="skillbar-title">
                            <span>FinTech Innovation</span>
                          </div>
                          <div
                            className="skillbar-bar fill-skillbar"
                            style={{ width: "98%" }}
                          ></div>
                          <div className="skill-bar-percent">98%</div>
                        </div>
                        <div className="skillbar clearfix " data-percent="86%">
                          <div className="skillbar-title">
                            <span>Network Data Pro</span>
                          </div>
                          <div
                            className="skillbar-bar fill-skillbar"
                            style={{ width: "86%" }}
                          ></div>
                          <div className="skill-bar-percent">86%</div>
                        </div>
                        <div className="skillbar clearfix" data-percent="95%">
                          <div className="skillbar-title">
                            <span>Cryptocurrency Engagement</span>
                          </div>
                          <div
                            className="skillbar-bar fill-skillbar"
                            style={{ width: "95%" }}
                          ></div>
                          <div className="skill-bar-percent">95%</div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Item 02 --> */}
                    <div
                      className="tab-pane fade p-3"
                      id="two"
                      role="tabpanel"
                      aria-labelledby="two-tab"
                    >
                      <p className="about-content">
                        We believe that disruptive innovation deserves unbiased
                        education and user-friendly investment products. In
                        collaboration with our investment manager partners, we
                        work to bring Wall Street standards for research, risk
                        management and transparency to digital asset investing.
                      </p>
                    </div>
                    {/* <!-- Item 03 --> */}
                    <div
                      className="tab-pane property-desc fade p-3 h-100 position-relative"
                      id="three"
                      role="tabpanel"
                      aria-labelledby="three-tab"
                    >
                      <p className="about-content">
                        The future is full of questions. We believe in the power
                        of integration to defy uncertainty, creating opportunity
                        and providing investors with confidence in their
                        investment decisions and outcomes. That’s why we
                        integrate our whole business around you – the outcomes
                        you want, the values you hold, the experience you’ll
                        have when you invest with us.
                        <p>
                          We are always working towards creating more relevant,
                          genuine, valuable outcomes for everyone. And the more
                          people we do this with, the better.
                        </p>
                      </p>
                      <ul className="about-description-box"></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6 boxes">
                  <div className="why-choose-box">
                    <i className="lni lni-thunder"></i>
                    <h5 className="title">Full Insurance</h5>
                    <p className="mb-0">
                      Your deposits are fully insured against any sharp jumps on
                      the exchange, collapses, force majeure. We are also one of
                      the first to find out about all the changes in the world
                      of cryptocurrencies.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 boxes">
                  <div className="why-choose-box">
                    <i className="lni lni-protection"></i>
                    <h5 className="title">Keep Abreast</h5>
                    <p className="mb-0">
                      Integration with European, American and South Asian
                      exchanges allows us to keep abreast of all events and
                      respond in a timely manner and take the right decision in
                      case of sharp jumps on the exchange.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 boxes">
                  <div className="why-choose-box">
                    <i className="lni lni-grow"></i>
                    <h5 className="title">Active Influence</h5>
                    <p className="mb-0">
                      We use our influence through engagement and voting to
                      promote sustainable business practices, gain insight and
                      reduce investment risk. And we’re not afraid to call out
                      bad performance.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 boxes">
                  <div className="why-choose-box">
                    <i className="lni lni-bulb"></i>
                    <h5 className="title">Continous Innovation</h5>
                    <p className="mb-0">
                      By bringing together our knowledge, skill and creativity
                      across major asset classes, disciplines and regions
                      globally we can unearth great investment opportunities for
                      you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--  Why Choose End  --> */}

      {/* <!--  Counted Start  --> */}
      <section className="counted-01 py-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title-box">
                    <h2 className="main-title">Statistics Facts</h2>
                    <h5 className="sub-title">
                      We push accountabilty and transparency.{" "}
                    </h5>
                  </div>
                </div>
              </div>
              <p>
                We work to bring Wallstreet standards for research, risk
                management and transparency to digital asset investing.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="counted">
                <div className="row">
                  {/* <!-- Item-01 --> */}
                  <div className="col-6 col-sm-3 count-item">
                    <div className="count-content">
                      <h3> 9K+</h3>
                      <p className="mb-0">
                        Individaul
                        <br />
                        Benefactors
                        <br />
                      </p>
                    </div>
                  </div>
                  {/* <!-- Item-02 --> */}
                  <div className="col-6 col-sm-3 count-item">
                    <div className="count-content">
                      <h3>1.2K+</h3>
                      <p className="mb-0">
                        Staffs
                        <br />
                        Worldwide
                        <br />
                      </p>
                    </div>
                  </div>
                  {/* <!-- Item-03 --> */}
                  <div className="col-6 col-sm-3 count-item">
                    <div className="count-content">
                      <h3>$77M+</h3>
                      <p className="mb-0">
                        Commited
                        <br />
                        Funds
                      </p>
                    </div>
                  </div>
                  {/* <!-- Item-04 --> */}
                  <div className="col-6 col-sm-3 count-item">
                    <div className="count-content">
                      <h3>80</h3>
                      <p className="mb-0">
                        Supported
                        <br />
                        Countries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--   Counted End   --> */}
      {/* <!--  Services Start  --> */}
      <section id="services" className="services-01 py-6">
        <div className="container">
          {/* <!--  Services Content --> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box">
                <h2 className="main-title">Our Services</h2>
                <p className="sub-title">
                  Join us today and be a benficiary of the tech
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <!--  Item 01  --> */}
            <div className="col-md-6 col-lg-4">
              <div className="services-box">
                <i className="lni lni-protection"></i>
                <h5 className="services-title">MANAGE YOUR PORTFOLIO</h5>
                <p>
                  Buy and sell popular digital cryptocurrencies and keep track
                  of them in one place
                </p>
              </div>
            </div>
            {/* <!--  Item 02  --> */}
            <div className="col-md-6 col-lg-4">
              <div className="services-box">
                <i className="lni lni-consulting"></i>
                <h5 className="services-title">CRYPTO TRADING AND EXCHANGE</h5>
                <p>
                  We involve in the financial market for trading of forex and
                  exchanges of all digital and binary assets. We initiated the
                  crypto currency assets because of the skyrocketing rise in the
                  cryptocurrency value and its effect in the financial market.
                  Cryptocurrency market was valued at $500 billion USD at the
                  end of 2017. It's value rose over 360% from the beginning of
                  2017. Crypto currencies are known for their rapid price
                  movements, providing potentially high returns on investment.{" "}
                </p>
              </div>
            </div>
            {/* <!--  Item 03  --> */}
            <div className="col-md-6 col-lg-4">
              <div className="services-box">
                <i className="lni lni-bullhorn"></i>
                <h5 className="services-title">
                  STOCKS AND SECURITIES EXCHANGE
                </h5>
                <p>
                  We also directs funds into investments in stocks and high
                  securities... Exchanges of valuable financial assets that can
                  be traded both equity securities (stocks) and debt securities
                  (bonds and banknotes) as well as ETFs and Brokerage CDs.
                </p>
              </div>
            </div>
            {/* <!--  Item 04  --> */}
            <div className="col-md-6 col-lg-4">
              <div className="services-box">
                <i className="lni lni-grow"></i>
                <h5 className="services-title">COMMODITIES EXCHANGE</h5>
                <p>
                  We direct investors funds into the extraction of some
                  expensive/valuable raw material commodities like jade stone,
                  Californium, Painite, Crude and so on. These are some very
                  rare and precious gemstones and raw substances in the world.
                </p>
              </div>
            </div>
            {/* <!--  Item 05  --> */}
            <div className="col-md-6 col-lg-4">
              <div className="services-box">
                <i className="lni lni-money-protection"></i>
                <h5 className="services-title">PROTECTED BY INSURANCE</h5>
                <p>
                  Cryptocurrency stored on our servers is covered by our
                  insurance policy.
                </p>
              </div>
            </div>
            {/* <!--  Item 05  --> */}
            <div className="col-md-6 col-lg-4">
              <div className="services-box">
                <i className="lni lni-money-protection"></i>
                <h5 className="services-title">REAL ESTATE MANAGEMENT</h5>
                <p>
                  Bybit Tradefunds offers investment opportunities in most major
                  cities for multi-family, office, retail and hospitality
                  properties. The platform gives investors the opportunity to
                  invest as little as $50,000 in a project. The company partners
                  with experienced developers that have a track record of
                  success, invests in properties in locations with high growth
                  potential, offers investments in major markets with solid
                  fundamentals to avoid potential bubbles and invests in
                  projects that improves neighborhoods, eventually boosting the
                  properties in overall value and terms.
                </p>
              </div>
            </div>
            {/* <!--  Item 06  --> */}
            <div className="col-md-6 col-lg-4">
              <div className="services-box">
                <i className="lni lni-handshake"></i>
                <h5 className="services-title">SECURE STORAGE</h5>
                <p>
                  We store virtually all of the digital assets in secure offline
                  storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--   Services End   --> */}

      {/* 
      <!--  Banner  Start  --> */}
      <section className="banner-01 py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="banner-content">
                <i className="lni lni-envelope"></i>
                <div className="banner-text">
                  <h5>Interested in working with our Team?</h5>
                  <p>
                    Are you interested in pursuing a career in finance banking
                    and investments, then we may just have a place for you
                  </p>
                </div>
                <div className="align-items-center d-flex">
                  <a href="index15a0.html?a=support" className="pill-button-02">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--  Banner  End  --> */}

      {/* <!--  About Start  --> */}
      <section id="about" className="about-wrapper-01">
        <div className="container">
          <div className="about-item py-6">
            <div className="row">
              <div className="col-lg-6">
                <div className="title-box">
                  <h2 className="main-title">Partnership Career</h2>
                  <p className="sub-title">
                    Introducing Bybit Tradefunds Rejuvenated Affiliate Program
                  </p>
                </div>
                <p className="about-content">
                  We thought to provide a unique way for you to earn in this
                  lockdown. We are giving a 10% commission for each deposit
                  transaction done through your referral link.
                  <br />
                  <br />
                  It’s time to monetize your Social Media traffic and earn
                  massively by promoting our platform in your network.
                  <br />
                  <br />
                  Affiliate marketing is fast becoming popular because it is one
                  of the easiest ways to start working from home. There is
                  almost no initial investment required. All you need to get
                  started is a computer and an Internet connection.
                </p>

                <br />
                <div className="col-lg-66">
                  <div className="title-box">
                    <p className="sub-title">
                      Join Our Affiliate Program in a Few Steps
                    </p>
                  </div>
                  <ul className="about-description-box">
                    <li>
                      <p>
                        Create An Account – Go to our registration page and open
                        an investment account with us. We are using the world
                        leading softwares to monitor every client and payout
                        with full transparency, relaibility and security.
                      </p>
                    </li>
                    <li>
                      <p>
                        Choose A Plan – Choose the most attractive plan from the
                        list of options. Place an affiliate link on your
                        website, social media page, or another place. You can
                        also refer people offline by giving them your username
                        to use as upline during registration note that you can
                        also use affiliate program to earn without having an
                        active deposit.
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        Start Earning – We will pay cash or crypto for every
                        deposit made through your referral link. Share our
                        promotional pictures, banners and web page links in
                        order to attract users to Bybit Tradefunds and maximise
                        your affiliate earning.
                      </p>
                    </li>
                    <div className="discover-more-btn">
                      <a
                        href="indexcca3.html?a=signup"
                        className="pill-button-01 mr-3"
                      >
                        Get Started
                      </a>
                      <br />
                    </div>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="title-box">
                  <h2 className="main-title">Loan opportunity </h2>
                  <p className="sub-title">Covid Pandemic Relief Loan</p>
                </div>
                <p className="about-content">
                  We understand how difficult it is to source for enough funding
                  at this particular period due to the impact of the global
                  economic challenge. <br />
                  <br />
                  In a bid to resolve this, we have structured a loan model that
                  allows our investors to access loans which can be invested
                  into our investment offers and withdrawn with profits at
                  maturation.
                  <br />
                  <br />
                  <strong>Note:</strong> Qualifications for loan offer include
                  having a deposit in the PREMIUM package and KYC verification.
                  Principal loan amount re-payment is mandatory with an interest
                  rate of 2% per month.
                </p>
                <div className="discover-more-btn">
                  <a
                    href="index15a0.html?a=support"
                    className="pill-button-01 mr-3"
                  >
                    Apply Now
                  </a>
                </div>

                <div className="title-box">
                  <h2 className="main-title">Team Leader Commission</h2>
                </div>
                <p className="about-content">
                  <p>
                    You can also earn special commissions on attaining a team
                    leader status within our partnership offer. To learn the
                    requirements of our team leader offer kindly contact us by
                    emailing admin@aspen-investment.ltd or simply reach us on
                    our live chat portal. Your email should contain the
                    following Information: country of residence, full name,
                    username, email and prior promotional experience. Additional
                    contact information such as links to social media (Facebook,
                    Instagram Twitter, etc.) will be appreciated. We’ll assess
                    your email within 24 business hours, and you’ll be informed
                    of your status via email.
                    <br />
                    <br />
                  </p>
                  <div className="discover-more-btn">
                    <a
                      href="index15a0.html?a=support"
                      className="pill-button-01 mr-3"
                    >
                      Support Form
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--  About End  --> */}
    </>
  );
};

export default Home;
