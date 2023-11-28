import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useContext } from "react";
import { AuthContext } from '../../Provider/AuthProvider';

export default function Profile() {

    const {user} = useContext(AuthContext);
    console.log(user.photoURL);

  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={user.photoURL} />
    </Stack>
  );
}