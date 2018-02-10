import React, { Component } from "react";
// import { getUserData } from "../../utils/data_helpers";

const ChooseGit = props =>  {
   
    return (
       
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.user}
          placeholder="CHOOSE GIT"
          onChange={props.handleChange}
        />
      </form>
    )
  }


export default ChooseGit;

//React.createElement - so we need to import react on this page
//Define a new class and give it all of the functionality that React.Component has
