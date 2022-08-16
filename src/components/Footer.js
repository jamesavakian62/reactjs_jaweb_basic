import { NavLink } from "react-router-dom";
import "../index.css";

const Footer = () => {
  return (
    <>
      <div className="card text-center">
        <hr />
        <div className="footer-background"></div>
        <div className="footer">
          <div className="card-body bg-dark text-light py-4">
            <div className="card-title">James L. Avakian</div>
            <div className="card-title1">
              A a personal portfolio website for James L. Avakian.
            </div>
            <br /> <br />
            Made with ReactJS
            <img
              src="./react.png"
              alt="logo"
              className="react2 imgshadow"
            />{" "}
            CSS3 programming.
            <div className="react2"></div>
            <img
              src="./oa_logo.png"
              alt="logo"
              className="nav_logo1 imgshadow"
            />
          </div>
          <p className="footer">
            &copy; 2022, MyOneUniverse, Optical Automation, LLC, All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
