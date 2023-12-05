import axios from "axios";

const api = axios.create({
  baseURL: "https://geo.ipify.org/api/v2/country,city,vpn",
  params: {
    apiKey: "at_E0NyDA1EWwQe0ceNjwhadCLwjFe8n",
  },
});

export default api;
