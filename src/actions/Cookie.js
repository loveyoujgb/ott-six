import Cookies from "universal-cookie";
import { __getUser } from "../redux/modules/loginSlice";

const cookies = new Cookies();

export function setTokenToCookie(data) {
  let now = new Date();
  let after1m = new Date();
  after1m.setMinutes(now.getMinutes() + 30);
  cookies.set("Authorization", data, { path: "/", expires: after1m });
}

export function logout() {
  cookies.remove("Authorization", { path: "/" });
}

export function cookieCkeck() {
  const accessCookie = cookies.get("Authorization");
  if (accessCookie === undefined) {
    return false;
  } else {
    return true;
  }
}