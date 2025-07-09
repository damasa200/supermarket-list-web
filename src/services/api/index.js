import axios from "axios";
import{SAVE_USERNAME_PATH} from "../constants"


export const api = axios.create ({
  baseURL:"https://supermarket-list-api-b9oy.onrender.com",
  headers: {
    username: localStorage.getItem("SAVE_USERNAME_PATH") || "",
  },
});



