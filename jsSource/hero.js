

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