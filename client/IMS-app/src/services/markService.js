import axios from "./axios.js";

export default class markService {
  async markCreate(data) {
    const response = await axios.post("/admin/mark/create", data);
    console.log("8888888888888888888888");
    console.log(response.data);
    return response.data;
  }

}
