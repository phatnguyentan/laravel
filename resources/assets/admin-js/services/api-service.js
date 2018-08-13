import { Config } from "../config/config";

class ApiService {
  static get(url) {
    return fetch(Config.apiUrl + url, {
      headers: { Accept: "application/json", Authorization: this.token }
    }).then(res => res.json());
  }

  static post(url, body) {
    return fetch(Config.apiUrl + url, {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.token
      }
    }).then(res => res.json());
  }

  static put(url, body) {
    return fetch(Config.apiUrl + url, {
      method: "put",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.token
      }
    }).then(res => res.json());
  }

  static delete(url, body) {
    return fetch(Config.apiUrl + url, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.token
      }
    }).then(res => res.json());
  }

  static get token() {
    return (
      "Bearer " +
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYxZDdmZDg5YWY1NzlhZTA5MzQyYTJjM2RkM2Y5MmQ2NGQ2ZTlkMzdkM2MwOGMxZTI2ZjgwMjU4OWY4YTg5OTZlNzY5NGQ1NmM1ODM1YmJlIn0.eyJhdWQiOiIxIiwianRpIjoiNjFkN2ZkODlhZjU3OWFlMDkzNDJhMmMzZGQzZjkyZDY0ZDZlOWQzN2QzYzA4YzFlMjZmODAyNTg5ZjhhODk5NmU3Njk0ZDU2YzU4MzViYmUiLCJpYXQiOjE1MzM2MTQ0ODEsIm5iZiI6MTUzMzYxNDQ4MSwiZXhwIjoxNTY1MTUwNDgxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.YHWecm90V0Un3GuQkGSFUQhm9JrwGOaUzhHYGTVvqH0sMJNWdsxfvtZnA3jZQ4V3SBpQebO4x4X0f9eq3VVrNYUKAT4FTi3xgJSN1tNfGSXx2vZZR-o2uI7xhPDE15I4eTODHtSznQm2yNFqJeRLaF7ra8sWGnF9CynqEn3KOP5EQUKE5PvbQtKEkjEHjqQofW148-IKSsbTtpdPCxmZ9iJOj6N2BwXUm_edZQOsQR2F5IGVN6Q3k4qEpc_UYTRRmKJ1dcnXP77WKzzLS1wUGAzi4oKotKqyU3J0xB6bZnqriOSH3JZYehjCsFspQ0hDMNkwtKTnl4VjmnTUjUIOlkclTJMpKpyShCyT_9RwS00Qns5Mk6qJaa8d7WGfyCoXz9LG5CiTaJNWCYHJcqj8VNnjlM-A_edOVZwLS6eeOKIRKVkGl56vk-FvXlnSdI1k8R46cKbGX8z9MLgcIlB-IX3v3NpAX-6AlQm7vk_xQodQHRmS5VA_fvAtGzpVlIIDbdG4b9wRGWgio61aD5KL0LmohdpUk59YTNHpaAM5E2vKW9sktq6cIFholGbqDaN2CXxOmcbKTS06BXHz-uPIKMdXfFhl7rlovuNGbdcJ1YXKkAWxcWONV_01Y-jXh4N6QNZAkm8o1MShOVsKLVtB-PSkR1bLm0uLWdNUMtdisPo"
    );
  }
}

export default ApiService;
