const scene = new THREE.Scene();

//re d cube

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: '#ff0000' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//render
const canvas = document.querySelector('.webgl');

const render = new THREE.WebGLRenderer({
  canvas: canvas,
});

render.setSize(sizes.width, sizes.height);
render.render(scene, camera);
