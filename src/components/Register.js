import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  formField: {
    backgroundColor: "#fff",
    padding: "50px 30px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "3px",
    border: "solid 1px #ccc",
    margin: "50px auto 8px",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    lineHeight: "",
  },
  inputField: {
    marginBottom: "15px",
  },
  Button: {
    height: "45px",
  },
};

let initialState = {
  username: "",
  email: "",
  password: "",
};

const Register = () => {
  const [fieldName, setFieldName] = useState({
    initialState,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    fieldName[name] = value;
    setFieldName(fieldName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fieldName);
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
          required
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
          required="password"
        />
        {fieldName.passwordError}
        <Button
          style={styles.Button}
          type="submit"
          variant="contained"
          color="success"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
