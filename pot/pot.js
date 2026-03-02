export class Pot {
    constructor({
        height = 1
    } = {}) {
        this.height = height
        this.bonsai = null
    }

    plant(bonsai) {
        if (!this.bonsai) {
            this.bonsai = bonsai
            bonsai.pot = this
        }
    }

    unplant() {
        if (this.bonsai) {
            this.bonsai.pot = null
            this.bonsai = null
        }
    }
}