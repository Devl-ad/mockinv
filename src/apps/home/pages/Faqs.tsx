import CallToAction from "../components/CallToAction";

const Faqs = () => {
  return (
    <>
      {/* <!--  Faq Start  --> */}
      <section className="faq pt-6  pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box">
                <h2 className="main-title">Frequently asked question </h2>
                <p className="sub-title">
                  You can learn more by asked questions{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              {/* <!--Accordion wrapper--> */}
              <div
                className="accordion about-content"
                id="accordionColumn1"
                role="tablist"
                aria-multiselectable="true"
              >
                {/* <!-- Item 01 --> */}
                <div className="card">
                  <div className="card-header" role="tab" id="headingOne">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionColumn1"
                      href="?a=faq#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h3 className="mb-0">Who is Wealthlines?</h3>
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                    data-parent="#accordionColumn1"
                  >
                    <div className="card-body">
                      <p>
                        Wealthlines is a globally respected and responsible
                        investment fund institution incorporated in United
                        Kingdom and governed by the laws and rules of the
                        securities and exchange commission.
                      </p>

                      <p>
                        We're dedicated to being a distinctive and trusted
                        provider of investment and asset management solutions
                        for individual and institutional investors.
                      </p>

                      <p>
                        As you may know, an investment fund is an institution
                        that collects money from investors to buy assets that
                        will generate a return if their value increases. By
                        investing high amounts of money, an investment fund is
                        able to keep transaction costs low thanks to economies
                        of scale.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Item 02 --> */}
                <div className="card">
                  <div className="card-header" role="tab" id="headingTwo">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionColumn1"
                      href="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <h3 className="mb-0">
                        What are you doing to keep my account secure?
                      </h3>
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionColumn1"
                  >
                    <div className="card-body">
                      <p>
                        At Wealthlines we take security very seriously. Because
                        of this we have external parties testing the setup that
                        we’ve created. Internally, we also make use of extensive
                        bug-testing to iron out any flaws. Additionally, all
                        traffic to our servers makes use of extensive encryption
                        making sure no outside parties get their hands on any of
                        your data.
                      </p>

                      <p>
                        All server communication is TLSv1.2 encrypted. So no
                        data falls prey to digital voyeurs.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Item 03 --> */}
                <div className="card">
                  <div className="card-header" role="tab" id="headingThree">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionColumn1"
                      href="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <h3 className="mb-0">
                        How Can I Buy / Sell Cryptocurrencies?
                      </h3>
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                    data-parent="#accordionColumn1"
                  >
                    <div className="card-body">
                      <p>
                        Perhaps the easiest way to buy / sell cryptocurrencies
                        is to search online for what works best in your
                        locality. These are our top picks.
                      </p>
                      <p>
                        1. Changelly: This bureau de change enables you to
                        purchase cryptocurrencies with a credit card easily and
                        fast.
                      </p>
                      <p>
                        2. Localbitcoins: You can buy and sell from your bank
                        and local people with this service.
                      </p>
                      <p>
                        3. Coinbase: The biggest bureau de change and provider
                        of bitcoin wallet that you can use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Accordion wrapper End --> */}
            </div>
            <div className="col-lg-6">
              {/* <!--Accordion wrapper--> */}
              <div
                className="accordion about-content"
                id="accordionColumn2"
                role="tablist"
                aria-multiselectable="true"
              >
                {/* <!-- Item 04 --> */}
                <div className="card">
                  <div className="card-header" role="tab" id="headingFour">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionColumn2"
                      href="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      <h3 className="mb-0">
                        How does the affiliate program work?
                      </h3>
                    </a>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse show"
                    role="tabpanel"
                    aria-labelledby="headingFour"
                    data-parent="#accordionColumn2"
                  >
                    <div className="card-body">
                      <p>
                        As a partner, if you refer investors to invest with
                        Wealthlines, you will be rewarded by a commission for
                        each investment they make. Each of your referred
                        investors have the potential to generate lifetime
                        commissions.
                        <br />
                        <br />
                        All Wealthlines users who joined through your personal
                        referral link will become your referrals and they will
                        be counted as active referrals, if they make investment.
                      </p>

                      <p>
                        Commission example: You invite one investor, who invests
                        1000 USD on his account. As an affiliate partner, you
                        will earn 10% of this amount, which will be 100 USD and
                        it will be credited directly to the account balance of
                        your dashboard.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Item 05 --> */}
                <div className="card">
                  <div className="card-header" role="tab" id="headingFive">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionColumn2"
                      href="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <h3 className="mb-0">Can I trust this company?</h3>
                    </a>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                    data-parent="#accordionColumn2"
                  >
                    <div className="card-body">
                      We are fully transparent. There are features in the system
                      that you can’t find elsewhere. Right now, more than 3,000
                      hardware are supplying the system with the required power.
                      <br />
                      All wallets are controlled by official Bitcoin master
                      nodes and transactions are instant and fully automated.
                    </div>
                  </div>
                </div>
                {/* <!-- Item 06 --> */}
                <div className="card">
                  <div className="card-header" role="tab" id="headingSix">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionColumn2"
                      href="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      <h3 className="mb-0">
                        Company shares and How will I receive dividends?
                      </h3>
                    </a>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingSix"
                    data-parent="#accordionColumn2"
                  >
                    <div className="card-body">
                      <p>
                        When you own shares in our company we pays out
                        dividends, we’ll award the dividend to your account when
                        the company has made it available to all shareholders.
                      </p>

                      <p>
                        If you own shares in our company at that time, you’ll
                        receive dividend. You can acquire your share in our
                        company by sending a request to the MD office email
                        support@ wealthlines-tradefunds.com
                      </p>

                      <p>
                        When the dividends comes into your account, tax is
                        deducted and dividends is sent to your designated
                        account details.
                      </p>

                      <p>
                        Information about company shares availability is sent to
                        our users and also to the general public in the asset
                        fund investment niche through email
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Accordion wrapper End --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!--   Faq End   --> */}

      {/* <!-- Call To Action Section Starts --> */}
      <CallToAction />
    </>
  );
};

export default Faqs;
