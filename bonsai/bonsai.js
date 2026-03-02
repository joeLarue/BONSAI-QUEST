import { Bois } from '../bois/bois.js'
import { Feuille } from '../feuille/feuille.js'

export class BonsaiNode {
  constructor({
    type = 'bois',       // 'bois' (branche/tronc) ou 'feuille'
    element = null,      // Objet contenant les données (taille, épaisseur pour bois; taille pour feuille)
    children = []
  
  } = {}) {
    this.element = element
    this.children = children
  }

  // Pour construire facilement notre arbre
  addChild(node) {
    this.children.push(node)
  }

  print(indent = 0) {
    const indentStr = '  '.repeat(indent)
    console.log(`${indentStr}${this.type}:`, this.element)
    for (const child of this.children) {
      child.print(indent + 2)
    }
  }
}

export class Bonsai {
  constructor() {
    // La racine d'un bonsaï est toujours son tronc de départ (bois)
    this.root = new BonsaiNode({ 
      type: 'bois',
      element: new Bois({height:1, width:0.1, rotation_x:0, rotation_y:0, rotation_z:0}),
      children: [
        new BonsaiNode({ 
          type: 'bois',
          element: new Bois({height:1, width:0.1, rotation_x:0, rotation_y:0, rotation_z:0}),
          children: [
            new BonsaiNode({ 
              type: 'feuille',
              element: new Feuille({radius:1, segment:16}),
              children: []
            })
          ]
        })
        ,
        new BonsaiNode({ 
          type: 'bois',
          element: new Bois({height:1, width:0.1, rotation_x:0, rotation_y:0, rotation_z:0}),
          children: [
            new BonsaiNode({ 
              type: 'feuille',
              element: new Feuille({radius:1, segment:16}),
              children: []
            })
          ]
        })
      ]
    })
  }
}