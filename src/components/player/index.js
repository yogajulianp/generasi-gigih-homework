import Style from "./style.css";

const Player = ({ children }) => {
  return <div className={Style.player}>{children}</div>;
};

export default Player;