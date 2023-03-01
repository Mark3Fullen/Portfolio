import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
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
                </div>
                

            </div>

            <Box className="homeGithubData">
                {repos ? 
                    repos.map(r => {
                        return (
                            <Box className="homeGitHubRepos">
                                <a href={r.url}><GitHubIcon/></a>
                                <Typography variant="h5">{r.name}</Typography>
                                <Typography variant="h6">Size: {r.size} somethings</Typography>
                                <Typography variant="h6">Created: {r.created}</Typography>
                            </Box>
                        )
                    })
                : null}
            </Box>

        </Box>

    )


}

export default NewHome