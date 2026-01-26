import * as THREE from 'three'

export function generateBonsaiMesh(bonsai) {
  const group = new THREE.Group()

  // Tronc
  const trunkGeometry = new THREE.CylinderGeometry(
    bonsai.width * 0.2,
    bonsai.width * 0.3,
    bonsai.height,
    8
  )
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b5a2b })
  const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial)
  trunk.position.y = bonsai.height / 2
  group.add(trunk)

  // (plus tard : branches, feuilles...)

  return {
    group,
    update() {
      trunk.scale.y = bonsai.height
    }
  }
}
