import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Videocard from "./Videocard";
import { InfoContext } from "./ReactContext";
import { AdVideocard } from "./Videocard";

// Wrap Videocard with Ad properties
const AdVideocardComponent = AdVideocard(Videocard);

const VideoContainer = () => {
    const videoInfo = useContext(InfoContext);
    // console.log(videoInfo);

    return (
       <div>       
           {/* Display AdVideocardComponent for the first video */}
           {/* {videoInfo[0] && <AdVideocardComponent Info={videoInfo[0]} />} */}
          
          
           <div className="flex flex-wrap justify-end ">
           <AdVideocardComponent Info={videoInfo[0]}/>
               {videoInfo.map((video, index) => (
                   <Link to={`/Watch/${video.id}`} key={index}>
                       <Videocard Info={video} />
                   </Link>
               ))}
           </div>
       </div>
    );
};

export default VideoContainer;
