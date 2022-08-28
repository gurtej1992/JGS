import Axios from "axios";
import axios from "axios";

export const constants = {
  base: {
    url: "http://app.jainmunisudarshan.com/Codeigniter-User-Panel-Management/apis/",
  },
  endPoints: {
    getSocialLinks: "sociallinks/getsociallinks",
    register: "user/register",
    verifyRegister: "user/verifyregisterotp",
    verifyOTP: "user/verifyotp",
    login: "user/loginUser",
    getTasks: "Dailytasks/getUsersTasks",
    saveTasks: "Dailytasks/saveUsersTask",
    getBooks: "Otherlinks/getBooks",
    getBhajans: "Otherlinks/getBhajans",
  },
};
// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: constants.base.url,
  timeout: 10000,
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = (token) => {
  console.log("------- " + token);
  APIKit.interceptors.request.use(function (config) {
    config.headers.Authorization = token;
    return config;
  });
};

export default APIKit;

export async function getInfoFromBackend(url) {
  const response = Axios.get(constants.base.url + url).catch((error) =>
    console.error(error)
  );
  return response;
}
export async function sendInfoToBackend(url, payload) {
  const res = APIKit.post(constants.base.url + url, payload).catch((error) =>
    console.error(error)
  );
  return res;
}
