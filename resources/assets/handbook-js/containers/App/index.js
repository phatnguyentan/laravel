import React, { Component } from "react";
import { Config } from "../../config/config";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import Layout from "./layout";
import { ConfigContext, ApiContext } from "./contexts";
import ApiService from "../../../core/net/react/api-service";

class App extends Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.config = new Config();
    this.api = new ApiService();
    this.api.setConfig(this.config);
    this.api.setToken(
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY4MDM0YTYxY2U5YWQ5MGExNzMzZDQwN2FmNDQ3NGExZjMwZmYwM2NlMGI0OTZmZTZlZGNlNmIyY2Y3OWI1NTc3MDkyM2M5YmJjNmU2MmJiIn0.eyJhdWQiOiIxIiwianRpIjoiZjgwMzRhNjFjZTlhZDkwYTE3MzNkNDA3YWY0NDc0YTFmMzBmZjAzY2UwYjQ5NmZlNmVkY2U2YjJjZjc5YjU1NzcwOTIzYzliYmM2ZTYyYmIiLCJpYXQiOjE1MzU0NTA5NTEsIm5iZiI6MTUzNTQ1MDk1MSwiZXhwIjoxNTY2OTg2OTUxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.FBnMrVIzCpFrdI8H4H5CbqZHsAG-Rnijx7PWx9VulmNbgzesPuW1BybHMI4sEzOJyCHmw4H_TiKGGAm_i2gaGhBh9LtQABO5Bmdh4Rmai3SBi3cPmOiADlp26bn3Ja9N-D9XDEmH8Hxv-lId9o0prEqPJZwhINAVqAOe497KHYEcNwyW2-HpOJk33v1q-mdHWQ2fM9Vqaj4U33AETQVgbBkW_nKQHYzyLlFBFzZVn-Nng_f4wKinC_HJUV4c88GgocVRDophiJ8JzNMyXyrgf0hXZqNpgs1pauaR8vqlxNJvx04KafFvMF2OIfEmohG0ZEckwzez3u9cpTCcexH6BrqvWRddgrzylHb_2MBWXK-GG_leO2Ix7FJZ4A_4rkvRJtE5u5IAPO5BxXD_RY0IYzf5aCc-iasTPqZ3gdPs_pEZGjYwLUM7Xwx-wK7qert3oSlcBd_s_2W5grcSMW8pjyG-ZCkZ32NeKlK5CrY84lJsbVX8Q9r4Y6SsVgZUUKYGCvKWrW2C0o91AeOPVeDLbS19Tpad7EMDp7vmmH70EF3b55RmuB7wXQwY_pQL-dXh4gk06EY7GiPkCjUIAauyMAje84EfQ-UfpFWCLAnNUykW9OYvXs2T7dnOldVaSIQ_brohuMZLm9dha9C-CKQBWk8JizOVs4begh8Z81KlSPw"
    );
  }
  render() {
    return (
      <ConfigContext.Provider value={this.config}>
        <ApiContext.Provider value={this.api}>
          <Layout />
        </ApiContext.Provider>
      </ConfigContext.Provider>
    );
  }
}
App.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};
export default withCookies(App);
