export class Bonsai {
  constructor({
    height = 1,
    width = 0.5,
  } = {}) {
    this.height = height
    this.width = width
    this.pot = null
  }

    growth() {
    this.height += 0.05
    this.width += 0.01
  }
}