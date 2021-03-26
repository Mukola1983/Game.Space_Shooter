









let canvas = document.getElementById('game');
let context = canvas.getContext('2d');



let startButton = document.querySelector('.start');
let cover = document.querySelector('.cover');



startButton.onclick = function(){
	startButton.classList.toggle('_started');
	cover.classList.toggle('_hiden');
	if(startGame === false){
		startGame = true;
		game();
		startButton.innerHTML = "pause";
	}else{
		startGame = false;
		startButton.innerHTML = "start";
	}
}


let startGame = false;

window.onload = function(){
	game()
}

function game(){
	update();
	render();
	if(startGame){
		requestAnimationFrame(game);
	}

}

function update(){

}


function render() {
	context.clearRect(0, 0, 500, 300);
	drawFons()
	drawEnemy();
	drawHero();
	moveHero()
}




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



/*
function launchFullScreen(element){
			if(element.requestFullscreen){
				element.requestFullscreen();
				coverScreen.classList.remove('unactive');
				start = false;
			}
		}

		canvas.onclick = function(){
			launchFullScreen(canvas);
		//	main_music.play();
		}
*/







var fonImg = document.getElementById('bg_01');


function drawFons(){
	context.drawImage(fonImg, 0, 0, 500, 300);
}


var rocketimg = document.getElementById('rocket');

let heroSpeedX = 0;
let heroSpeedY = 0;

let heroStop = 700;

let Hero = new Enemy(rocketimg, 250, 200, heroSpeedX, heroSpeedY, 30, 50)

console.log(Hero.speedX);

function drawHero(){
	context.drawImage(Hero.img, Hero.x, Hero.y, Hero.width, Hero.height);
}


let rightHero = document.querySelector('.right');
let leftHero = document.querySelector('.left');
let topHero = document.querySelector('.top');
let downHero = document.querySelector('.down');

rightHero.onclick = function(){
	heroSpeedX = 2;
	setTimeout(function run() {
		heroSpeedX = 0;
	},heroStop );
}
leftHero.onclick = function(){
	heroSpeedX = -2;
	setTimeout(function run() {
		heroSpeedX = 0;
	}, heroStop);
}

topHero.onclick = function(){
	heroSpeedY = -2;
	setTimeout(function run() {
		heroSpeedY = 0;
	}, heroStop);
}
downHero.onclick = function(){
	heroSpeedY = 2;
	setTimeout(function run() {
		heroSpeedY = 0;
	}, heroStop);
}
function moveHero(){
	Hero.speedX = heroSpeedX;
	Hero.speedY = heroSpeedY;
	Hero.x += Hero.speedX;
	Hero.y += Hero.speedY;
		if(Hero.x + Hero.width >=500 || Hero.x <=0){
			heroSpeedX *= -1;
		}
		if(Hero.y + Hero.height >=300 || Hero.y <=0){
			heroSpeedY *= -1;
		}
}


// Random Numbers===========================================
function randomNum(min, max) {
	return Math.random() * (max - min) + min;
}

// Random Numbers===========================================





// Array with enemy=================================
const enemyArr = [];
// Array with enemy=================================







// Adding enemy==========================================
function addEnemy(){
	let enemy = new Enemy(rocketimg, randomNum(30, 100),randomNum(30, 100), randomNum(0, 4), randomNum(0, 4), 10, 20)
	enemyArr.push(enemy);
}


	//timer to create enemy===========================
setInterval(function run() {
	if( enemyArr.length < 5){
		addEnemy();
	}
}, 1000);
	//timer to create enemy===========================


// Adding enemy==========================================



// CTX draw enemyis//////////////////////////////
function drawEnemy(){
	for(let i=0;i<enemyArr.length; i++){


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

// CTX draw enemyis//////////////////////////////


////////////Object enemy====================================
function Enemy(img, x, y, speedX, speedY, width, height){
	this.img = img;
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.speedX = speedX;
	this.speedY = speedY;

}

////////////Object enemy====================================