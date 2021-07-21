import React from "react";
import { searchList } from "./constanta/url/api";
import axios from "axios";
import { useState } from "react";
import Button from "components/button/index";
import style from "./style.module.css";

const SearchBar = ({ authHeader, setTracks }) => {
  const [search, setSearch] = useState("");

  const getTracks = async (query) => {
    try { const res = await axios.get(searchList(query), {
      headers: {
          Authorization: authHeader,
        },
      });
      const trackList = await res.data.tracks.items;
      searchList(trackList);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    getTracks(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form className={style.box} onSubmit={handleInput}>
      <input
        className={style.inputbox} type="text" value={search} onChange={handleChange} placeholder="Play List ..."
      />
      <Button additionalStyle={style.buttonbox} type="submit">

      </Button>
    </form>
  );
};

export default SearchBar;
