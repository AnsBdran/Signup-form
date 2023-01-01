import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import Input from "../Input";
import Checkbox from "../Checkbox";
import Button from "../Button";
import Or from "../Or";

import "./Form.scss";
import Warn from "../Warn";

function Form() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(5).max(12).required("Required"),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
      accept_terms: false,
    },
    validationSchema: validationSchema,
    // onSubmit: validateData,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="filed">
        <Input
          title="Email address*"
          placeholder="Enter email address"
          value={formik.values.email}
          handleChange={formik.handleChange}
          name="email"
          handleBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
          <Warn content={formik.errors.email} />
        )}
      </div>
      <div className="filed">
        <Input
          isPasswordType={true}
          title="Create password*"
          placeholder="Password"
          value={formik.values.password}
          handleChange={formik.handleChange}
          name="password"
          handleBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && (
          <Warn content={formik.errors.password} />
        )}
      </div>
      <div className="filed">
        <Input
          isPasswordType={true}
          title="Repeat password*"
          placeholder="Repeat password"
          value={formik.values.confirm_password}
          handleChange={formik.handleChange}
          name="confirm_password"
          handleBlur={formik.handleBlur}
        />
        {formik.errors.confirm_password && formik.touched.confirm_password && (
          <Warn content={formik.errors.confirm_password} />
        )}
      </div>
      <div className="filed">
        <Checkbox
          label="I agree to terms & conditions"
          name="accept_terms"
          value={formik.values.accept_terms}
          toggleCheck={formik.handleChange}
        />
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
