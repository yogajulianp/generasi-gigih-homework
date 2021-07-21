export const CLIENT_ID = process.env.REACT_APP_SPOTIFY_ID;
export const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_KEY;
export const INIT_URL = window.location.href;
export const AREA = "playlist-modify-private";


export const searchList = (query) =>`https://api.spotify.com/v1/search?q=${query}&type=track&market=ID&limit=8`;
export const profileApi = "https://api.spotify.com/v1/me";
export const loginApi = `https://accounts.spotify.com/authorize?response_type=token&show_dialog=true&client_id=${
                         CLIENT_ID
                         }&scope=${encodeURIComponent(AREA)}&redirect_uri=${ encodeURIComponent(INIT_URL) }`;

export const logoutApi = "https://www.spotify.com/logout/";


