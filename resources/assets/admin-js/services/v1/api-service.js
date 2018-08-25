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

  get(url) {
    this.runHooksBefore();
    return fetch(this.config.apiUrl + url, {
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
    return fetch(this.config.apiUrl + url, {
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
    return fetch(this.config.apiUrl + url, {
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
    return fetch(this.config.apiUrl + url, {
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
