import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0a57c872d10e410ab6abe3583fd96c82",
  },
});
