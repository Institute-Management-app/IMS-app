import axios from "./axios.js";

export default class accountsService {
  

  async login(data) {
    const response = await axios.post( "/accounts/login", data);
    console.log("8888888888888888888888");
    console.log(response.data);
    return response.data;
  }
  
  async register(data) {
    console.log(this.baseurl);
    const response = await axios.post(
      "/admin/user/register",
      data
    );
    console.log("8888888888888888888888");
    console.log(response.data);
    return response.data;
  }

}
