import * as React from 'react';
import Nav from '../../Components/NavBar'
import './ProfilesCard.css'
import {Grid, Hidden, makeStyles, Paper} from "@material-ui/core";
import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
 import {useSelector} from 'react-redux'
 import userImg from './images/girl.jpg';
 import { useEffect } from 'react';
 import axios from 'axios';


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

const Profiles= () => {
 
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