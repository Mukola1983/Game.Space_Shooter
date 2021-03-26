







let canvas = document.getElementById('game');
let context = canvas.getContext('2d');


//canvas.style.backgroundImage = "url('..//img/backgrounds/m101.jpg')";


window.onload = function(){
	game()
}

function game(){
	update();
	render();
	requestAnimationFrame(game);
}

function update(){

}


function render() {
	moveRocket();
	context.drawImage(fonImg, 0, 0, 600, 600);
	context.drawImage(rocketimg, x, y, width, height);
	drawEnemy();
}






/*
var requestAnimationFrame = (function(){
	return window.requestAnimationFrame  ||
		window.webkitRequstAnimationFrame ||
		window.mozRequstAnimationFrame ||
		window.oRequstAnimationFrame ||
		window.msRequstAnimationFrame ||
		function(callback){
			window.setTimeout(callback, 1000 / 20);
		};
})();

*/



var fonImg = new Image();
fonImg.src = '..//img/backgrounds/m101.jpg';


var rocketimg = new Image();
rocketimg.src = '..//img/rocket.png';


x = 0;
y = 0;
spX = 2;
spY = 2
let width = 20;
let height = 30;
function moveRocket(){
	x +=spX;
	y +=spY;
	if(x + width >=500 || x <=0){
		spX *= -1;
	}
	if(y + height >= 300 || y <=0){
		spY *= -1;
	}
}
var rocketimg = new Image();
rocketimg.src = '..//img/rocket.png';




function randomNum(min, max) {
	return Math.random() * (max - min) + min;
}

const enemyArr = [];

for(let i=0;i<1; i++){
	let enemy = new Enemy(rocketimg, randomNum(30, 100),randomNum(30, 100), randomNum(0, 4), randomNum(0, 4), 10, 20)
	enemyArr.push(enemy);
}

function addEnemy(){
	let enemy = new Enemy(rocketimg, randomNum(30, 100),randomNum(30, 100), randomNum(0, 4), randomNum(0, 4), 10, 20)
	enemyArr.push(enemy);
}
if( enemyArr.length < 10){
//	setInterval(addEnemy, 1000);
	console.log('push');
}

setInterval(function run() {
	if( enemyArr.length < 10){
		addEnemy();
	}
}, 1000);

function drawEnemy(){
	for(let i=0;i<enemyArr.length; i++){

//	let moveRock =  new MoveRocket(enemyArr[i].x, enemyArr[i].y, enemyArr[i].width, enemyArr[i].height, enemyArr[i].speedX, enemyArr[i].speedY)

	enemyArr[i].x += enemyArr[i].speedX;
	enemyArr[i].y += enemyArr[i].speedY;
	if(enemyArr[i].x + enemyArr[i].width >=500 || enemyArr[i].x <=0){
		enemyArr[i].speedX *= -1;
	}
	if(enemyArr[i].y + enemyArr[i].height >=300 || enemyArr[i].y <=0){
		enemyArr[i].speedY *= -1;
	}
	context.drawImage(enemyArr[i].img, enemyArr[i].x, enemyArr[i].y, enemyArr[i].width, enemyArr[i].height);

	context.rotate(enemyArr[i].img * Math.PI/60);
	}
}

function MoveRocket(x, y, width, height, spX, spY){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.spX = spX;
	this.spY = spY;

	this.x += this.spX;
	this.y += this.spY;
	if(this.x + this.width >=500 || this.x <=0){
		this.spX *= -1;
	}
	if(this.y + this.height >= 300 || this.y <=0){
		this.spY *= -1;
	}
}

console.log(enemyArr);

function Enemy(img, x, y, speedX, speedY, width, height){
	this.img = img;
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.speedX = speedX;
	this.speedY = speedY;

}