import * as THREE from 'three'

export function generateTrunkMesh(trunk) {
  const group = new THREE.Group()

  // Tronc
  const trunkGeometry = new THREE.CylinderGeometry(
    trunk.radius,
    trunk.radius * 1.5,
    trunk.height,
    8
  )
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b5a2b })
  const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial)
  trunk.position.y = trunk.height / 2
  trunk.rotation.x = THREE.MathUtils.degToRad(trunk.rotationX)
  trunk.rotation.y = THREE.MathUtils.degToRad(trunk.rotationY)
  group.add(trunk)

  

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