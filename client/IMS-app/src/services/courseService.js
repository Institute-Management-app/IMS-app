import axios from "./axios.js";

export default class courseService {

  async courseCreate(data) {
    const response = await axios.post("/admin/course/create", data);
    console.log("8888888888888888888888");
    console.log(response.data);
    return response.data;
  }
  async applyCourse(data) {
    const response = await axios.post( "/student/apply", data);
    console.log("8888888888888888888888");
    console.log(response.data);
    return response.data;
  }

}
