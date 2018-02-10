import { token } from "../token";
const API_BASE = "https://api.github.com";

const getUser = user => {
  return fetch(`${API_BASE}/users/${user}?acess_token=${token}`)
    .then(res => {
      if (res.status !== 200) {
        console.log("Something went wrong with the request");
      }
      return res.json();
    })
    .catch(err => {
      throw new Error("Fetching failed");
    });
};

export default getUser;