import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PFP from './img/IMG_8024.jpg';
import './css/home.css';

const NewHome = () => {

    const [repos, setRepos] = useState({})

    console.log(repos)

    useEffect(() => {
        const octokit = new Octokit({
            auth: process.env.REACT_APP_GITHUB_AUTH,
          });
      
          octokit
            .paginate("GET /user/repos", {
                per_page: 1000,
            })
            .then((res) => {
                const filteredRepos = res.filter(
                    (repo) =>
                        ![
                            'phase-4',
                            'phase-3',
                            'phase-2',
                            'phase-1',
                            'phase-0',
                            'react',
                        ].some((prefix) => repo.name.startsWith(prefix))
                );    
                setRepos(filteredRepos)
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
                    <Typography variant="h3" fontWeight="bold" className="namePlateTitle">I'm Mark Fullen</Typography>
                    <Typography variant="h5">Aspiring Web Developer</Typography>
                    <Typography>I have a passion for creating elegant, intuitive user interfaces and bringing web projects to life. Check out some of my recent projects below and feel free to get in touch if you'd like to collaborate!</Typography>
                </div>

            </div>

            <div className="homeGithubParent">

                <Box className="homeGithubData">
                    {Object.keys(repos).length > 0 ?
                        repos.map(r => {
                            return (
                                <Box className="homeGitHubRepos" key={`${r.name} + ${r.size}` }>
                                    <a href={r.html_url}>
                                        <GitHubIcon className="homeGitHubReposIcon"/>
                                        <div className="homeGitHubReposInfo">
                                            <Typography variant="h5">{r.name}</Typography>
                                            <Typography variant="h6">Size: {r.size} obj(s)</Typography>
                                            <Typography variant="h6">Created: {r.created_at}</Typography>
                                        </div>
                                    </a>
                                </Box>
                            )
                        })
                    : null}
                </Box>

            </div>

            <Typography variant="h6" className="namePlateLinks">
                    <a href="https://github.com/Mark3Fullen"><GitHubIcon/></a>
                    <a href="https://www.instagram.com/markfullen/?hl=en"><InstagramIcon/></a>
                    <a href="mailto:mark@mark3fullen.com"><EmailIcon/></a>
                    <a href="https://www.linkedin.com/in/mark-fullen-412a73158/"><LinkedInIcon/></a>
                </Typography>

        </Box>

    )


}

export default NewHome