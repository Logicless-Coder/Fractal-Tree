var angle = 0;
var factor = 0.67;
var slider;

function setup() {
	createCanvas(800, 800);
	slider = createSlider(0, PI, PI / 2, 0.01);
}

function draw() {
	background(51);
	angle = slider.value();
	stroke(255);
	translate(width / 2, height);
	branch(height / 4);
}

function branch(len) {
	line(0, 0, 0, -len);
	translate(0, -len);
	if (len >= 1) {
		push();
		rotate(angle);
		branch(len * factor);
		pop();
		push();
		rotate(-angle);
		branch(len * factor);
		pop();
	}
}
