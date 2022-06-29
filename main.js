function preload() {
	world_start = loadSound("world_start.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	posenet = ml5.poseNet(video,modalLoaded);
	posenet.on('pose',gotPoses);

}
function modalLoaded(){
	console.log("Modal is loaded")
}
function draw() {
	game()
}







