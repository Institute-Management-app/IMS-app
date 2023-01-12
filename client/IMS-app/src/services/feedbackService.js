import axios from "./axios.js";

export default class feedbackService {

  async feedbackCreate(data) {
    const response = await axios.post( "/student/feedback", data);
    console.log("8888888888888888888888");
    console.log(response.data);
    return response.data;
  }
  async feedbackParent(data) {
    const response = await axios.post( "/parent/feedback", data);
    console.log("8888888888888888888888");
    console.log(response.data);
    return response.data;
  }

}
