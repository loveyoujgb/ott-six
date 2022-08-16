import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { __getUser } from "../redux/modules/loginSlice";

const cookies = new Cookies();

export function login({ id, password }) {
  if (id === "russ" && password === "whynot0") {
    return {
      access_token: "jx84e3kjew1njej3al2q9w",
      refresh_token: "g2rjfd7452bjfgn;a&*(jkehj",
    };
  } else {
    return undefined;
  }
}

// cookies.set("refresh_token", refresh_token, { sameSite: "strict" });
export function setRefreshTokenToCookie(data) {
  let now = new Date();
  let after1m = new Date();
  after1m.setMinutes(now.getMinutes() + 10);
  cookies.set("Authorization", data, { path: "/", expires: after1m });
}

export function logout() {
  console.log("localStorage set logout!");
  window.localStorage.setItem("logout", Date.now());
  cookies.remove("refresh_token");
}

export function getAccessToken() {
  const refresh_token = cookies.get("Authorization");
  console.log(refresh_token);
  if (refresh_token) {
    console.log("토큰이씀!");
    return true;
  } else {
    console.log(":언디파인");
    return false;
  }
  // if (refresh_token) {
  //   Dispatch(__getUser())
  // } else {
  //   return undefined;
  // }
}

// export function getAccessToken() {
//   const refresh_token = cookies.get("refresh_token");
//   if (refresh_token) {
//     return {
//       access_token: "dj7H8Jduyf,bw&%dkhdkszd",
//       refresh_token: "djKJ/dio2jk*4KJHydhen,wlLlmddjk",
//     };
//   } else {
//     return undefined;
//   }
// }

// export function getAccessToken() {
//   const refresh_token = cookies.get("refresh_token");
//   if (refresh_token) {
//     return {
//       access_token: "dj7H8Jduyf,bw&%dkhdkszd",
//       refresh_token: "djKJ/dio2jk*4KJHydhen,wlLlmddjk",
//     };
//   } else {
//     return undefined;
//   }
// }

// import Cookies from "universal-cookie";

// // import { Cookies } from "react-cookie";
// const cookies = new Cookies();

// export const setCookie = (name, value, option) => {
//   console.log(name, value, option);
//   return cookies.set(name, value, { ...option });
// };

// export const getCookie = (name) => {
//   console.log(name);
//   return cookies.get(name);
// };
