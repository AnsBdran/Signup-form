import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import Input from "../Input";
import Checkbox from "../Checkbox";
import Button from "../Button";
import Or from "../Or";

import "./Form.scss";

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    agree_on_terms: "",
  });

  function handleChange(e) {
    console.log(e);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string(),
  });
  return (
    <form>
      <div>
        <Input
          title="Email address*"
          placeholder="Enter email address"
          value={formData.email}
          handleChange={handleChange}
          name="email"
        />
      </div>
      <div>
        <Input
          isPasswordType={true}
          title="Create password*"
          placeholder="Password"
          value={formData.password}
          handleChange={handleChange}
          name="password"
        />
      </div>
      <div>
        <Input
          isPasswordType={true}
          title="Repeat password*"
          placeholder="Repeat password"
          value={formData.confirm_password}
          handleChange={handleChange}
          name="confirm_password"
        />
      </div>
      <div>
        <Checkbox label="I agree to terms & conditions" name="agree_on_terms" />
      </div>
      <div>
        <Button content="Register Account" />
        <Or />
        <Button content="Login" light={true} />
      </div>
    </form>
  );
}

export default Form;
