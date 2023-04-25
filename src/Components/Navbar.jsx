import { useState } from "react";
import React from "react";
import { Toolbar, AppBar, Tabs, Button, useScrollTrigger } from "@mui/material";
import {FiMenu} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import logo from "./assets/logo.jpg";
// import '../App.css';
import "./styles/Homemain.css";
const alertMsg=()=>
{
  alert("Click 'OK' to download the resume");
}
function Home() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const[toggleMenu,setToggleMenu]=useState(false);
  return (
    <div className="main_navbar">
      <div className="main_navbar-links">
        <div className="main_navbar-links-logo">
          <img src={logo}/>
        </div>
        <div className="main_navbar-links-cont">
          <Link to='/home' className="links">Home</Link>
          <Link to='/skills' className="links">Skills</Link>
          <Link to='/accolades' className="links">Accolades</Link>
          <Link to='/final' className="links">Contact</Link>
        </div>
      </div>
      {/* <AppBar className="trans">
            <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
                <h1>Calex</h1>
                <Tabs>
                    <Button><h3>Home</h3></Button>
                    <Button><h3>Me</h3></Button>
                    <Button><h3>Skills</h3></Button>
                    <Button><h3>Achievements</h3></Button>
                    <Button><h3>Reach out</h3></Button>
                </Tabs>
            </Toolbar>
        </AppBar> */}
    </div>
  );
}
export default Home;
