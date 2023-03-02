import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Playlist() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3001/api/playlist');
      setVideos(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {videos.map(video => (
        <div className='kathak-api' key={video.id}>
          <img className='kathak-api-image' src={video.thumbnail} alt={video.title} />
          <h2> {video.thumbnail}</h2>
          <h3>{video.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Playlist;
