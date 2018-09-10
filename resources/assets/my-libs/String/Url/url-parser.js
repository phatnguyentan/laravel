export default class UrlParser {
  constructor(url) {
    this.url = url;
    this.id = "";
    this.hostname = "";
    this.pathname = "";
    this.paths = [];
    this.parse();
  }

  parse(url) {
    if (!url) {
      url = this.url;
    }
    let link = document.createElement("a");
    link.href = url;
    this.hostname = link.hostname;
    this.pathname = link.pathname;
    this.paths = link.pathname.split("/");
    this.paths.shift();
    this.id = this.paths[this.paths.length - 1];
  }

  getQuery() {
    let query = this.url.match(/[^\?\&]([\w\[\]]+\=\w+)/g);
    if (query) {
      return this.url.match(/[^\?\&]([\w\[\]]+\=\w+)/g);
    }
    return [];
  }

  getQueryHash() {
    return this.getQuery().reduce((acc, curr) => {
      let k;
      let v;
      [k, v] = curr.split("=");
      acc[k] = v;
      return acc;
    }, {});
  }
  getQueryString() {
    return this.getQuery().join("&");
  }

  getId() {
    let urls = window.location.href.split("/");
    urls = urls[urls.length - 1].split("?");
    return urls[0];
  }
}
