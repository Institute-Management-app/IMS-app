import React from "react";
import "./sidebar.css";

const Sidebar = ({ sidebar, Home, Course, Marks, Feedback }) => {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <li>
        <i class="ri-home-line"></i>
        {Home}
      </li>
      <li>
        <i class="ri-numbers-line"></i>
        {Course}
      </li>
      <li>
        <i class="ri-feedback-line"></i>
        {Marks}
      </li>
      <li>
        <i class="ri-git-repository-line"></i>
        {Feedback}
      </li>
    </div>
  );
};

export default Sidebar;