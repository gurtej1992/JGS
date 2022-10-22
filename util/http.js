import Axios from "axios";
import axios from "axios";
import { setToken } from "./helper";

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
    getEvents: "Otherlinks/getevents",
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
  setToken(token);
  APIKit.interceptors.request.use(function (config) {
    config.headers.Authorization = token;
    return config;
  });
};

export default APIKit;

export async function getInfoFromBackend(url, token = "") {
  const headers = {
    Authorization: token,
  };
  console.log(headers);
  const response = Axios.get(constants.base.url + url, { headers }).catch(
    (error) => console.error(error)
  );
  return response;
}
export async function sendInfoToBackend(url, payload) {
  const res = APIKit.post(constants.base.url + url, payload).catch((error) =>
    console.error(error)
  );
  return res;
}
