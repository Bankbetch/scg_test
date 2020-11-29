class XYZ {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  getAll() {
    return { x: this.x, y: this.y, z: this.z };
  }
}
module.exports = XYZ;
