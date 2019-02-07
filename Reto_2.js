function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
	fill(255,0,0);
	rect(0,0,400/3,400);
	fill(0,255,0);
	rect(400/3,0,400/3,400);
	fill(0,0,255);
	rect((400/3)*2,0,266,400);
}
