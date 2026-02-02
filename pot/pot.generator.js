import * as THREE from 'three'
import { generateBonsaiMesh } from '../bonsai/bonsai.generator.js'

export function generatePotMesh(pot) {
  const group = new THREE.Group()

  // mesh du pot
  const points = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.7 * pot.height, 0),
    new THREE.Vector2(0.8 * pot.height, pot.height * 0.9),
    new THREE.Vector2(0.9 * pot.height, pot.height * 0.9),
    new THREE.Vector2(0.9 * pot.height, pot.height),
    new THREE.Vector2(0.8 * pot.height, pot.height),
    new THREE.Vector2(0.7 * pot.height, pot.height * 0.1),
    new THREE.Vector2(0, pot.height * 0.1)
  ]

  const potGeometry = new THREE.LatheGeometry(points, 68)
  
const textureLoader = new THREE.TextureLoader()

const albedo = textureLoader.load('asset/terracotta_albedo.png')
albedo.colorSpace = THREE.SRGBColorSpace
const normal = textureLoader.load('asset/terracotta_normal.png')

const potMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color(0xb65a2c),
  metalness: 0.0,
  roughness: 0.85,

})

  const PotMesh = new THREE.Mesh(
    potGeometry,
    potMaterial
  )
  group.add(PotMesh)


  // terre dans le pot
  const soilTexture = textureLoader.load('asset/soil.png')
  soilTexture.colorSpace = THREE.SRGBColorSpace
  const soil = new THREE.Mesh(
    new THREE.CircleGeometry(0.79 * pot.height, 32),
    new THREE.MeshStandardMaterial({ 
      color: 0x654321,
      metalness: 0.0,
      roughness: 1,
      
      map: soilTexture
    })
  )
  soil.position.y = pot.height - 0.2 * pot.height
  soil.rotation.x = -Math.PI / 2
  group.add(soil)

  let bonsaiMesh = null
  let bonsaiUpdate = null
  // si le pot contient un bonsaï
  if (pot.bonsai) {
    bonsaiMesh = generateBonsaiMesh(pot.bonsai)
    bonsaiUpdate = bonsaiMesh.update
    bonsaiMesh.group.position.y = pot.height / 2
    group.add(bonsaiMesh.group)
  }

  return {
    group,
    update() {
      if (!pot.bonsai && bonsaiMesh) {
        group.remove(bonsaiMesh.group)
        bonsaiMesh = null
        bonsaiUpdate = null
      }
      if (pot.bonsai && !bonsaiMesh) {
        bonsaiMesh = generateBonsaiMesh(pot.bonsai)
        bonsaiUpdate = bonsaiMesh.update
        bonsaiMesh.group.position.y = pot.height / 2
        group.add(bonsaiMesh.group)
      }
      if (bonsaiMesh) {
        if (bonsaiUpdate) {
          bonsaiUpdate()
          bonsaiMesh.group.position.y = pot.height / 2
        }
      }
    }
  }
}
