
import React from "react";
import './App.css';
import player from "./components/player/index";
import Image from "./components/image/index";
import Button from "./components/button/index";
import Title from "./components/title/index";
import Artist from "./components/artist/index";
import Album from "./components/album/index";
import data from "./data/trackdata";
import calls from "./calls/index";

function App() {
  const musicCalls = data.map((call) => {
    const {id, title, imgSrc, artist, albumName, spotify} = calls(call);

    return (
      <div className="container">
        <player>
        <Title>{title}</Title> 
        <Image imageUrl={imgSrc.url}/>
        <Artist>{artist.name}</Artist>
        <Album>{albumName}</Album>
        <Button to={spotify}>Select</Button>
        </player>
      </div>
    );

  });

  return (
      <div className = "playlist">
              <h1>Playlist Music Created</h1>
              <div className = "playlist-card"> 
              {musicCalls}
              </div> 
      </div>
  );
}

export default App;
