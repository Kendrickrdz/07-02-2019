

function setup() {
createCanvas(500, 500);
}

function draw() {
if(mouseIsPressed && mouseX < 300 && mouseX > 200 && mouseY < 300 && mouseY >200){
background(0,255,0);
	rect(200,200,100,100);
	textSize(50);
	text("mouse pressed",20,150,);
}
	else{
	background(255);
			rect(200,200,100,100);
	}

}
