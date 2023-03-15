const link = "https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ";
const regex = /list=([\w-]+)/;
const match = link.match(regex);
if (match && match[1]) {
  const playlistId = match[1];
  console.log("Playlist ID:", playlistId);
} else {
  console.log("Invalid YouTube playlist link");
}
