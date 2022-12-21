import axios from "./axios.js";

export default class accountsService {
  baseUrl = "http://localhost/api/v1";

  async login(data) {
    const response = await axios.post(this.baseUrl + "/accounts/login", data);
    console.log("8888888888888888888888");
    console.log(response.data);
    return response.data;
  }

  async register(data) {
    const response = await axios.post(
      this.baseUrl + "/admin/user/create",
      data
    );
    console.log("8888888888888888888888");
    console.log(response.data);
    return response.data;
  }
}
