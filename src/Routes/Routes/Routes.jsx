
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
import PostDetails from "../Home/Posts/PostDetails";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import MyProfile from '../../Components/MyProfile';
import AddPost from '../../Components/AddPost';
// import AdminRoute from "../AdminRoute/AdminRoute";
import MyPosts from '../../Components/MyPosts';
import AdminProfile from '../../Components/AdminProfile';
import ManageUsers from '../../Components/ManageUsers';
import Activities from '../../Components/Activities';
import Announcements from '../../Components/Announcements';

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
        },
        {
          path: "/posts/:id",
          element: <PostDetails></PostDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/posts/${params.id}`)
        }
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        // user routes
        {
          path: "userProfile",
          element: <MyProfile></MyProfile>
        },
        {
          path: "addPost",
          element: <AddPost></AddPost>
        },
        {
          path: "myPost",
          element: <MyPosts></MyPosts>
        },
        // admin routes
        // {
        //   path: "adminProfile",
        //   element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
        // },
        // {
        //   path: "manageUsers",
        //   element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        // },
        // {
        //   path: "activities",
        //   element: <AdminRoute><Activities></Activities></AdminRoute>
        // },
        // {
        //   path: "announcements",
        //   element: <AdminRoute><Announcements></Announcements></AdminRoute>
        // }
        {
          path: "adminProfile",
          element: <AdminProfile></AdminProfile>
        },
        {
          path: "manageUsers",
          element: <ManageUsers></ManageUsers>
        },
        {
          path: "activities",
          element: <Activities></Activities>
        },
        {
          path: "announcements",
          element: <Announcements></Announcements>
        }
      ]
    }
  ]);