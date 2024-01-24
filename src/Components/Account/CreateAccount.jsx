import React from "react";
import style from "./accountStyle.module.css";

function CreateAccount() {
  return (
    <>
      {/* --------wholesale account-----*/}
      <div className="container">
        <div className="row ">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.applyWholesale}>
              <div className={style.apply}>Apply for a Wholesale Account with BFSG</div>
              <div className={style.advantage}>Advantages of Account Creation :</div>
              <div className={style.express}>
                <div className={style.monitor1}>.Express Checkout </div>
                <div className={style.monitor2}>.Monitor Your Orders </div>
                <div className={style.monitor2}>.Add favorite items to your wish list </div>
              </div>

              <div className={style.express2}>
                <div >.Express Checkout </div>
                <div >.Monitor Your Orders </div>
                <div >.Add favorite items to your wish list </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------icon and text-------- */}
      <div className="container">
        <div className="row ">
          <div className="d-flex">
            <div className="col-lg-2" id={style.createPage}>
              <div>
                <img src={"/Images/Contact_Logo.svg"} className={style.contactImg} alt="img" />
                <div className={style.dashedLine1}></div>
              </div>

              <div>
                <img src={"/Images/Rate_Logo.svg"} className={style.contactImg} alt="img" />
                <div className={style.dashedLine2}></div>
              </div>
              <div>
                <img src={"/Images/Location_Logo.svg"} className={style.contactImg} alt="img" />
                <div className={style.dashedLine3}></div>
              </div>
              <div>
                <img src={"/Images/Describe.svg"} className={style.contactImg} alt="img" />

                <div className={style.dashedLine4}></div>
              </div>
              <div>
                <img src={"/Images/Picture_Logo.svg"} className={style.contactImg} alt="img" />

                <div className={style.dashedLine5}></div>
              </div>
              <div>
                <img src={"/Images/QuestionMark.svg"} className={style.contactImg} alt="img" />

                <div className={style.dashedLine6}></div>
              </div>
              <div>
                <img src={"/Images/Cart_Icon.svg"} className={style.contactImg} alt="img" />
              </div>
            </div>

            <div className="col-lg-10 col-md-10 col-sm-10" id={style.nameText}>
              {/* -------name1------ */}
              <div className="container" id={style.name1}>
                <div className="row">
                  <div className={style.firstName}>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className={style.firstText}>First Name</div>
                      <input type="name" className={style.firstText}></input>
                      <div className={style.hr1}></div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className={style.firstText}>Last Name</div>
                      <input type="name" className={style.firstText}></input>
                      <div className={style.hr1}></div>
                    </div>
                  </div>

                  {/* ------email------ */}
                  <div className={style.email}>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className={style.firstText}>Your Email</div>
                      <input type="name" className={style.firstText}></input>
                      <div className={style.hr1}></div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className={style.firstText}>Phone Number</div>
                      <input type="name" className={style.firstText}></input>
                      <div className={style.hr1}></div>
                    </div>
                  </div>

                  {/* ------store----- */}
                  <div className={style.store}>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className={style.firstText}>Store Name</div>
                      <input type="name" className={style.firstText}></input>
                      <div className={style.hr1}></div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className={style.firstText}>Store Location</div>
                      <input type="name" className={style.firstText}></input>

                      <div className={style.hr1}></div>
                    </div>
                  </div>

                  {/* -----Describe----- */}
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className={style.describe}>
                      <div className={style.firstText}>Describe your Store</div>
                      <input type="name" className={style.firstText}></input>

                      <div className={style.hr2}></div>
                    </div>
                  </div>

                  {/* -------picture------ */}
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className={style.picture}>
                      <div className={style.firstText}>Picture (Multiple)</div>
                      <input type="name" className={style.firstText}></input>
                      <div className={style.hr2}></div>
                    </div>
                  </div>
                </div>{" "}
              </div>
              {/* -------name2------ */}
              <div className="container" id={style.name2}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12" id={style.nameContent2}>
                    <div className={style.firstText}>First Name</div>
                    <input type="name" className={style.firstText}></input>
                    <div className={style.hr1}></div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12" id={style.nameContent2}>
                    <div className={style.firstText}>Last Name</div>
                    <input type="name" className={style.firstText}></input>
                    <div className={style.hr1}></div>
                  </div>

                  {/* ------email------ */}

                  <div className="col-lg-6 col-md-6 col-sm-12" id={style.nameContent2}>
                    <div className={style.firstText}>Your Email</div>
                    <input type="name" className={style.firstText}></input>
                    <div className={style.hr1}></div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12" id={style.nameContent2}>
                    <div className={style.firstText}>Phone Number</div>
                    <input type="name" className={style.firstText}></input>
                    <div className={style.hr1}></div>
                  </div>

                  {/* ------store----- */}

                  <div className="col-lg-6 col-md-6 col-sm-12" id={style.nameContent2}>
                    <div className={style.firstText}>Store Name</div>
                    <input type="name" className={style.firstText}></input>
                    <div className={style.hr1}></div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12" id={style.nameContent2}>
                    <div className={style.firstText}>Store Location</div>
                    <input type="name" className={style.firstText}></input>

                    <div className={style.hr1}></div>
                  </div>

                  {/* -----Describe----- */}
                  <div className="col-lg-12 col-md-12 col-sm-12" >
                    <div className={style.describe}>
                      <div className={style.firstText}>Describe your Store</div>
                      <input type="name" className={style.firstText}></input>

                      <div className={style.hr2}></div>
                    </div>
                  </div>

                  {/* -------picture------ */}
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className={style.picture}>
                      <div className={style.firstText}>Picture (Multiple)</div>
                      <input type="name" className={style.firstText}></input>
                      <div className={style.hr2}></div>
                    </div>
                  </div>
                </div>{" "}
              </div>

              {/* ---------How do you sell to your customers?------ */}
              <div className="container" id={style.customerSell}>
                <div className="row">
                  <div>How do you sell to your customers?</div>

                  {/* -----Local ads----- */}
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className={style.localAds}>
                      <span className={style.ellipse}>
                        <input type="radio"></input>
                      </span>
                      <span className={style.localText}>Local Ads</span>
                    </div>

                    {/* -----Walking Customer----- */}

                    <div className={style.localAds}>
                      <span className={style.ellipse}>
                        <input type="radio"></input>
                      </span>
                      <span className={style.localText}>Walking Customer</span>
                    </div>
                  </div>

                  {/* -----social media----- */}
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className={style.localAds}>
                      <span className={style.ellipse}>
                        <input type="radio"></input>
                      </span>
                      <span className={style.localText}>Social Media</span>
                    </div>

                    {/* -----One to One----- */}

                    <div className={style.localAds}>
                      <span className={style.ellipse}>
                        <input type="radio"></input>
                      </span>
                      <span className={style.localText}>One to One</span>
                    </div>
                  </div>

                  {/* -----google----- */}
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className={style.localAds}>
                      <span className={style.ellipse}>
                        <input type="radio"></input>
                      </span>
                      <span className={style.localText}>Google</span>
                    </div>

                    {/* -----Beauty Demoes----- */}

                    <div className={style.localAds}>
                      <span className={style.ellipse}>
                        <input type="radio"></input>
                      </span>
                      <span className={style.localText}>Beauty Demoes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ...........Choose Brands to Apply.......... */}
              <div className="container" id={style.chooseBrand}>
                <div className="row">
                  <div>Choose Brands to Apply</div>

                  {/* --------byRedo */}
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className={style.byRedo}>
                      <span className={style.ellipse}>
                        <input type="radio"></input>
                      </span>
                      <span className={style.byRedoText}>Byredo</span>
                    </div>
                    <div className={style.byRedo}>
                      <span className={style.ellipse}>
                        <input type="radio"></input>
                      </span>
                      <span className={style.byRedoText}>RMS Beauty</span>
                    </div>
                    <div className={style.byRedo}>
                      <span className={style.ellipse}>
                        <input type="radio"></input>
                      </span>
                      <span className={style.byRedoText}>Bumble and Bumble</span>
                    </div>
                  </div>

                  {/* -----Diptyque----- */}
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className={style.byRedo}>
                      <span className={style.ellipse}>
                        <input type="radio"></input>
                      </span>
                      <span className={style.byRedoText}>Diptyque</span>
                    </div>
                    <div className={style.byRedo}>
                      <span className={style.ellipse}>
                        <input type="radio"></input>
                      </span>
                      <span className={style.byRedoText}>ReVive</span>
                    </div>
                    <div className={style.byRedo}>
                      <span className={style.ellipse}>
                        <input type="radio"></input>
                      </span>
                      <span className={style.byRedoText}>By Terry</span>
                    </div>
                  </div>

                  {/* -----Bobbi Brown----- */}
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className={style.byRedo}>
                      <span className={style.ellipse}>
                        <input type="radio"></input>
                      </span>
                      <span className={style.byRedoText}>Bobbi Brown</span>
                    </div>
                    <div className={style.byRedo}>
                      <span className={style.ellipse}>
                        <input type="radio"></input>
                      </span>
                      <span className={style.byRedoText}>Susanne Kaufmann</span>
                    </div>
                    <div className={style.byRedo}>
                      <span className={style.ellipse}>
                        <input type="radio"></input>
                      </span>
                      <span className={style.byRedoText}>Kevyn Aucoin Cosmetics</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    {" "}
                    <div className={style.lastText}>
                      <span className={style.checkbox}>
                        <input type="checkbox"></input>
                      </span>
                      <span className={style.applyText}>
                        By signing in or clicking "Apply for an Account", you agree to our Terms of Service Please also read our Privacy Policy
                      </span>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <button type="button" className={style.applyBtn}>
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
