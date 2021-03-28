
///Object Hero /////////////////////=============================
function Hero(img, x, y, speedX, speedY, width, height, life, weaponPower){
	this.img = img;
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.speedX = speedX;
	this.speedY = speedY;
	this.life = life;
	this.weaponPower = weaponPower;
}


var heroShipImg = document.getElementById('heroShip');

///Object Hero /////////////////////=============================


//Hero creations =========================================

///////////////////////////////////////////////////////////
//Hero Datas=====================================/////////////////////////////
let score = document.getElementById('score');
let scoreVar = 0;

let hiScore = document.getElementById('hiScore');
let hiScoreVar = 0;

score.innerHTML = `Score: ${scoreVar}`;

hiScore.innerHTML = `HiScore: ${hiScoreVar}`;



//WeaponPower===========================
let weaponPower = document.getElementById('weaponPower');

let weaponPowerVar = 1;

weaponPower.innerHTML = `Weap Pow: ${weaponPowerVar}`;

//WeaponPower===========================
////////Life data======================
let playerLife = document.getElementById('playerLife');
let playerLifeVar = 9;

playerLife.innerHTML = `Life: ${playerLifeVar}`;
////////Life data======================

let collisionAllow = true;

function collisionAgain(){
	collisionAllow = true;
}

///////Is alive================

let heroAlive = true;

//Hero Datas=====================================
//////////////////////////////////////////////////////////

let heroSpeedX = 2;
let heroSpeedY = 2;

let N_x = 0;
let N_y = 0;

let fire = true;
let fireToLive = true;

function fireTrue(){
	fire = true;
}


//Declare Hero===================================
let hero = new Hero(heroShipImg, 250, 200, heroSpeedX, heroSpeedY, 30, 50, playerLifeVar, weaponPowerVar);

//Declare Hero===================================

function addLazer(x, y){
	let bullet = new Weapon(lazer, x, y, 0, 3, 10, 15, 'lazer')
	weaponsArr.push(bullet);
}

function drawHero(){
	context.drawImage(hero.img, 70*Math.floor(N_x), 95*N_y, 70, 95, hero.x, hero.y, hero.width, hero.height)

	N_x += 0.1;
	if(N_x > 2.9 ){
		
		N_x = 0;
		N_y += 1;
		if(N_y > 3){
			N_y = 0;
		}
		
		
	}

	if(fire && fireToLive ){
		if(hero.weaponPower === 1){
			addLazer(hero.x+hero.width/2, hero.y);
			fire = false;
		}
		if(hero.weaponPower === 2){
			addLazer(hero.x, hero.y);
			addLazer(hero.x+hero.width, hero.y);
			fire = false;
		}
		if(hero.weaponPower >= 3){
			addLazer(hero.x, hero.y);
			addLazer(hero.x+hero.width/2, hero.y);
			addLazer(hero.x+hero.width, hero.y);
			fire = false;
		}

		setTimeout(fireTrue, 500);

	}


}


//Hero creations =========================================















//Variables for moves ========================================
let rightHero = document.querySelector('.right');
let leftHero = document.querySelector('.left');
let topHero = document.querySelector('.top');
let downHero = document.querySelector('.down');

let right = false;
let left = false;
let up = false;
let down = false;
//Variables for moves ========================================

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

function moveHero(){
	if(right){
		hero.x += heroSpeedX;
	}
	if(left){
		hero.x += -heroSpeedX;
	}
	if(up){
		hero.y += -heroSpeedY;
	}
	if(down){
		hero.y += heroSpeedY;
	}

		if(hero.x + hero.width >=500){
			hero.x = 500 - hero.width;
		}
		if(hero.x <= 0){
			hero.x = 0;
		}
		if(hero.y + hero.height >=300 ){
			hero.y = 300 - hero.height;
		}
		if(hero.y <= 0 ){
			hero.y = 0;
		}
}

