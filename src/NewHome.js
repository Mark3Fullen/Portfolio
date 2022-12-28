import React from "react";
import './css/home.css';

import PFP from './img/IMG_8024.jpg';


const newHome = () => {

    return (

        <div className="homePage">

            <br/>

            <img className="profilePic" src={PFP} />

            <h2 className="namePlate">I'm Mark Fullen</h2>

            <div className="aboutSec">

                <div>
                    <h3>Fullstack Developer</h3>
                    <p>As, a web developer, I can create and manage small scale applications, websites and services</p>
                </div>

                <hr className="hrLine"/>

                <div>
                    <h3>Musician</h3>
                    <p>As a musician, I have over 8+ years dedicated to my craft: practicing, writing, recording, planning, playing and everything that comes in between.</p>
                </div>

            </div>

            <br/>

            <div>

                <button className="moreButton">See more</button>

            </div>

        </div>

    )


}

export default newHome