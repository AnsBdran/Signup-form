import "./Button.scss";
// import google from "../../../public/imgs/logos/google.svg";

function Button({ content, light, handleClick }) {
  const lightClass = light ? "light" : "";
  return (
    <button
      className={lightClass}
      type={light ? "button" : ""}
      onClick={handleClick}
    >
      {light && <img src="imgs/logos/google.svg" alt="google icon" />}
      <span>{content}</span>
    </button>
  );
}

export default Button;
