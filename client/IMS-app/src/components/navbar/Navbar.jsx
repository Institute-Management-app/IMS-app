import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-success">
      <div className="container">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/accounts/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary" onClick={()=>{
                localStorage.removeItem("token");
                window.location.replace("/");
              }}>Logout</button>
               
              
            </li>
            {/* <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Register
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
