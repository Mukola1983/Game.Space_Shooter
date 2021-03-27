

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