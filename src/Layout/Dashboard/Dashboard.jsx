import { Button, Divider } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Dashboard = () => {

    const { isAdmin } = useAdmin();
    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <div style={{display: "flex"}}>
            <div style={{ width: "250px", backgroundColor: "green", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "40px" }}>
                {isAdmin ?
                    <>
                        <NavLink to="/dashboard/adminProfile">
                            <Button variant="outlined" sx={{ color: "white", marginBottom: "20px" }}>Admin Profile</Button>
                        </NavLink>
                        <NavLink to="/dashboard/manageUsers">
                            <Button variant="outlined" sx={{ color: "white", marginBottom: "20px" }}>Manage Users</Button>
                        </NavLink>
                        <NavLink to="/dashboard/activities">
                            <Button variant="outlined" sx={{ color: "white", marginBottom: "20px" }}>Activities</Button>
                        </NavLink>
                        <NavLink to="/dashboard/announcements">
                            <Button variant="outlined" sx={{ color: "white", marginBottom: "20px" }}>Make Announcements</Button>
                        </NavLink>
                    </>
                    :
                    <>
                        <NavLink to="/dashboard/userProfile">
                            <Button variant="outlined" sx={{ color: "white", marginBottom: "20px" }}>My Profile</Button>
                        </NavLink>
                        <NavLink to="/dashboard/addPost">
                            <Button variant="outlined" sx={{ color: "white", marginBottom: "20px" }}>Add Post</Button>
                        </NavLink>
                        <NavLink to="/dashboard/myPost">
                            <Button variant="outlined" sx={{ color: "white", marginBottom: "20px" }}>My Posts</Button>
                        </NavLink>
                        <NavLink to="/">
                            <Button variant="outlined" sx={{ color: "white", marginBottom: "20px" }}>Home</Button>
                        </NavLink>
                    </>
                }

            </div>
            <div style={{ flexGrow:"1"}}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;