import React, { useState, useEffect } from "react";
import "./Kathak.css";
function YoutubePlaylist() {
  const [videos, setVideos] = useState([]);
  const [id, setId] = useState("");
  const [link, setLink] = useState("");
  const [showForm, setShowForm] = useState(false);

  function getId() {
    console.log(link)
    const regex = /list=([\w-]+)/;
    const match = link.match(regex);
    if (match && match[1]) {
      const playlistId = match[1];
      console.log("Playlist ID:", playlistId);
      setId(playlistId)
    } else {
      console.log("Invalid YouTube playlist link");
    }
  }

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&maxResults=100&key=AIzaSyCGuF9vosG65GuVpdlJxmxEpgCR1BgYdFw`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
      });
      console.log(id)
  }, [id]);

  console.log(videos);
  function openForm(e) {
    setShowForm(!showForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getId();
    console.log(id)
  }
  return (
    <div>
      <div className="card" onClick={openForm}>
        <p>add playlist</p>
      </div>
      <h2>Videos</h2>
      <ul>
        {videos&& videos.map((video) => (
          <div>
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
            />
            <p> {video.snippet.title}</p>
          </div>
        ))}
      </ul>
      {showForm && (
        <form className="kathak-form" onSubmit={handleSubmit}>
          <input
          value={link}
            onChange={(e) => {setLink(e.target.value);}}
            type="text"
            placeholder="playlist URL"
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default YoutubePlaylist;
