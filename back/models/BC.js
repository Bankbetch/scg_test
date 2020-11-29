class BC {
  constructor(b, c) {
    this.b = b;
    this.c = c;
  }
  getAll() {
    return { b: this.b, c: this.c };
  }
}
module.exports = BC;
