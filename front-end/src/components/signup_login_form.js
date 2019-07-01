import React from "react";

class SignUpLogInForm extends React.Component {
  state = {
    signup: true,
    password: ""
  };

  changeSignupState = () => {
    this.setState({ signup: !this.state.signup });
  };

  render() {
    return (
      <div>
        {this.state.signup ? (
          <button onClick={this.changeSignupState}>Signup</button>
        ) : (
          <button onClick={this.changeSignupState}>Login</button>
        )}
        <form onSubmit={this.props.signIn} name="form">
          {this.state.signup && (
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
            {this.state.signup ? (
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
