import * as React from 'react';
import Nav from '../../Components/NavBar'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Box, Stack, Button } from "@mui/material";

export default function selectProfileContainer({user,setProfile}) {
  return (
    <>
        <Nav.Frame>
        <p>selection profile</p>
        </Nav.Frame>
        
    </>
   
      // <Box variant="div" sx={{ width: "100%", height: "100%" }}>
      //       <AvatarGroup max={3} direction="row" alignItems="center">
      //           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      //           <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      //           <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      //           <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      //           <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      //           </AvatarGroup>
      // </Box>
    
  );
}
