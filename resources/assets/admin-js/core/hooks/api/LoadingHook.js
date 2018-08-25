import { Hook } from "../Hook";

export class LoadingHook extends Hook {
  before(params) {
    console.log("loading");
    console.log(document);
  }
  after(params) {
    console.log("stop");
  }
}
