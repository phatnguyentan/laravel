export default class QueryBuilder {
  getQuery(object) {
    if (typeof object == "object") {
      let str = "";
      for (let param in object) {
        str += param + "=" + object[param] + "&";
      }
      str = str.slice(0, -1);
      return "?" + str;
    } else {
      return object;
    }
  }
}
