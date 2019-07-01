import React from "react";

class SignUpLogInForm extends React.Component {
  state = {
    logStatus: true
  };

  changeLogStatus = () => {
    this.setState({ logStatus: !this.state.logStatus });
  };

  render() {
    return (
      <div>
        {this.state.logStatus ? (
          <button onClick={this.changeLogStatus}>Sign Up</button>
        ) : (
          <button onClick={this.changeLogStatus}>Log In</button>
        )}
        <form onSubmit={this.props.logIn} name="form">
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
