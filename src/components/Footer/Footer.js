import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-top p-4">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-info">
                  <h3>Contact Us</h3>
                  <p className="pb-3">
                    With Sundarban Courier, We can make easy our daily life.
                  </p>
                  <p>
                    <span> 24/25 Dilkusha </span>
                    <br />
                    <span> Dhaka ,Tangail </span>
                    <br />
                    <span>
                      <span>Phone: </span>
                      <br /> +8801643559826{" "}
                    </span>
                    <br />
                    <span>
                      <span>Email: </span>
                      <br /> sourovpaul583@gmail.com{" "}
                    </span>
                    <br />
                  </p>
                  <div className="icons">
                    <i className="fab fa-twitter-square twitter m-2"></i>
                    <i className="fab fa-facebook facebook m-2"></i>
                    <i className="fab fa-instagram-square instagram m-2"></i>
                    <i className="fab fa-youtube youtube m-2"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                <h4>Useful Link</h4>
                <ul>
                  <li>
                    <i className="fas fa-chevron-right right_araw"></i>Home
                  </li>
                  <li>
                    <i className="fas fa-chevron-right right_araw"></i> Service
                  </li>
                  <li>
                    <i className="fas fa-chevron-right right_araw"></i>
                    NoticBoard
                  </li>
                  <li>
                    <i className="fas fa-chevron-right right_araw"></i>Branches
                    Location
                  </li>
                  <li>
                    <i className="fas fa-chevron-right right_araw"></i>Applay
                    Agency
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <h4>Our Service</h4>
                <ul>
                  <li>
                    <i className="fas fa-chevron-right right_araw"></i>Courier
                    Service
                  </li>
                  <li>
                    <i className="fas fa-chevron-right right_araw"></i>Parcel
                    Service
                  </li>
                  <li>
                    <i className="fas fa-chevron-right right_araw"></i>Value
                    Decleared
                  </li>
                  <li>
                    <i className="fas fa-chevron-right right_araw"></i>E-com
                    service
                  </li>
                  <li>
                    <i className="fas fa-chevron-right right_araw"></i>Corp.
                    Credit Service{" "}
                  </li>
                </ul>
              </div>
            <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12 footerNews text-center">
                <p>
                  <span className="clr_txt">Has been playing a leading role in these service</span> activities of
                  courier and parcel since its inception in 1983. The Founder,
                  Chairman.has led the effective development and establishment of courier
                  service in Bangladesh.
                </p>
              
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
