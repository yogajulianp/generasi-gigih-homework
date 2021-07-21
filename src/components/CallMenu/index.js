import { getKeygen } from "./calls/index";
import { loginApi, logoutApi, profileApi } from "./constanta/url/api";
import Button from "./components/button/index";
import axios from "axios";
import { useState } from "react";
import style from "./style.module.css";

const CallMenu = ({ authHeader, setAuthHeader }) => {
  const [profile, setProfile] = useState(null);

  const loginSpotify = () => {
    const opener = window.open(loginApi, "_blank", "resizable=yes");

    let checkKeygenUrl;
    const getKeygenInterval = setInterval(() => {
      try { checkKeygenUrl = opener.location.href.includes("access_keygen");
      } catch (error) {}

      if (checkKeygenUrl) {
        const { keygen, type } = getKeygen(opener);
        setAuthHeader(`${type} ${keygen}`);
        fetchProfile(`${type} ${keygen}`);
        clearInterval(getKeygenInterval);
        opener.close();
      }
    }, 100);
  };

  const logoutSpotify = () => {
    const opener = window.open(logoutApi, "_blank", "resizable=yes");

    const logoutInterval = setInterval(() => {
      setAuthHeader(null);
      clearInterval(logoutInterval);
      setProfile(null);
      opener.close();
    }, 300);
  };

  const fetchProfile = async (bearerKeygen) => {
    try {
      const res = await axios.get(profileApi, {
        headers: {
          Authorization: bearerKeygen,
        },
      });

      const {
        display_name: name,
        images: [img],
      } = await res.data;

      setProfile({ name, img });
    } catch (error) {
      alert(error.message);
    }
  };

  if (authHeader) {
    return (
      <div className={style.menu}>
        <img src={profile?.img?.url} alt={profile?.name} />
        <p>{profile?.name}</p>
        <Button onClick={logoutSpotify}> Logout</Button>
      </div>
    );
  }
  return <Button onClick={loginSpotify}> Login</Button>;
};

export default CallMenu;
