import React from "react";
import SignUpLogInForm from "./signup_login_form";

class LoginAndSignedupConteiner extends React.Component {
  render() {
    const { name, logOut } = this.props;
    return (
      <div>
        <SignUpLogInForm logIn={this.props.logIn} />
      </div>
    );
  }
}

export default LoginAndSignedupConteiner;
