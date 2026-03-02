import * as THREE from 'three'
import { generateBoisMesh } from '../bois/bois.generator.js'
import { generateFeuilleMesh } from '../feuille/feuille.generator.js'
import { Bois } from '../bois/bois.js'
import { Feuille } from '../feuille/feuille.js'
import { BonsaiNode } from './bonsai.js'

export function generateBonsaiMesh(bonsaiNode) {
  const group = new THREE.Group()
  if (bonsaiNode.type === 'bois') {
    group.add(generateBoisMesh(bonsaiNode.element))
  }
  if (bonsaiNode.type === 'feuille') {
    group.add(generateFeuilleMesh(bonsaiNode.element))
  }
  

}