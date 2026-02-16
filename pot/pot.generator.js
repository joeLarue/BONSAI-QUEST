import * as THREE from 'three'
import { generateBonsaiMesh } from '../bonsai/bonsai.generator.js'

export function generatePotMesh(pot) {
  const group = new THREE.Group()

  // mesh du pot

const geometryOptions = {
  radiusTop: 1,
  radiusBottom: 0.6,
  height: pot.height,
  radialSegments: 16,
  heightSegments: 1,
  openEnded: true,
  thetaStart: 0,
  thetaLength: Math.PI * 2
};

  const potMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(geometryOptions.radiusTop,
        geometryOptions.radiusBottom,
        geometryOptions.height,
        geometryOptions.radialSegments,
        geometryOptions.heightSegments,
        geometryOptions.openEnded,
        geometryOptions.thetaStart,
        geometryOptions.thetaLength),
        
    new THREE.MeshStandardMaterial({ 
        color: 0x9b5a3c 
    })
  )
  group.add(potMesh)

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
            if (bonsaiUpdate) {bonsaiUpdate()}
    }
  }
}
}
