import React from "react";
import Style from './style.module.css'

const Album = ({children, props}) => {
    return (
      <p {...props} className={Style.album}>{children}</p>
    )
  }
  
  export default Album;