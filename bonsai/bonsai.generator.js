import * as THREE from 'three'
import { generateBoisMesh } from '../bois/bois.generator.js'
import { generateFeuilleMesh } from '../feuille/feuille.generator.js'
import { Bois } from '../bois/bois.js'
import { Feuille } from '../feuille/feuille.js'
import { BonsaiNode } from './bonsai.js'

export function generateBonsaiMesh(bonsaiNode) {
  const group = new THREE.Group()
  if (bonsaiNode.type === 'bois') {
    const boisResult = generateBoisMesh(bonsaiNode.element)
    group.add(boisResult)
  }
  if (bonsaiNode.type === 'feuille') {
    const feuilleResult = generateFeuilleMesh(bonsaiNode.element)
    group.add(feuilleResult)
  }
  for (const child of bonsaiNode.children) {
    const childMesh = generateBonsaiMesh(child)
    childMesh.position.y = bonsaiNode.element.height || 0
    group.add(childMesh)
  }
  group.rotateX(bonsaiNode.element.rotation_x)
  group.rotateY(bonsaiNode.element.rotation_y)
  group.rotateZ(bonsaiNode.element.rotation_z)
  return group
}