import React from "react";
import HealthBar from "./HealthBar";

const UserCard = ({ login, avatar_url }) => {
  return (
    <div className="results">
      <h1 className="username">{login}</h1>
      <img src={avatar_url} alt="profile pic" className="user__image" />
      <HealthBar />
    </div>
  );
};

export default UserCard;
