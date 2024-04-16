import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = new MeshBasicMaterial({
    color: "purple",
  });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);
  cube.scale.set(1.5, 1.5, 1.5);

  return cube;
}

export { createCube };
