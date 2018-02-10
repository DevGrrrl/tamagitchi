import React, { Component } from "react";
import ChooseGit from "./components/ChooseGit";
import APICall from "./components/APICall";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      chosen: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ user: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ chosen: true });
  }
  render() {
    return (
      <div className="box">
        <div className="egg">
          <div className="screen">
            {!this.state.chosen ? (
              <ChooseGit
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                chooseUser={user => {
                  this.setState({ user });
                }}
              />
            ) : (
              <APICall user={this.state.user} />
            )}

            <div className="shadowline__l" />
            <div className="shadowline__inside__r" />
            <div className="shadowline__r" />
            <div className="shadowline__b" />
            <div className="screen__top" />
            <div className="screen__bottom" />
          </div>
          <div className="screen_dynamic" />

          <div className="base-shadow" />
          <div className="egg__top" />
          <div className="egg__highlight" />

          <div className="button__container">
            <div className="button__left" />
            <div className="button__center" />
            <div className="button__right" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
