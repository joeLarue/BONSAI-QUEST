import { Bonsai } from './bonsai.model.js'
import { generateBonsaiMesh } from './bonsai.generator.js'
import { growBonsai } from './game.rules.js'
import { createScene } from './scene.js'

const canvas = document.querySelector('#container')
const { scene, camera, renderer } = createScene(canvas)

const bonsai = new Bonsai({ height: 1, width: 0.5 })
let bonsaiMesh = generateBonsaiMesh(bonsai)
scene.add(bonsaiMesh)

// Bouton "arroser"
document.querySelector('#water').addEventListener('click', () => {
  growBonsai(bonsai, { water: 1 })

  scene.remove(bonsaiMesh)
  bonsaiMesh = generateBonsaiMesh(bonsai)
  scene.add(bonsaiMesh)
})

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()
