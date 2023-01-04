import "./Checkbox.scss";

function Ckeckbox({ label, value, toggleCheck, name }) {
  // const checkedClass = checked ? "checked" : "";

  return (
    <div className="check">
      <input
        type="checkbox"
        name={name}
        onChange={toggleCheck}
        id={label}
        value={value}
      />
      {/* <div className={"checkbox " + checkedClass}></div> */}
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export default Ckeckbox;
