export class Config {
  constructor() {
    this.config = require(`./env/config.json`);
    this.config = {
      ...this.config,
      ...require(`./env/config.${process.env.NODE_ENV}.json`)
    };
    return new Proxy(this, this);
  }
  get(target, prop) {
    return this.config[prop];
  }
}
