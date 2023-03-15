const path = '.env.local'
require("dotenv").config({path})
const { google } = require('googleapis');
const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())

// const API_KEY = 'AIzaSyA82zTH4WiC7FFrfXsM5o26KI4jHzxvyxc';
// console.log(process.env.YOUTUBE_API_KEY)


app.get('/api/playlist', async (req, res) => {
  const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY
  });

  const playlistId = 'PL9bw4S5ePsEErSpVxWqnhz5A4DZ4aOKPH';
  const response = await youtube.playlistItems.list({
    part: 'snippet',
    playlistId,
    maxResults: 50 
  });
  const videos = response.data.items.map(item => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.default.url
  }));
  res.json(videos);
});

app.listen(3001, () => {
  console.log('Express server is listening on port 3001');
});
