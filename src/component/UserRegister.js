import React from "react";

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

const initialState = {
  username: "",
  email: "",
  password: "",
  usernameError: "",
  emailError: "",
  passwordError: "",
};

export default class UserRegister extends React.Component {
  state = initialState;

  validate = () => {
    let usernameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.username.length) {
      usernameError = "Username required";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid Email";
    }

    if (!this.state.password.length < 5) {
      passwordError = "Password must be more than 5";
    }

    if (usernameError || emailError || passwordError) {
      this.setState({
        usernameError,
        emailError,
        passwordError,
      });

      return false;
    }

    return true;
  };

  handleChange = (event, fieldName) => {
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
  };

  render() {
    return (
      <div className="formWrap">
        <form style={styles.formField} onSubmit={this.handleSubmit}>
          <input
            style={styles.inputField}
            onChange={(event) => this.handleChange(event, "username")}
            value={this.state.username}
            type="text"
            placeholder="Enter username"
          />
          {this.state.usernameError}
          <input
            style={styles.inputField}
            onChange={(event) => this.handleChange(event, "email")}
            type="text"
            placeholder="Enter email address"
          />
          {this.state.emailError}
          <input
            style={styles.inputField}
            onChange={(event) => this.handleChange(event, "password")}
            type="password"
            placeholder="******************"
          />
          {this.state.passwordError}
          <button style={styles.inputField} type="submit">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
