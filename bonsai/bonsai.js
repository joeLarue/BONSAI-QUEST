import { Bois } from '../bois/bois.js'
import { Feuille } from '../feuille/feuille.js'

export class BonsaiNode {
  constructor({
    type = 'bois',       // 'bois' (branche/tronc) ou 'feuille'
    element = null,      // Objet contenant les données (taille, épaisseur pour bois; taille pour feuille)
    children = []
  
  } = {}) {
    this.type = type;
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
  growth() {
    this.element.growth()
    for (const child of this.children) {
      child.growth()
    }
    
  }
}

export class Bonsai {
  constructor() {
    // La racine d'un bonsaï est toujours son tronc de départ (bois)
    this.root = new BonsaiNode({ 
      type: 'bois',
      element: new Bois({height:4, width:0.6, rotation_x:0, rotation_y:0, rotation_z:0}),
      children: [
        new BonsaiNode({ 
          type: 'bois',
          element: new Bois({height:3, width:0.4, rotation_x:Math.PI, rotation_y:Math.PI/2, rotation_z:Math.PI}),
          children: [
            new BonsaiNode({ 
              type: 'feuille',
              element: new Feuille({radius:0.3, segment:16, rotation_x:0, rotation_y:Math.PI/2, rotation_z:Math.PI/3}),
              children: []
            })
          ]
        })
        ,
        new BonsaiNode({ 
          type: 'bois',
          element: new Bois({height:2, width:0.3, rotation_x:-Math.PI/4, rotation_y:0, rotation_z:0}),
          children: [
            new BonsaiNode({ 
              type: 'feuille',
              element: new Feuille({radius:0.4, segment:16, rotation_x:0, rotation_y:Math.PI/2, rotation_z:Math.PI/3}),
              children: []
            })
          ]
        })
      ]
    })
  }
}