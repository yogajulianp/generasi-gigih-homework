import React from "react";
import Style from "./style.module.css";

const Title = ({children, props}) => {
    return (
      <p {...props} className={Style.Title}>{children}</p>
    )
  }
  
  export default Title;