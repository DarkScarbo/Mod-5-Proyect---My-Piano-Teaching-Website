import React from "react";

const WelcomeUser = props => (
  <div>
    Welcome {props.userName}
    <button onClick={props.logOut}>Sign out</button>
  </div>
);

export default WelcomeUser;
