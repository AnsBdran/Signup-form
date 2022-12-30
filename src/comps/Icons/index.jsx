import icons from "./icons.js";
import Icon from "./Icon";

function Icons() {
  return (
    <>
      {icons.map((icon) => (
        <Icon src={icon.src} title={icon.title} />
      ))}
    </>
  );
}

export default Icons;
