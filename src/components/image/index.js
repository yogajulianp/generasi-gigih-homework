import React from "react";
import Style from "./style.module.css";

const Image = ({imageUrl, props}) => {
    return (
      <img {...props} className={Style.Image} src={imageUrl} alt="play music"/>
    );
  };
  
  export default Image;