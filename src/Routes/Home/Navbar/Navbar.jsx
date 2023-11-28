import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useContext } from "react";
// import Profile from '../../../Components/Profile/Profile';




const drawerWidth = 240;


export default function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const {user} = useContext(AuthContext);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>

            </Typography>
            <Divider />
            <List>
                <NavLink to="/">
                    <Button variant='outlined' sx={{ fontSize: "15px", fontWeight: "600", color: "green", marginBottom: "16px", width:"80%", borderRadius:"30px", borderTop:"none", borderLeft:"none" }}>Home</Button>
                </NavLink>
                <br />
                <NavLink to="/membership">
                    <Button variant='outlined' sx={{ fontSize: "15px", fontWeight: "600", color: "green", marginBottom: "16px", width:"80%", borderRadius:"30px", borderTop:"none", borderLeft:"none" }}>Membership</Button>
                </NavLink>
                <br />
                <NavLink to="/joinUs">
                    <Button variant='outlined' sx={{ fontSize: "15px", fontWeight: "600", color: "green", marginBottom: "16px", width:"80%", borderRadius:"30px", borderTop:"none", borderLeft:"none" }}>Join Us</Button>
                </NavLink>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: "Background" }}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            color=""
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                            <img style={{ width: "200px" }} src="https://i.ibb.co/SPD8DBh/thought-scape.png" alt="" />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, color: "black", display: { xs: 'none', sm: 'block' } }}
                        >
                            <img style={{ width: "200px" }} src="https://i.ibb.co/SPD8DBh/thought-scape.png" alt="" />
                        </Typography>
                        
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <NavLink to="/">
                                <Button variant='outlined' sx={{ fontSize: "18px", fontWeight: "600", color: "green", marginRight: "5px", borderRadius:"30px", borderTop:"none", borderLeft:"none" }}>Home</Button>
                            </NavLink>
                            <NavLink to="/membership">
                                <Button variant='outlined' sx={{ fontSize: "18px", fontWeight: "600", color: "green", marginRight: "5px", borderRadius:"30px", borderTop:"none", borderLeft:"none" }}>Membership</Button>
                            </NavLink>
                            <NavLink to="/joinUs">
                                <Button variant='outlined' sx={{ fontSize: "18px", fontWeight: "600", color: "green", marginRight: "5px", borderRadius:"30px", borderTop:"none", borderLeft:"none" }}>Join Us</Button>
                            </NavLink>
                            {/* <Profile></Profile> */}
                        </Box>
                    </Toolbar>
                        
                </Container>

            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />

            </Box>
        </Box>
    );
}