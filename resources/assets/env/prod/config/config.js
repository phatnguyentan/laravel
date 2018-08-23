export class Config {
  static adminToken;
  static get adminPrefix() {
    return "/admin";
  }
  static get apiUrl() {
    return "http://moriko/api";
  }
  static get apiAdminUrl() {
    return "moriko/api/admin";
  }
}
