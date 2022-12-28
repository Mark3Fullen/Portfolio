import React from "react";
import '../css/music.css';

import YoutubeEmbed from "./YoutubeEmbed";

const Music = () => {

    return (
            
        <div className="musicPage">

            <div className="video">
                <YoutubeEmbed embedId="https://www.youtube.com/watch?v=B6TYQzRpxoc"/>
            </div>

           

        </div>

    )

}

export default Music