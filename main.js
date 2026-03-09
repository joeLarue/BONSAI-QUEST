import { createScene } from './scene.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Bois } from './bois/bois.js';
import { Bonsai } from './bonsai/bonsai.js';
import { generateBoisMesh } from './bois/bois.generator.js'
import * as THREE from 'three'
import { Feuille } from './feuille/feuille.js';
import { generateFeuilleMesh } from './feuille/feuille.generator.js';
import { generateBonsaiMesh } from './bonsai/bonsai.generator.js';

const canvas = document.querySelector('#container')
const { scene, camera, renderer } = createScene(canvas)

//ce qui se passe dans la scène
//let bonsai = new Bonsai({ height: 1, width: 0.5 })
//const pot = new Pot({ height: 1 })
//pot.plant(bonsai)

// génération du mesh du pot (et du bonsaï s'il y en a un)
//let potMesh = generatePotMesh(pot)
//scene.add(potMesh.group)

//test du bois
const bois = new Bois({
  height: 1,
  width: 1,
  rotation_x: 0,
  rotation_y: 0,
  rotation_z: 0
})
console.log(bois)
const boisMateriel = generateBoisMesh(bois)
//scene.add(boisMateriel.mesh)
scene.add(new THREE.AxesHelper(5))

const feuille = new Feuille({
  radius: 1,
  segment: 32,
  rotation_x: 0,
  rotation_y: 0,
  rotation_z: 0
})
console.log(feuille)
const feuilleMateriel = generateFeuilleMesh(feuille)
//scene.add(feuilleMateriel.group)

const bonsai = new Bonsai()
bonsai.root.print()
const bonsaiMesh = generateBonsaiMesh(bonsai.root)
scene.add(bonsaiMesh)
// const cube = new THREE.Mesh(
//   new THREE.BoxGeometry(1,1,1),
//   new THREE.MeshBasicMaterial({ color: 0xff0000 })
// )
// scene.add(cube)

// Bouton "arroser"
//document.querySelector('#arroser').addEventListener('click', () => {
//bonsai.root.growth()
//bonsaiMesh.update()
//})
// // Bouton "planter"
// document.querySelector('#planter').addEventListener('click', () => {
//   bonsai = new Bonsai({ height: 1, width: 0.5 })
//   pot.plant(bonsai)
// })
// // Bouton "déplanter"
// document.querySelector('#déplanter').addEventListener('click', () => {
//   pot.unplant()
// })

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);          // centre de gravité (ton objet)
controls.enableDamping = true;          // inertie “feel” plus agréable
controls.enableZoom = true;             // molette (dolly)
controls.update();                      // à appeler après modif manuelle caméra/target

//const infoElement = document.querySelector('.info')

function animate() {
  requestAnimationFrame(animate)
  //potMesh.update();
  controls.update();
  //infoElement.textContent = `Hauteur: ${bonsai.height.toFixed(2)}`
  renderer.render(scene, camera)
}

animate()
