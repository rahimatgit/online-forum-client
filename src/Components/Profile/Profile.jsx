import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState, useContext} from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Avatar from '@mui/material/Avatar';
import { Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Profile({photo, name}) {

  const {logOut, user} = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = () => {
    setAnchorEl(event.currentTarget);
    console.log(user);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleLogOut = () => {
    logOut()
    .then(res => {
      console.log(res.data)
    })
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar src={photo}></Avatar>
      </Button>
      <Menu
        
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Typography padding="10px 20px">{name}</Typography>
        <Divider></Divider>
        <Link style={{textDecoration:"none"}} to="/dashboard"><MenuItem sx={{color: "green"}} onClick={handleLogOut}>Dashboard</MenuItem></Link>
        <MenuItem sx={{color: "green"}} onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}