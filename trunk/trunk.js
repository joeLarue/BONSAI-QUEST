export class Branch {
  constructor({
    height = 1,
    radius = 0.5,
    rotationX = 180,
    rotationY = 0,
 } = {}) {
    this.height = height;
    this.radius = radius;
    this.rotationX = rotationX;
    this.rotationY = rotationY;
  }
}