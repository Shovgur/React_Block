import { create } from "apisauce";
import { url } from "inspector";
import { registerUserData } from "../Types/auth";

const API = create({ baseURL: "https://studapi.teachmeskills.by" });
const registerUser = (data: registerUserData) => {
  return API.post("/auth/users/", data);
};

export default {
  registerUser,
};
