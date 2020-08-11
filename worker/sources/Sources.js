"use strict";

class Source {
  constructor(opts) {
    this.name = opts.name;
    this.getLatest = opts.getLatest;
  }

  async fetch() {
    const { name } = this;
    const data = await this.getLatest();
    return {
      [name]: data,
    };
  }
}

module.exports = Source;
