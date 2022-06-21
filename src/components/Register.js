import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const Register = () => {
  const [fieldName, setFieldName] = useState({
    initialState,
  });

  const navigate = useNavigate();

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
    navigate("/welcome");
  };

  return (
    <div className="formWrap">
      <form style={styles.formField} onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="username"
          variant="outlined"
          name="username"
          style={styles.inputField}
          onChange={handleChange}
          placeholder="username"
        />
        {fieldName.usernameError}
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          style={styles.inputField}
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          required
        />
        {fieldName.emailError}

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          style={styles.inputField}
          onChange={handleChange}
          type="password"
          placeholder="******************"
          required
        />
        {fieldName.passwordError}
        <Button type="submit" variant="contained" color="success">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
