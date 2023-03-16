import axios from "axios";

const axiosIanstance = axios.create({
  baseURL: "http://localhost:9000",
});

export default axiosIanstance;
