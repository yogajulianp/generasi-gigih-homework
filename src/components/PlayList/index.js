import { calls } from "./calls/index"
import Player from "./components/player/index"; 
import Button from "./components/button/index";
import style from "./style.module.css";

const PlayList = ({ tracks }) => {
  
  const songTracks = tracks?.map((track) => {

    const {id, title,  imgSrc, artist, albumName, spotify  } = calls(track);

    return (
      <Player key={id}>
        <img className={style.plate__image} src={imgSrc.url} alt={title} />
        <h3>{title}</h3>
        <p className={style.plate__artist}> {artist.name}</p>
        <p className={style.plate__album}> {albumName}</p>
        <Button to={spotify}> Play Music</Button>
      </Player>
    );
  });

  return (
  <div className={style.cardWrapper}>
    {songTracks}
  </div>
  );
};

export default PlayList;
