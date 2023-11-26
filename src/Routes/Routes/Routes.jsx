
import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../Home/Home/Home";
import JoinUs from "../JoinUs/JoinUs/JoinUs";
import Membership from "../Membership/Membership/Membership";
import Error from "../Error/Error";
import Login from "../JoinUs/Login/Login";
import Register from "../JoinUs/Register/Register";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/joinUs",
            element: <JoinUs></JoinUs>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/membership",
            element: <Membership></Membership>
        }
      ]
    },
  ]);