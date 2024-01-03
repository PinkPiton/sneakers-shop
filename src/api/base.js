import axios from "axios";

export const israfilRequester = axios.create({
  baseURL: "https://the-sneaker-database.p.rapidapi.com/sneakers",
  params: {
    limit: "50",
  },
  headers: {
    "X-RapidAPI-Key": "cd8a7e5513msh938cdcb01d04db4p1ea0bfjsnfca17777adbe",
    "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
  },
});
