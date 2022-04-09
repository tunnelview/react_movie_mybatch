import axios from "axios";

const api = "http://www.omdbapi.com/?i=tt3896198&apikey=2016dc0e&";

export const fetchMovie = (title) => {
  //call server
  //   axios.get(api);
  return axios.get(api + "t=" + title);
};
