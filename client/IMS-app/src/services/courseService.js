import axios from "./axios.js";

export default class courseService {
  baseUrl = "http://localhost/api/v1";

  async courseCreate(data) {
    const response = await axios.post(this.baseUrl + "/admin/course/create", data);
    console.log("8888888888888888888888");
    console.log(response.data);
    return response.data;
  }

}
