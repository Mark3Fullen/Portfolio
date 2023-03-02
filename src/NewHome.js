import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PFP from './img/IMG_8024.jpg';
import data from './repo_info.json'

import './css/home.css';

const NewHome = () => {

    console.log(data);

    let repos = data

    return (

        <Box className="homePage">

            <br/>

            <div className="homeHeader">

                <img className="profilePic" alt="profile" src={PFP} />

                <div className="namePlate">
                    <Typography variant="h3" className="namePlateTitle">I'm Mark Fullen</Typography>
                    <Typography variant="h5">Web Developer, Musician, Human Being</Typography>
                    <Typography variant="h6">(Definitely not a Cloud Person)</Typography>
                    <Typography variant="h6" className="namePlateLinks">
                        <a href="https://github.com/Mark3Fullen"><GitHubIcon/></a>
                        <a href="mailto:mark@mark3fullen.com"><EmailIcon/></a>
                        <a href="https://www.linkedin.com/in/mark-fullen-412a73158/"><LinkedInIcon/></a>
                    </Typography>
                </div>
                

            </div>

            <div className="homeGithubParent">

                <Typography></Typography>

                <Box className="homeGithubData">
                    {repos ? 
                        repos.map(r => {
                            return (
                                <Box className="homeGitHubRepos">
                                    <a href={r.url}><GitHubIcon/></a>
                                    <Typography variant="h5">{r.name}</Typography>
                                    <Typography variant="h6">Size: {r.size} obj</Typography>
                                    <Typography variant="h6">Created: {r.created}</Typography>
                                </Box>
                            )
                        })
                    : null}
                </Box>

            </div>

        </Box>

    )


}

export default NewHome