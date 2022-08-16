import { NavLink } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink to="/" className="active_styles" exact>
                <li className="nav-item nav-link">Home</li>
              </NavLink>

              <NavLink to="/AboutTwo" className="active_styles" exact>
                <li className="nav-item nav-link"> Software</li>
              </NavLink>
              <NavLink to="/AboutEleven" className="active_styles" exact>
                <li className="nav-item nav-link"> Products</li>
              </NavLink>
              <NavLink to="/AboutThree" className="active_styles" exact>
                <li className="nav-item nav-link"> About Me</li>
              </NavLink>
            </ul>
          </div>
        </div>

        <i className="fas fa-user-circle navAvatar navMenuItem"></i>

        <div className="navMenuItem loginBtn">Login</div>
      </nav>
    </>
  );
};

export default Navbar;
