import Cookies from "universal-cookie";
import { __getUser } from "../redux/modules/loginSlice";

const cookies = new Cookies();

export function setTokenToCookie(data) {
  let now = new Date();
  let after1m = new Date();
  after1m.setMinutes(now.getMinutes() + 10);
  cookies.set("Authorization", data, { path: "/", expires: after1m });
}

export function logout() {
  cookies.remove("Authorization", { path: "/" });
}

export function getTokenCookie() {
  const accessCookie = cookies.get("Authorization");
  if (accessCookie) {
    return true;
  } else {
    return false;
  }
}
