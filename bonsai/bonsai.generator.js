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

  
  // feuilles
  const leavesGeometry = new THREE.SphereGeometry(bonsai.width, 8, 8)
  const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 })
  const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial)
  leaves.position.y = bonsai.height + bonsai.width * 0.5
  group.add(leaves)
  

  return {
    group,
    update() {
      trunk.scale.y = bonsai.height
      trunk.position.y = bonsai.height / 2
      if (bonsai.height > 1.5) {
        leaves.scale.set(bonsai.width, bonsai.width, bonsai.width)
        leaves.position.y = bonsai.height
      }
      else {
        leaves.scale.set(0, 0, 0)
      }
    }
  }
}