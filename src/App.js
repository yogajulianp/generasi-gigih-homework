
import './App.css';
import data from "./components/data/index";
import player from "./components/player/index";
import Image from "./components/image/index";
import Button from "./components/button/index";
import Title from "./components/title/index";
import Artist from "./components/artist/index";
import Album from "./components/album/index";

function App() {
  const {
    album: {
      images: [imgSrc],
      artists: [artist],
      name: albumName,
    },
    name: title,
  } = data;

  return (
    <div className = "playlist">
      <div className = "playlist-card" >
        <h1>Play Music Now</h1>
        <player>
          <Image imageUrl={imgSrc.url}/>
          <Title>{title}</Title> 
          <Artist>{artist.name}</Artist>
          <Album>{albumName}</Album>
          <Button>Select</Button>
        </player>
      </div>

    </div>
  );


}



export default App;
