import axios from "./axios.js";

export default class passwordService {

  async passwordUpdate(data) {
    const response = await axios.post("/student/profile/update", data);
    console.log("8888888888888888888888");
    console.log(response.data);
    return response.data;
  }
  async passwordChange(data) {
    const response = await axios.post("/parent/profile/update", data);
    console.log("8888888888888888888888");
    console.log(response.data);
    return response.data;
  }


}
