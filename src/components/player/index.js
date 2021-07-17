import React from "react";
import Style from './style.module.css';

const Player = ({ children, ...props }) => {
  return (
       <div className={Style.Player} {...props}>
         {children}
        </div>
  )
  
};

export default Player;