import { Bonsai } from './bonsai/bonsai.js'
import { Pot } from './pot/pot.js'
import { generatePotMesh } from './pot/pot.generator.js'
import { createScene } from './scene.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.querySelector('#container')
const { scene, camera, renderer } = createScene(canvas)

//ce qui se passe dans la scène
let bonsai = new Bonsai({ height: 1, width: 0.5 })
const pot = new Pot({ height: 1 })
pot.plant(bonsai)

// génération du mesh du pot (et du bonsaï s'il y en a un)
let potMesh = generatePotMesh(pot)
scene.add(potMesh.group)

// Bouton "arroser"
document.querySelector('#arroser').addEventListener('click', () => {
  bonsai.growth()
})
// Bouton "planter"
document.querySelector('#planter').addEventListener('click', () => {
  bonsai = new Bonsai({ height: 1, width: 0.5 })
  pot.plant(bonsai)
})
// Bouton "déplanter"
document.querySelector('#déplanter').addEventListener('click', () => {
  pot.unplant()
})

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);          // centre de gravité (ton objet)
controls.enableDamping = true;          // inertie “feel” plus agréable
controls.enableZoom = true;             // molette (dolly)
controls.update();                      // à appeler après modif manuelle caméra/target

const infoElement = document.querySelector('.info')

function animate() {
  requestAnimationFrame(animate)
  potMesh.update();
  controls.update();
  infoElement.textContent = `Hauteur: ${bonsai.height.toFixed(2)}`
  renderer.render(scene, camera)
}

animate()
