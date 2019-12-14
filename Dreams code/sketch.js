function setup() {
  var canvas = createCanvas(3795, 1960, WEBGL);
  canvas.addClass("shapes")
}

function draw() {
  background(255, 0);

  translate(-1600, -800, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(140, 140, 140);
  pop();


  translate(537, 0, 0);
  normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //plane(140);
  pop();

  translate(537, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //torus(140, 40);
  pop();

  translate(537, 0, 0);
  normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //cylinder(140, 140);
  pop();


  translate(537, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //cone(140, 140);
  pop();


  translate(537, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //sphere(140);
  pop();

}
