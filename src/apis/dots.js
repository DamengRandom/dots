import axios from 'axios';

const baseURL = `http://localhost:3526/dots`;

export const saveDot = (dot) => {
  return axios.post(baseURL, dot)
    .then(res => res.data);
}

export const fetchDots = () => {
  return axios.get(baseURL).then(res => res.data);
}

export const replaceDot = (updates) => {
  return axios
    .put(`${baseURL}/${updates.id}`, updates)
    .then(res => res.data);
}

export const removeDot = (id) => {
  return axios.get(`${baseURL}/${id}`);
}
