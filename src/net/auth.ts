import * as U from "./utils.ts";
import { apiPrefix } from "../../config.ts";

export const login = async (form: { login: string | undefined; pw: string | undefined; }) => {
  console.log(form.login);
  console.log(form.pw);
  const data = {
    identityKey: form.login,
    type: "email",
    password: form.pw,
  };

  const r = await fetch(`${apiPrefix}pw-login`, {
    method: "POST",
    credentials:"include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: U.getFormBody(data),
  });

  const res = await r.json();
  if (res.success) {
    const { id, identityKey, role } = res.model.authorized;
    const email = res.model.authorized.user_info.email;
    const profile = { id, identityKey, email };

    window.localStorage.setItem("profile", JSON.stringify(profile));
    window.localStorage.setItem("role", role);

    // const cookie = r.headers.get('set-cookie');
    // console.log(cookie);

    // let getting = browser.cookies.get({url: "http://localhost:3000"});

    return Promise.resolve(true);
  }

  return Promise.reject({ email: ["Login or password is wrong"] });
};//login

export const sendOneTimeLogin = async (email: string) => {
  const request = await fetch(`${apiPrefix}one-time-pin`, {
    method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"},
    body: U.getFormBody({ identityKey: email }),
  });

  const response = await request.json();

  if (response.success) {}
};
