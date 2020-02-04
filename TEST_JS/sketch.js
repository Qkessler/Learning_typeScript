var position = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250, 250, 100);
}

function draw() {
  fill(0, 140, 255);
  noStroke();
  position = position + 1;
  if (position == windowWidth) {
    position = 0;
  }
  ellipse(position, mouseY, 20, 20);
  if (mouseIsPressed) {
    background(250, 250, 100);
  }
}
