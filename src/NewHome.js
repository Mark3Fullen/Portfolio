import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

import './css/home.css';
import PFP from './img/IMG_8024.jpg';

const { Octokit } = require("@octokit/core");


const NewHome = () => {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchGitHubData = async () => {
            const octokit = new Octokit({ auth: "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" });
            const res = await octokit.request("GET /user/repos");
            setRepos(res.data);
        }

        fetchGitHubData();
    })
    


    return (

        <Box className="homePage">

            <br/>

            <div className="homeHeader">

                <img className="profilePic" alt="profile" src={PFP} />

                <Typography variant="h3" className="namePlate">I'm Mark Fullen</Typography>

            </div>

            <Box className="homeGithubData">
                {repos ? 
                    repos.map(r => {
                        const date = new Date(r.created_at)
                        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
                        const formattedDate = date.toLocaleDateString('en-US', options);
                        return (
                            <Box className="homeGitHubRepos">
                                <a href={r.html_url}><GitHubIcon/></a>
                                <Typography variant="h5">{r.name}</Typography>
                                <Typography variant="h6">Size: {r.size} somethings</Typography>
                                <Typography variant="h6">Created: {formattedDate}</Typography>
                            </Box>
                        )
                    })
                : null}
            </Box>

        </Box>

    )


}

export default NewHome