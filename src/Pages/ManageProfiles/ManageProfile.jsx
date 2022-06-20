import * as React from 'react';
import Nav from '../../Components/NavBar'
import './ProfilesCard.css'
import {Grid, Hidden, makeStyles, Paper} from "@material-ui/core";
import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
 import {useSelector} from 'react-redux'
 import userImg from './images/girl.jpg';
 
 import Card from '@material-ui/core/Card';
 import CardActionArea from '@material-ui/core/CardActionArea';
 import CardActions from '@material-ui/core/CardActions';
 import CardContent from '@material-ui/core/CardContent';
 import CardMedia from '@material-ui/core/CardMedia';
 import Typography from '@material-ui/core/Typography';
 
 const useStyles = makeStyles({
   root: {
     maxWidth: 345,
   },
   media: {
     height: 140,
   },
 });

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
  const classes = useStyles();
  const user=useSelector((state)=>{
         return state
        })
        console.log(user)
  return (
    <>
    <section className="contain">
    <div style={{backgroundColor:"red" , width:"50%"}}>
      </div>
  
    </section>
    
 </>
  );
};

export default Profiles;