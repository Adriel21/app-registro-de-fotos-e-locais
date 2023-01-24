import axios from "axios";

const api = axios.create({
    baseURL: "https://appdesafio-403ed-default-rtdb.firebaseio.com/",
  });
  
  export default api;