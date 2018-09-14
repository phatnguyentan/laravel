import { Hook } from "../hook";

export class LoadingHook extends Hook {
  constructor() {
    super();
    this.interval = null;
  }
  before(params) {
    this.startLoad();
  }
  after(params) {
    this.endToEnd(
      parseInt(document.getElementById("loading-progress").style.width)
    );
  }

  endToEnd(start = 0) {
    clearInterval(this.interval);
    let progress = start;
    let el = document.getElementById("loading-progress");
    el.style.display = "block";
    this.interval = setInterval(() => {
      if (progress > 100) {
        clearInterval(this.interval);
        el.style.display = "none";
      }
      progress += 5;
      el.style.width = progress + "%";
    }, 10);
  }
  startLoad(start = 0) {
    clearInterval(this.interval);
    let progress = start;
    let el = document.getElementById("loading-progress");
    el.style.display = "block";
    this.interval = setInterval(() => {
      if (progress > 80) {
        clearInterval(this.interval);
        // el.style.display = "none";
      }
      progress += 5;
      el.style.width = progress + "%";
    }, 20);
  }
}
