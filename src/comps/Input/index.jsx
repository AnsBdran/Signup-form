import "./Input.scss";

function Input({
  isPasswordType,
  title,
  placeholder,
  handleChange,
  name,
  value,
  handleBlur,
}) {
  if (isPasswordType) {
    return (
      <div>
        <label>{title}</label>
        <input
          type="password"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          name={name}
          onBlur={handleBlur}
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
          value={value}
          onChange={handleChange}
          name={name}
          onBlur={handleBlur}
        />
      </>
    );
  }
}

export default Input;
