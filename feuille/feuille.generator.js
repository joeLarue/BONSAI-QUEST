import * as THREE from 'three'

export function generateFeuilleMesh(feuille) {
  const group = new THREE.Group()

  // On crée un demi-cercle
  const feuilleGeometrie = new THREE.CircleGeometry(
    feuille.radius,
    feuille.segment,
    0,
    Math.PI
  )

  // Une seule couleur verte pour la feuille
  const feuilleMateriel = new THREE.MeshStandardMaterial({ 
      color: 0x4CAF50, // Vert
      side: THREE.DoubleSide 
  })

  // Première moitié (côté Y positif)
  const half1 = new THREE.Mesh(feuilleGeometrie, feuilleMateriel)
  // On la plie légèrement "vers le haut" (rotation autour de l'axe X)
  // Un angle plus petit (ex: 30 degrés) donnera une forme en 'V' ouverte
  const foldAngle = Math.PI / 6 // 30 degrés en radians
  half1.rotation.x = foldAngle

  // Deuxième moitié
  const half2 = new THREE.Mesh(feuilleGeometrie, feuilleMateriel)
  // Pour qu'elle forme l'autre côté de la feuille (côté Y négatif) tout en 
  // se pliant de façon symétrique, on applique une rotation de 180° moins l'angle de pliage
  half2.rotation.x = Math.PI - foldAngle

  group.add(half1)
  group.add(half2)
  group.translateX(feuille.radius)
  group.rotateX(-Math.PI/2)
  return {
    group,
  }
}

