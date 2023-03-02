const { google } = require('googleapis');
const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())

const API_KEY = 'AIzaSyA82zTH4WiC7FFrfXsM5o26KI4jHzxvyxc';

const youtube = google.youtube({
  version: 'v3',
  auth: API_KEY
});

app.get('/api/playlist', async (req, res) => {
  const playlistId = 'PLV3v0Ysm26sNk2CHfNJTvJ3hweTmwQO-P';
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
