import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <span>
                  <img src="/logo1.png" style={{ width: "5rem" }} />
                </span>{" "}
                <h3>Al Amana Stone Crusher</h3>
                <p>
             
                Dupagul, Airport, Dhopagul, Sylhet, 
                  <br />
                  Bangladesh
                  <br />
                  <strong>Phone:</strong>
                  01755-673963
                  <br />
                  <strong>Email:</strong> alamanastonecrusher@gmail.com
                  <br />
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/stone">পাথর</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/sand">বালি</Link>
                  </li>
                  {/* <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Graphic Design</a>
                  </li> */}
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </footer>
      {/* End Footer */}
    </>
  );
};

export default Footer;
