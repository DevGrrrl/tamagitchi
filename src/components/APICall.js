import React, { Component } from "react";
import getUser from "../utils/helpers";
import UserCard from "./UserCard";

class APICall extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    getUser(this.props.user).then(user => {
      this.setState({ user });
    });
  }

  render() {
    return <UserCard {...this.state.user} />;
  }
}

export default APICall;
