export class Bois {
    constructor({
        height = null,
        width = null,
        rotation_x = null,
        rotation_y = null,
        rotation_z = null,
    }={}) {
        this.height = height,
        this.width = width,
        this.rotation_x = rotation_x
        this.rotation_y = rotation_y
        this.rotation_z = rotation_z
    }
    growth() {
        this.height *= 1.1
        this.width *= 1.2
    }
}