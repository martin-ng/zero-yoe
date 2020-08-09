"use strict";

class Source {
  constructor(opts) {
    this.url = opts.url;
    this.getLatestData = opts.getLatestData;
  }

  async fetch() {
    const { name } = this;
    const data = await this.getLatestData();
  }
}
