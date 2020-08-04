import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("A certain unexpected error: ", error);
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  pust: axios.put,
  delete: axios.delete,
};
