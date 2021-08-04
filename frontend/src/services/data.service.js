import axios from "axios";

const API_URL = "/api/";

const getSk = () => {
  return axios.get(API_URL + "solution-knowledge/", { headers:{'Access-Control-Allow-Origin': '*'}});
};

const getSubjects = () => {
  return axios.get(API_URL + "subjects/", { headers:{'Access-Control-Allow-Origin': '*'}});
};

const getCourses = () => {
  return axios.get(API_URL + "courses/", { headers:{'Access-Control-Allow-Origin': '*'}}); 
};



export default {
  getCourses,
  getSk,
  getSubjects,
};