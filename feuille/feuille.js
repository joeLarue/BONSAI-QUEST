export class Feuille {
    constructor({
        radius = null,
        segment = null,
        rotation_x = null,
        rotation_y = null,
        rotation_z = null,
    }={}) {
        this.radius = radius
        this.segment = segment
        this.rotation_x = rotation_x
        this.rotation_y = rotation_y
        this.rotation_z = rotation_z
    }
    growth() {
        if (this.radius < 1) {
            this.radius *= 1.1
        }
    }
}