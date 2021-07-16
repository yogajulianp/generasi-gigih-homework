import Style from "./style.css";

const Image = ({imageUrl}) => {
    return (
      <img className={Style.Image} src={imageUrl} alt="play music"/>
    );
  }
  
  export default Image;