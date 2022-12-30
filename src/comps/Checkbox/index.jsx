import { useState } from "react";
import "./Checkbox.scss";

function Ckeckbox({ label }) {
  const [checked, setChecked] = useState(false);

  const checkedClass = checked ? "checked" : "";

  const toggleCheck = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className="check" onClick={toggleCheck}>
      <div className={"checkbox " + checkedClass}></div>
      <label>{label}</label>
    </div>
  );
}

export default Ckeckbox;
