import axios from "axios";

const userTokenExist = sessionStorage.getItem("token");

export default () =>
  axios.create({
    baseURL: `/api`,
    headers: (!!userTokenExist) ? {'Authorization': `${userTokenExist}`} : null
  });
