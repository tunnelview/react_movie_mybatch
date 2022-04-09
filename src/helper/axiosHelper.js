import axios from "axios";

const api = "http://www.omdbapi.com/?apikey=32fb9576&";

export const fetchMovie = (title) => {
  //call server
  //   axios.get(api);
  const response = axios.get(api);
};
