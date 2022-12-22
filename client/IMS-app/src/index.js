import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login_component/Login";
import Register from "./components/register_component/Register";
import Course from "./components/Course_component/courseCreate";
import Apply from "./components/Course_component/applyCourse";
import Feedback from "./components/Feedback_component/feedback";
import Dashboard from "./components/Dashbord/sidebar";
import Student from "./components/Table_component/getAllStudentProfile";
import Parent from "./components/Table_component/getAllParentProfile";
import Mark from "./components/Mark_component/markCreate";
import GetCourse from "./components/Table_component/courseView";
import GetFeedback from "./components/Table_component/feedback";
import  SPassword from "./components/Password/studentPassword";
import  PPassword from "./components/Password/parentPassword";
import  OneStudent from "./components/Table_component/getStudentProfile";
import  OneParent from "./components/Table_component/getParentProfile";

const router = createBrowserRouter([
  {
    path: "/accounts",
    element: <App />,
    children: [
      {
        path: "/accounts/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    
    children: [
      {
        path: "/admin/user/create",
        element: <Register />,
      },
      {
        path: "/admin/course/create",
        element: <Course />
      },
      {
        path: "/admin/mark/create",
        element: <Mark />
      },
      {
        path: "/admin/student/profile",
        element: <Student />
      },
      {
        path: "/admin/parent/profile",
        element: <Parent />
      },
      {
        path: "/admin/course",
        element: <GetCourse />
      },
      {
        path: "/admin/feedback",
        element: <GetFeedback />
      },


    ],
    
  },
  {
    path: "/student",
    element: <App />,
    children: [
      {
        path: "/student/apply",
        element: <Apply />,
      },
      {
        path: "/student/feedback",
        element: <Feedback />,
      },
      {
        path: "/student/profile/update",
        element: <SPassword />,
      },
      {
        path: "/student/profile",
        element: <OneStudent />,
      }
    ]
  },
  {
    path: "/parent",
    element: <App />,
    children: [

      {
        path: "/parent/feedback",
        element: <Feedback />,
      },
      {
        path: "/parent/profile",
        element: <OneParent />,
      },
      {
        path: "/parent/profile/update",
        element: <PPassword />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
