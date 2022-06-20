import * as React from 'react';
import Nav from '../../Components/NavBar'
import './ProfilesCard.css'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
 import {useSelector} from 'react-redux'
 import userImg from './images/girl.jpg';
 import circleImg from './images/circle.svg';
 import { Icon } from '@iconify/react';
 import { useEffect } from 'react';
 import axios from 'axios';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 const LargeButton = styled(Button)(({ theme }) => ({
  color: "#12C6B2",
  border: "2px solid #12C6B2",
  backgroundColor: "#transparent",
  fontWeight: "300px",
  fontSize: "24px",
  minHeight:  "64px" ,
  borderRadius: "4px",
  padding: "0.75rem 10px",
  Width: "10%" ,
  marginTop: "20px",
  marginLeft:"38rem",
  "&:hover": {
    backgroundColor: "#12C6B2",
    color:"white"
  },
}));

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '20%',
  height:'60vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  fontSize:'2rem' , fontWeight:'bold',
};

const Profiles= () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const user=useSelector((state)=>{
         return state
        })
        console.log(user)

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
      console.log(response.data);
     // setUsers(response.data)
    })
  },[])

  return (
    <>
    <section className="contain">
  <div className="main">
    <h3 className="heading">
      <span>Who's Watching?</span>
    </h3>
   
    <div className="container">
      <div className="card">
      <img src={userImg} alt="user" />
        <div className="details">
          <h3>aya</h3>
          <p>Software Developer</p>
          <div className="social-links">
            <a href="#">
              <i className="uil uil-facebook-f" />
            </a>
            <a href="">
              <i className="uil uil-instagram" />
            </a>
            <a href="">
              <i className="uil uil-twitter-alt" />
            </a>
            <a href="">
              <i className="uil uil-whatsapp" />
            </a>
          </div>
        </div>
      </div>
      <div className="card">
      <img src={userImg} alt="user" />
        <div className="details">
          <h3>Sandeep</h3>
          <p>App Developer</p>
          <div className="social-links">
            <a href="#">
              <i className="uil uil-facebook-f" />
            </a>
            <a href="">
              <i className="uil uil-instagram" />
            </a>
            <a href="">
              <i className="uil uil-twitter-alt" />
            </a>
            <a href="">
              <i className="uil uil-whatsapp" />
            </a>
          </div>
        </div>
      </div>
      <div className="card">
      <img src={userImg} alt="user" />
        <div className="details">
          <h3>Nitin</h3>
          <p>Website Developer</p>
          <div className="social-links">
            <a href="#">
              <i className="uil uil-facebook-f" />
            </a>
            <a href="">
              <i className="uil uil-instagram" />
            </a>
            <a href="">
              <i className="uil uil-twitter-alt" />
            </a>
            <a href="">
              <i className="uil uil-whatsapp" />
            </a>
          </div>
         
        </div>
      </div>
     
      {/* <Button size="large"  sx={{  minWidth: {lg:'450px' ,md:'300px' , sm:'auto' , xs:'auto'} ,   height: { md:'64px' , sm:'40px' , sx:'auto'} ,  padding: { lg:"0.75rem 25.333px" , md:'0.5rem 20px' , sm:'0.3rem 15px' , sx:'0.1rem 5px' } }} > */}
        <Button style={{ color: "#12C6B2", textDecoration: "none" ,fontSize:"100px" }}
        >
          <Icon icon="carbon:add-alt" onClick={handleOpen}/>
        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:'center',marginBottom:'15px',fontSize:'1.5rem' , fontWeight:'bold'}}>
            Enter user data
          </Typography>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch'}
      }}
      noValidate
      autoComplete="off"
    >
          <TextField
          label="User Name"
          variant="standard"
          color="success"
          focused sx={{fontSize:'1rem', marginBottom:'10px',fontSize:'1.5rem' , fontWeight:'bold'}}
                  />
                   <TextField
          label="User Name"
          variant="standard"
          color="success"
          focused sx={{fontSize:'1rem', marginBottom:'10px'}}
                  />
                   <TextField
          label="User Name"
          variant="standard"
          color="success"
          focused sx={{fontSize:'1rem', marginBottom:'10px'}}
                  />
          </Box>
        </Box>
      </Modal>
      {/* </Button> */}
    </div>
  </div>
  <LargeButton size="large"  sx={{  minWidth: {lg:'450px' ,md:'300px' , sm:'auto' , xs:'auto'} ,   height: { md:'64px' , sm:'40px' , sx:'auto'} ,  padding: { lg:"0.75rem 25.333px" , md:'0.5rem 20px' , sm:'0.3rem 15px' , sx:'0.1rem 5px' } }} >
        <StyledLink
          to="/ManageProfile"
          style={{ color: "#12C6B2", textDecoration: "none" }}
        >
         Manage Profiles
        </StyledLink>
      </LargeButton>
    </section>
    
 </>
  );
};

export default Profiles;