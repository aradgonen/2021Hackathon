import axios from "axios";

const API_URL = "/api/";
const config = {}
if(localStorage.getItem("user")){
  config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("user").key}` }
};
}


const getSk = () => {
  return axios.get(API_URL + "solution-knowledge/", { headers:{'Access-Control-Allow-Origin': '*'}});
};

const getSubjects = () => {
  return axios.get(API_URL + "subjects/", { headers:{'Access-Control-Allow-Origin': '*'}});
};

const getCourses = () => {
  return axios.get(API_URL + "courses/", { headers:{'Access-Control-Allow-Origin': '*'}}); 
};

const setSk = (data) => {
  return axios.post(API_URL + "solution-knowledge/", data,config)
}

export default {
  getCourses,
  getSk,
  getSubjects,
  setSk,
};