import React from "react";
import './admin.css'
import logo from './images/lg1.jpg';
import { Link, Outlet } from "react-router-dom";

const Adminpage = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <img src={logo} />
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title navbar-brand" id="offcanvasDarkNavbarLabel" style={{ fontSize: '24px' }}>Admin</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  < Link to={"/admin/user/register"} className="nav-link navbar-brand">Register</Link>
                </li>
                <li><hr class="navbar-divider" /></li>
                <li class="nav-item dropdown navbar-brand">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">VIEW</a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li>< Link to={"/admin/parent/profile"} className="nav-link navbar-brand">View Parents</Link></li>
                    <li><hr class="navbar-divider" /></li>
                    <li>< Link to={"/admin/student/profile"} className="nav-link navbar-brand">View Students</Link></li>
                  </ul>
                </li>
                <li><hr class="navbar-divider" /></li>
                <li class="nav-item dropdown navbar-brand">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">COURSE</a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li>< Link to={"/admin/course/create"} className="nav-link navbar-brand">Add Courses</Link></li>
                    <li><hr class="navbar-divider" /></li>
                    <li>< Link to={"/admin/course"} className="nav-link navbar-brand">View Courses</Link></li>
                  </ul>
                </li>
                <li><hr class="navbar-divider" /></li>
                <li class="nav-item dropdown navbar-brand">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">MARKS</a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li>< Link to={"/admin/mark/create"} className="nav-link navbar-brand">Add Marks</Link></li>
                    <li><hr class="navbar-divider" /></li>
                    <li>< Link to={"/admin/marks"} className="nav-link navbar-brand">View Marks</Link></li>
                  </ul>
                </li>
                <li><hr class="navbar-divider" /></li>
                <li className="nav-item">
                  < Link to={"/admin/feedback"} className="nav-link navbar-brand">View Feedback</Link>
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
      <div style={{ marginTop: "200px" }}>
        <Outlet />
      </div>


    </>
  )
}
export default Adminpage;