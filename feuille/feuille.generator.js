import * as THREE from 'three'

export function generateFeuilleMesh(feuille) {
  const group = new THREE.Group()

  const feuilleGeometrie = new THREE.CircleGeometry(
    feuille.radius,
    feuille.segment,
    0,
    Math.PI
)
    const feuilleMateriel1 = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, side: THREE.DoubleSide })
    const feuilleMateriel2 = new THREE.MeshStandardMaterial({ color: 0x00FF00, side: THREE.DoubleSide })
    const mesh1 = new THREE.Mesh(feuilleGeometrie, feuilleMateriel1)
    const mesh2 = new THREE.Mesh(feuilleGeometrie, feuilleMateriel2)
    
    // Pivot pour la première moitié
    const pivot1 = new THREE.Object3D()
    mesh1.position.x = -feuille.radius / 2   // décaler légèrement
    pivot1.add(mesh1)
    pivot1.rotation.y = 0                     // rotation initiale
    group.add(pivot1)

    // Pivot pour la deuxième moitié
    const pivot2 = new THREE.Object3D()
    mesh2.position.x = feuille.radius / 2
    pivot2.add(mesh2)
    pivot2.rotation.y = Math.PI               // rotation pour former le cercle
    group.add(pivot2)

    return {
        group,
    }
}

