import * as THREE from 'three'

export function createScene(canvas) {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf0f0f0)

  const camera = new THREE.PerspectiveCamera(
    60,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    100
  )
    camera.position.set(3, 3, 3)
    camera.lookAt(0, 0.5, 0)

  const renderer = new THREE.WebGLRenderer({ canvas })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)

  const light = new THREE.DirectionalLight(0xffffff, 6)
  light.position.set(5, 5, 5)
  scene.add(light)

  return { scene, camera, renderer }
}