import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-5ae7f.firebaseio.com/"
});

export default instance;
