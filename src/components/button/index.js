import Style from "./style.css";


 
const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={Style.Button}
    >
      {children}
    </button>
  );
};

export default Button;
