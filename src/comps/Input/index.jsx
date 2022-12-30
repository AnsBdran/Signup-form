import { useState } from "react";
import "./Input.scss";
function Input({ type, title, placeholder }) {
  const [val, setval] = useState("");
  const handleInput = (e) => {
    setval(e.target.value);
  };

  if (type === "password") {
    return (
      <div>
        <label>{title}</label>
        <input
          type="password"
          placeholder={placeholder}
          value={val}
          onChange={handleInput}
          required
        />
      </div>
    );
  } else {
    return (
      <>
        <label>{title}</label>
        <input
          type="email"
          placeholder={placeholder}
          value={val}
          onChange={handleInput}
          required
        />
      </>
    );
  }
}

export default Input;
