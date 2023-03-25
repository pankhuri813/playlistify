import React, { useState, useEffect } from "react";
import VideoCard from "../KATHAK/VideoCard/VideoCard";
import "../KATHAK/Kathak.css";

export default function Chinese() {
  const [link, setLink] = useState("");
  const [rpp, setRPP] = useState(10);
  const [isFav, setIsFav] = useState(false);
  const [id, setId] = useState("");
  const [videos, setVideos] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&maxResults=${rpp}&key=AIzaSyCGuF9vosG65GuVpdlJxmxEpgCR1BgYdFw`
    )
      .then((response) => response.json())
      .then((data) => {
        if (link && data.error) setErr(data.error.message);
        setVideos(data.items);
      });
    console.log("ID: ", id);
  }, [id, rpp,link]);
  function getId() {
    const regex = /list=([\w-]+)/;
    const match = link.match(regex);
    if (match && match[1]) {
      const playlistId = match[1];
      console.log("Playlist ID:", playlistId);
      setId(playlistId);
    } else {
      setErr("Invalid YouTube playlist link");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setVideos([]);
    getId();
    console.log(id);
  }
  console.log(err);
  return (
    <div className="kathak-container">
      <div className="hero-section">
        <h1 className="heading"> Chinese - Food</h1>
        <div className="hero-main">
          <div className="suggested-video">

          <iframe 
          width="560"
           height="315" 
           src="https://www.youtube.com/embed/videoseries?list=PL00a0G6_TRLXzWrRKb38oDfxBa5iAq1xk" 
           title="YouTube video player" 
           frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>

          </div>
          <div className="playlist-form">
            <div className="form-title">Add your Playlist</div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="playlist-link"
                placeholder="Playlist URL"
                onChange={(e) => setLink(e.target.value)}
                value={link}
              />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
      {videos && videos.length > 0 ? (
        <div className="playlist">
          <div className="playlist-heading-container">
            <h1 className="heading">Your Playlist</h1>
            <button
              className="favorite-btn"
              onClick={() => {
                setIsFav(!isFav);
              }}
            >
              <p>{isFav ? "Remove from favorites" : "Add to favorites"}</p>
              <img
                src={
                  isFav
                    ? "/icons/heart-filled.svg"
                    : "/icons/heart.svg"
                }
                alt=""
                className="heart-icon"
              />
            </button>
          </div>
          <div className="videos-container">
            {videos.map((e, i) => {
              return (
                <>
                  <VideoCard
                    key={i}
                    title={e.snippet.title}
                    thumbnail={
                      e.snippet.thumbnails.high
                        ? e.snippet.thumbnails.high.url
                        : "/images/img-not-found.png"
                    }
                    channel={e.snippet.channelTitle}
                  />
                </>
              );
            })}
          </div>
          <button className="show-more-btn" onClick={() => setRPP(rpp + 10)}>
            Show More
          </button>
        </div>
      ) : (
        err
      )}
    </div>
  );
}