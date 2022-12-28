import React from "react";
import { NavLink } from 'react-router-dom';
import './css/sidebar.css';

import { DiJavascript1 } from "react-icons/di"
import { DiRuby } from "react-icons/di"
import { DiReact } from "react-icons/di"
import { DiRor } from "react-icons/di"
import { DiHtml5 } from "react-icons/di"
import { DiCss3 } from "react-icons/di"

const Sidebar = () => {

    return (

        <div className="sidebar">

            <div className="backImg"/>

            <div className="profile">

                <h2 className="nameTag">Mark Fullen</h2>

                <p className="skillList"><DiJavascript1/>   <DiRuby/>   <DiReact/>   <DiRor/>   <DiHtml5/>  <DiCss3/></p>

                <br/>

                <br/>

                <br/>

                <br/>

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

                        <NavLink to="/music">
                            <button className="link">Music</button>
                        </NavLink>

                    </div>

            </div>
            

        </div>

    );

}


export default Sidebar