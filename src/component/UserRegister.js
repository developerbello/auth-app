import React, { useState } from "react";

const styles = {
  formField: {
    margin: "20px auto 0",
    width: "300px",
    display: "flex",
    flexDirection: "column",
  },
  inputField: {
    padding: "13px 10px",
    marginBottom: "20px",
  },
};

let initialState = {
  username: "",
  email: "",
  password: "",
  usernameError: "",
  emailError: "",
  passwordError: "",
};

const UserRegister = () => {
  const [fieldName, setFieldName] = useState({
    initialState,
  });

  const validate = () => {
    let usernameError = "";
    let emailError = "";
    let passwordError = "";

    if (!fieldName.username) {
      usernameError = "Not Empty";
    }

    if (!fieldName.password) {
      passwordError = "Not Empty";
    }

    if (usernameError || emailError || passwordError) {
      setFieldName({
        usernameError,
        emailError,
        passwordError,
      });
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    fieldName[name] = value;
    setFieldName(fieldName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log(fieldName);
    }
    setFieldName({
      initialState,
    });
  };

  return (
    <div className="formWrap">
      <form style={styles.formField} onSubmit={handleSubmit}>
        <input
          name="username"
          style={styles.inputField}
          onChange={handleChange}
          type="text"
          placeholder="Enter username"
          required
        />
        {fieldName.usernameError}
        <input
          name="email"
          style={styles.inputField}
          onChange={handleChange}
          type="email"
          placeholder="Enter email address"
          required
        />
        {fieldName.emailError}
        <input
          name="password"
          style={styles.inputField}
          onChange={handleChange}
          type="password"
          placeholder="******************"
          required
        />
        {fieldName.passwordError}
        <button style={styles.inputField} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default UserRegister;
