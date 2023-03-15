
  

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Kathak.css'

function Playlist() {
  const [videos, setVideos] = useState([]);
  const [playlistLink, setPlaylistLink] = useState("");
  // const regex = /list=([\w-]+)/;
  // const match = playlistLink.match(regex);
  // if (match && match[1]) {
  //   const playlistId = match[1];
  //   console.log("Playlist ID:", playlistId);
  // } else {
  //   console.log("Invalid YouTube playlist link");
  // }
  

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3001/api/playlist');
      setVideos(response.data);
    }
    fetchData();
  }, []);


  const handlePlaylistLinkChange = (event) =>{
    setPlaylistLink(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    //
    const response = await  axios.post("http://localhost:3001/api/playlist",{
      link:playlistLink,
    });
    setVideos(response.data);
    setPlaylistLink("")
  };

  return (
    <div>
      <div className='card' onClick={() => document.getElementById('form').style.display ='block'}>
      <h3>
        Add Playlist
      </h3>
      </div>

      <div id='form' className='form'>
    <form onSubmit={handleSubmit}>
      <label>
        playlist Link:
        <input type= "text" value={playlistLink} onChange={handlePlaylistLinkChange}/>
      </label>
      <button type ='submit' > Submit </button>
      
    </form>
    

    <button onClick={() => document.getElementById('form').style.display = 'none'}> Close</button>
      </div>
  {videos.map(video => (
    <div className='kathak-api' key={video.id} onClick={() => window.location.href = `https://www.youtube.com/watch?v=${video.id}`}>
      <img className='kathak-api-image' src={video.thumbnail} alt={video.title} />
      <h3>{video.title}</h3>
    </div>
  ))}
</div>

  );
}

export default Playlist;





