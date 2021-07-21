import React from "react";
import { useState } from "react";
import CallMenu from "./components/CallMenu/index";
import SearchBar from "./components/SearchBar/index";
import PlayList from "./components/TrackList/index";

const CallData = () => {
  const [authHeader, setAuthHeader] = useState(null);
  const [tracks, setTracks] = useState([]);

  return (
    <>
      <h1>Menu Playlist</h1>
      <CallMenu authHeader={authHeader} setAuthHeader={setAuthHeader} />
      <SearchBar authHeader={authHeader} setTracks={setTracks} />
      <PlayList tracks={tracks} />
    </>
  );
};

export default CallData;
