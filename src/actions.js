import axios from "axios";

axios.defaults.baseURL = "https://randomuser.me/api"; // GHANGE FOR REAL API

export const getAllProjects = () => {
  axios
    .get("/?results=5")
    .then(response => {
      console.log(response.data.results);
      return response.data.results;
    })
    .catch(err => {
      console.log(err);
    });
};
