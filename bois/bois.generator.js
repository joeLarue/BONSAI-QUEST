import * as THREE from 'three'

export function generateBoisMesh(bois) {
  const group = new THREE.Group()

  // Tronc
  const boisGeometrie = new THREE.CylinderGeometry(
    bois.width * 0.2, // largeur haut
    bois.width * 0.3, // largeur bas
    bois.height, // Hauteur bois
    8 // Nombre de segment
  )
  const boisMateriel = new THREE.MeshStandardMaterial({ color: 0x8b5a2b })
  const mesh = new THREE.Mesh(boisGeometrie, boisMateriel)
  mesh.position.y = bois.height / 2
  group.add(mesh)

  return {
    mesh,
  }
}
