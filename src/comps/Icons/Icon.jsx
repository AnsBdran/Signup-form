import "./Icon.scss";
function Icon({ src, title }) {
  console.log(src);
  return (
    <div className="icon">
      <img src={src} alt={title} />
    </div>
  );
}

export default Icon;
