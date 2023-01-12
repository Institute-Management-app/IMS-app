import axios from "./axios.js";

  const viewAll = async ()=> {
    const response = await axios.get("/admin/student/profile");
    return response.data;
  }
  const oneStudent = async ()=> {
    const response = await axios.get("/student/profile");
    return response.data;
  }
  const oneParent = async ()=> {
    const response = await axios.get("/parent/profile");
    return response.data;
  }
  const getAll = async ()=> {
    const response = await axios.get("/admin/parent/profile");
    console.log(response.data);
    return response.data;
  }
  const courseGetAll = async ()=> {
    const response = await axios.get("/admin/course");
    return response.data;
  }
  const feedback = async ()=> {
    const response = await axios.get("/admin/feedback");
    return response.data;
  }
  const getMarks = async ()=> {
    const response = await axios.get("/student/marks");
    return response.data;
  }
  const viewMark = async ()=> {
    const response = await axios.get("/parent/marks");
    return response.data;
  }
  const adminMark = async ()=> {
    const response = await axios.get("/admin/marks");
    return response.data;
  }
  export {viewAll,getAll,courseGetAll,feedback,oneStudent,oneParent,getMarks,viewMark,adminMark} 


