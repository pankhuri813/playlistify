import React from 'react'
import { Link } from 'react-router-dom'
import video from '../images/video.mp4'
import '../Components/Homepage.css'



const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video
        autoPlay
        muted
        loop
        className="background-video"
        src={video}
      />
      <div className="content">
        <h1>PLAYLISTIFY</h1>
        <p>Some text that overlays the video</p>
        <Link to="/homemain"><button id='black'> Join now</button></Link>
        <button id='black'> LOGIN </button>

      </div>
    </div>
  );
};

export default BackgroundVideo;
