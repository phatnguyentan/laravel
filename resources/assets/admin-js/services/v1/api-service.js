import { Config } from "../../config/config";

class ApiService {
  constructor(token = "") {
    this.token = token;
  }

  auth(res) {
    if (!res.ok && res.status == 401) {
      throw new Error("Unauthorized");
    }
  }

  get(url) {
    return fetch(Config.apiUrl + url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.token
      }
    })
      .then(res => {
        this.auth(res);
        return res.json();
      })
      .catch(err => {
        if (err.message == "Unauthorized")
          window.location.replace("/admin/login");
      });
  }

  post(url, body) {
    return fetch(Config.apiUrl + url, {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.token
      }
    })
      .then(res => {
        this.auth(res);
        return res.json();
      })
      .catch(err => {
        if (err.message == "Unauthorized")
          window.location.replace("/admin/login");
      });
  }

  put(url, body) {
    return fetch(Config.apiUrl + url, {
      method: "put",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.token
      }
    })
      .then(res => {
        this.auth(res);
        return res.json();
      })
      .catch(err => {
        if (err.message == "Unauthorized")
          window.location.replace("/admin/login");
      });
  }

  delete(url, body) {
    return fetch(Config.apiUrl + url, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.token
      }
    })
      .then(res => {
        this.auth(res);
        return res.json();
      })
      .catch(err => {
        if (err.message == "Unauthorized")
          window.location.replace("/admin/login");
      });
  }
}

export default ApiService;
