import axios from "axios";

let baseUrl = "http://localhost:8080/demo";
const defaultInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
  },
});
export default defaultInstance;
