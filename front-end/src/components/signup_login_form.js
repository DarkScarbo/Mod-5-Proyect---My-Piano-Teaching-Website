import React from "react";
import { logInApi, signUpApi } from "../services/api";

class SignUpLogInForm extends React.Component {
  state = {
    logStatus: false
  };

  changeLogStatus = () => {
    this.setState({ logStatus: !this.state.logStatus });
  };

  handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (this.state.logStatus === false) {
      logInApi(email, password).then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          this.props.logIn(data);
        }
      });
    } else {
      const name = e.target.username.value;

      signUpApi(name, email, password).then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          logInApi(email, password).then(data => {
            if (data.error) {
              alert(data.error);
            } else {
              this.props.logIn(data);
            }
          });
        }
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.logStatus ? (
          <button onClick={this.changeLogStatus}>Log In</button>
        ) : (
          <button onClick={this.changeLogStatus}>Sign Up</button>
        )}
        <form onSubmit={this.handleSubmit} name="form">
          {this.state.logStatus && (
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                required
                // onChange={this.handleChange}
              />
            </div>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              required
              // onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              // onChange={this.handleChange}
            />
          </div>
          <div>
            {this.state.logStatus ? (
              <button>Signup</button>
            ) : (
              <button>Login</button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpLogInForm;
