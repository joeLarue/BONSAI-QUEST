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
  camera.position.set(2, 2, 4)

  const renderer = new THREE.WebGLRenderer({ canvas })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)

  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(5, 5, 5)
  scene.add(light)

  return { scene, camera, renderer }
}
