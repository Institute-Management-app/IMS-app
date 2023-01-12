import axios from "axios";

//Add Common headers
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.baseURL = "http://localhost/api/v1";

// Add authentication token if exists.
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

// Export axios
export default axios;
