import { Button, Divider } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {
    return (
        <div>
            <div style={{width:"250px", backgroundColor:"green", height:"100vh", display:"flex", flexDirection:"column", alignItems:"center", paddingTop:"40px"}}>
                <NavLink >
                    <Button variant="outlined" sx={{color:"white", marginBottom:"20px"}}>Home</Button>
                </NavLink>
                <NavLink >
                    <Button variant="outlined" sx={{color:"white", marginBottom:"20px"}}>My Profile</Button>
                </NavLink>
                <NavLink >
                    <Button variant="outlined" sx={{color:"white", marginBottom:"20px"}}>Add Post</Button>
                </NavLink>
                <NavLink >
                    <Button variant="outlined" sx={{color:"white", marginBottom:"20px"}}>My Posts</Button>
                </NavLink>
                
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;