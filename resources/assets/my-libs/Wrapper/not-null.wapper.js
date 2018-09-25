export default class NotNullWapper {
  constructor(object) {
    Object.keys(object).forEach(k => {
      this[k] = object[k] !== null ? object[k] : "";
    });
  }
}
