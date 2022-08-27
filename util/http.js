import Axios from "axios";
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

export async function getInfoFromApi(url) {
  const response = Axios.get(constants.base.url + url).catch((error) =>
    console.error(error)
  );
  return response;
}
