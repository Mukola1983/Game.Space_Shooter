









let canvas = document.getElementById('game');
let context = canvas.getContext('2d');


let wrapper = document.getElementById('wrapper');



let startButton = document.querySelector('.start');
let cover = document.querySelector('.cover');



startButton.onclick = function(){
	startButton.classList.toggle('_started');
	cover.classList.toggle('_hiden');
	if(startGame === false){
		launchFullScreen(wrapper);
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
//	moveHero()
	moveHero_01();
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





function launchFullScreen(element){
			if(element.requestFullscreen){
				element.requestFullscreen();
			}
		}









var fonImg = document.getElementById('bg_01');


function drawFons(){
	context.drawImage(fonImg, 0, 0, 500, 300);
}


var rocketimg = document.getElementById('rocket');

let heroSpeedX = 3;
let heroSpeedY = 3;

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

let right = false;
let left = false;
let up = false;
let down = false;


// Right move====================
rightHero.onmouseover = function(){
	right = true;
}

rightHero.onmouseout = function(){
	right = false;
}
// Right move====================

// Left move====================
leftHero.onmouseover = function(){
	left = true;
}

leftHero.onmouseout = function(){
	left = false;
}
// Left move====================


//Top move=======================
topHero.onmouseover = function(){
	up = true;
}

topHero.onmouseout = function(){
	up = false;
}
//Top move=======================

//Down move=======================
downHero.onmouseover = function(){
	down = true;
}

downHero.onmouseout = function(){
	down = false;
}
//Down move=======================

function moveHero_01(){
	if(right){
		Hero.x += heroSpeedX;
	}
	if(left){
		Hero.x += -heroSpeedX;
	}
	if(up){
		Hero.y += -heroSpeedY;
	}
	if(down){
		Hero.y += heroSpeedY;
	}

	if(Hero.x + Hero.width >=500){
		Hero.x = 500 - Hero.width;
	}
	if(Hero.x <= 0){
		Hero.x = 0;
	}
	if(Hero.y + Hero.height >=300 ){
		Hero.y = 300 - Hero.height;
	}
	if(Hero.y <= 0 ){
		Hero.y = 0;
	}
}
/*
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

*/

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




//function Enemy(img, x, y, speedX, speedY, width, height)


// Adding enemy==========================================
function addEnemy(){
	let enemy = new Enemy(rocketimg, randomNum(20, 480),0, randomNum(-1, 1), randomNum(1, 2), 10, 20)
	enemyArr.push(enemy);
}


	//timer to create enemy===========================
setInterval(function run() {
	if( enemyArr.length < 10){
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
		enemyArr.splice(i, 1);
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