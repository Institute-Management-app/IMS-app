import React from "react";
import './parent.css'
import logo from './image/lg1.jpg';
import {Link, Outlet} from 'react-router-dom';


const Studentpage = () => {
    return (
        <>
<nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
        <img src={logo}/>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title navbar-brand" id="offcanvasDarkNavbarLabel" style={{fontSize:'24px'}}>Parent</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                < Link to={"/parent/profile"} className="nav-link navbar-brand">Profile</Link>
                </li>
                <li><hr class="navbar-divider"/></li>
                <li className="nav-item">
                < Link to={"/parent/marks"} className="nav-link navbar-brand">View Marks</Link>
                </li>
                <li><hr class="navbar-divider"/></li>
                <li className="nav-item">
                </li> < Link to={"/parent/feedback"} className="nav-link navbar-brand">Feedback</Link>
                <li><hr class="navbar-divider"/></li>
                <li className="nav-item">
                < Link to={"/parent/profile/update"} className="nav-link navbar-brand">Change Password</Link>
                </li>
                <br />
                <br /><br />
                <li className="nav-item">
                  <button className="btn btn-success" onClick={() => {
                    localStorage.removeItem("token");
                    window.location.replace("/");
                  }}>Logout</button>

                </li>
                
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div style={{marginTop:"200px"}}>
      <Outlet/>
      </div>

      
      </>
    )
}
export default Studentpage;