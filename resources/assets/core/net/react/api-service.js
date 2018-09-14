class ApiService {
  constructor() {
    this.hooks = [];
  }

  setToken(token) {
    this.token = token;
  }

  setConfig(config) {
    this.config = config;
  }

  addHooks(hook) {
    this.hooks.push(hook);
  }

  auth(res) {
    if (!res.ok && res.status == 401) {
      throw new Error("Unauthorized");
    }
  }

  getBearer() {
    return "Bearer " + this.token;
  }

  runHooksBefore() {
    this.hooks.forEach(h => {
      h.before();
    });
  }

  runHooksAfter() {
    this.hooks.forEach(h => {
      h.after();
    });
  }

  isAbsoluteUrl(url) {
    if (url.match(/^http/g)) {
      return true;
    }
    return false;
  }

  get(url) {
    this.runHooksBefore();
    url = this.isAbsoluteUrl(url) ? url : this.config.apiUrl + url;
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.getBearer()
      }
    })
      .then(res => {
        this.runHooksAfter();
        this.auth(res);
        return res.json();
      })
      .catch(err => {
        if (err.message == "Unauthorized")
          window.location.replace("/admin/login");
      });
  }

  post(url, body) {
    this.runHooksBefore();
    url = this.isAbsoluteUrl(url) ? url : this.config.apiUrl + url;
    return fetch(url, {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.getBearer()
      }
    })
      .then(res => {
        this.runHooksAfter();
        this.auth(res);
        return res.json();
      })
      .catch(err => {
        if (err.message == "Unauthorized")
          window.location.replace("/admin/login");
      });
  }

  put(url, body) {
    this.runHooksBefore();
    url = this.isAbsoluteUrl(url) ? url : this.config.apiUrl + url;
    return fetch(url, {
      method: "put",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.getBearer()
      }
    })
      .then(res => {
        this.runHooksAfter();
        this.auth(res);
        return res.json();
      })
      .catch(err => {
        if (err.message == "Unauthorized")
          window.location.replace("/admin/login");
      });
  }

  delete(url, body) {
    this.runHooksBefore();
    url = this.isAbsoluteUrl(url) ? url : this.config.apiUrl + url;
    return fetch(url, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.getBearer()
      }
    })
      .then(res => {
        this.runHooksAfter();
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
