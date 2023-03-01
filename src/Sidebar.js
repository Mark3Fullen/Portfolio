import React from "react";
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import './css/sidebar.css';

import CodeIcon from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';

const Sidebar = () => {

    return (

        <div className="sidebar">

            <div className="backImg"/>

            <div className="profile">

                <Typography variant="h4" className="nameTag">Mark Fullen</Typography>

                <Typography variant="h5" className="skillList"><GitHubIcon/>  <CodeIcon/> <JavascriptIcon/> <HtmlIcon/> <CssIcon/> <TerminalIcon/></Typography>

                    <div className="navBar">

                        <NavLink to="/">
                            <button className="link">Home</button>
                        </NavLink>

                        <NavLink to="/resume">
                            <button className="link">Resume</button>
                        </NavLink>

                        <NavLink to="/oldHome">
                            <button className="link">Legacy View</button>
                        </NavLink>

                        {/* <NavLink to="/music">
                            <button className="link">Music</button>
                        </NavLink> */}

                    </div>

            </div>
            

        </div>

    );

}


export default Sidebar