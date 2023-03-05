import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PFP from './img/IMG_8024.jpg';
import './css/home.css';

const NewHome = () => {

    const [repos, setRepos] = useState({})

    useEffect(() => {
        const octokit = new Octokit({
            auth: process.env.REACT_APP_GITHUB_AUTH,
          });
      
          octokit
            .request("GET /user/repos", {
                per_page: 1000,
            })
            .then((res) => {
                if (res.status === 200) {
                    setRepos(res.data)
                } else {
                    throw new Error("No Repos found!")
                }  
            })
            .catch((error) => {
                console.error(error);
            });
      
    }, []);

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
                    {Object.keys(repos).length > 0 ?
                        repos.map(r => {
                            return (
                                <Box className="homeGitHubRepos" key={`${r.name} + ${r.size}` }>
                                    <a href={r.html_url}><GitHubIcon/></a>
                                    <Typography variant="h5">{r.name}</Typography>
                                    <Typography variant="h6">Size: {r.size} obj</Typography>
                                    <Typography variant="h6">Created: {r.created_at}</Typography>
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