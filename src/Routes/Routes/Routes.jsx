
import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../Home/Home/Home";
import JoinUs from "../JoinUs/JoinUs/JoinUs";
import Membership from "../Membership/Membership/Membership";
import Error from "../Error/Error";

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
            path: "/membership",
            element: <Membership></Membership>
        }
      ]
    },
  ]);