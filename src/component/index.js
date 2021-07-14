import Style from "./stylePlayer.css";

const player = ({ children }) => {
  return <div className={Style.player}>{children}</div>;
};

export default player;