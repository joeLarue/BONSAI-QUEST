export function growBonsai(bonsai, { water = 0, light = 0 }) {
  if (water > 0) {
    bonsai.height += 0.05
    bonsai.width += 0.01
  }

  if (light < 0.3) {
    bonsai.height += 0.02 // pousse en hauteur si manque de lumière
  }
}
