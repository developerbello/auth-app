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

export default class AuthForm extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (event, fieldName) => {
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
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
          <input
            style={styles.inputField}
            onChange={(event) => this.handleChange(event, "email")}
            type="text"
            placeholder="Enter email address"
          />
          <input
            style={styles.inputField}
            onChange={(event) => this.handleChange(event, "password")}
            type="password"
            placeholder="******************"
          />
          <button style={styles.inputField} type="submit">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
