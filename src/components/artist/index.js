import React from "react";
import Style from './style.module.css';

const Artist = ({children, props}) => {
    return (
      <div {...props} className={Style.artistName}>
        {children}
      </div>
    )
  }
  
  export default Artist;