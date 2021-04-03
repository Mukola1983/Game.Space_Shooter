






//////////////////////////////////////////////////////////////////////////////////////////
////Hero Variables=============================================


//Hero Imeges ==================
let heroShipImg = document.getElementById('heroShip');
let heroShipWoundedImg = document.getElementById('heroShipWounded');
//Hero Imeges ==================


////Hero Score and HiScore =========================
let score = document.getElementById('score');
let scoreVar = 0;

let hiScore = document.getElementById('hiScore');
let hiScoreVar = 0;

score.innerHTML = `Score: ${scoreVar}`;

hiScore.innerHTML = `HiScore: ${hiScoreVar}`;
////Hero Score and HiScore =========================


//WeaponPower===========================
let weaponPower = document.getElementById('weaponPower');

let weaponPowerVar = 1;

weaponPower.innerHTML = `Power: ${weaponPowerVar}`;
//WeaponPower===========================


///Weapon Kind ====================================/////////////

///Weapon Kind wrapper ============ 
let playerWeapon = document.getElementById('playerWeapon');


///Start weapon Kind========
let weaponKind = 'S';

// Frequncy fire==========
let fireOften = 500;

let rocketBulSpeed = 900;
let lazerBulSpeed = 500;

if(weaponKind === 'R'){
	fireOften = rocketBulSpeed;
}
if(weaponKind === 'L'){
	fireOften = lazerBulSpeed;
}

///Rocket power==========
let rocketPower = 2;


///Weapon Kind Icon ============ 
//let weaponIcon = document.getElementById('weaponIcon');


///Weapon Kind Icons=== ============ 
let weaponIconLazer = document.getElementById('weaponIconLazer');
let weaponIconRocket = document.getElementById('weaponIconRocket');
let weaponIconStar = document.getElementById('weaponIconStar');

///Weapon Kind Icons=== ============ 

///Weapon Kind ====================================//////////////////////////


///Player Life data======================//////////////////////


let playerLife = document.getElementById('playerLife');

///Player lifeBar=============
let lifeRow = document.getElementById('lifeRow');

//Player starts number lifes========
let playerLifeVar = 15;


/// Changing life bar================
lifeRow.style.width = `${100}%`;


///Gunction for Changing life bar================
function percentage(num, curNum)
{
	return (curNum * 100)/ num;
}

///Player Life data=====================////////////|||||||||||||


////HERO RESTART FUNCTION=========================||||||||||||||||||||

function heroRestart(){
		heroAlive = true;
		startButton.innerHTML = "pause";

		//Rewrite hero data=====

		//life
		hero.life = playerLifeVar;
		lifeRow.style.width = `${100}%`;
		lifeRow.style.backgroundColor  = `#47B932`;

		//score
		scoreVar = 0;
		score.innerHTML = `Score: ${scoreVar}`;

		//Speed and position
		heroSpeedX = 2;
		heroSpeedY = 2;
		hero.x = 240;
		hero.y = 200;

		//Allow Fire
		fireToLive = true;

		//Weapon
		hero.weaponPower = weaponPowerVar;
		weaponPower.innerHTML = `Power: ${hero.weaponPower}`;
		weaponKind = 'L';

		// Frequncy fire==========
		rocketBulSpeed = 900;
		lazerBulSpeed = 500;

		if(weaponKind === 'R'){
			fireOften = rocketBulSpeed;
		}
		if(weaponKind === 'L'){
			fireOften = lazerBulSpeed;
		}

		//Rewrite hero data=====

		game();
		
		
		//Rewrite enemy data=====

		//rocketShip life
		rockrtEnemyLife = 1;

		//allow apperence
		allowAster = false;
		allowRedShip = false;
		sizeEnemyArr = 6;
}


////HERO RESTART FUNCTION=========================||||||||||||||||||||

////Hero Variables=============================================
//////////////////////////////////////////////////////////////////////////////////////////









/////////////////////////////////////////////////////////////////
//Enemy Variables=========================================


//Enemy sprites===================
let enemyShipImg = document.getElementById('enemyShip');

let enemyShipRedImg = document.getElementById('enemyShipRed');

let enemyAsterRedImg = document.getElementById('enemyAsterRed');

	let enemyLazerImg = document.getElementById('enemyLazer');

//Enemy sprites===================


/// Alows diferent enemyis appearing===========

// Max size enemy array=======
let sizeEnemyArr = 6;


///Red asteroid Allows=======
let allowAster = false;

///Red ships Allows=======
let allowRedShip = false;


///Intervals for apearing======
let mainInterval = 1000;

let asterInterval = 2000;

let redShipInterval = 3000;

/// Alows diferent enemyis appearing===========

function enemyApearence(scoreVar){
	if(scoreVar > 40){
		allowAster = true;
	}
	if(scoreVar > 30 && scoreVar < 100){
		rockrtEnemyLife = 2;
		sizeEnemyArr = 10;
	}
	if(scoreVar >= 100 ){
		rockrtEnemyLife = 3;
		sizeEnemyArr = 12;
		allowRedShip = true;
	}
}

//Enemy Variables=========================================






let canvas = document.getElementById('game');
let context = canvas.getContext('2d');


let wrapper = document.getElementById('wrapper');


/// Buton for game start=========
let startButton = document.querySelector('.start');


/// Button for opening Info Box=======
let infoButton = document.querySelector('.info');

/// Button for close Info Box=======
let closeInfo = document.querySelector('.closeInfo');


/// Cover for screen========
let cover = document.querySelector('.cover');

//Info box===============
let infoBox = document.querySelector('.infoBox');



////////////////////////////////////////////////
///START GAME

startButton.onclick = function(){
	if(heroAlive){
		startButton.classList.toggle('_started');
		optionBox.classList.toggle('_hidenButton');
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
	}else{
		heroRestart();

	}
}
///START GAME
////////////////////////////////////////////////


////Option screen manipulation===========///////////

let optionBox = document.querySelector('.optionBox');


//Option cover
let optionCover = document.querySelector('.optionCover');

// Option cover open button
let optionButton = document.querySelector('.option');

// Option cover close button
let closeOption = document.querySelector('.closeOption');




optionButton.onclick = function(){
	optionCover.classList.add('_activeInfoBox');
}

closeOption.onclick = function(){
	optionCover.classList.remove('_activeInfoBox');
}

////Option screen manipulation===========///////////




////Sound manipulation===========///////////

//Music
let musicOnOff = document.getElementById('musicOnOff');

let music = false;
musicOnOff.onclick = function(){
	if(music){
		musicOnOff.innerHTML = 'off';
		music = false;
	}else{
		musicOnOff.innerHTML = 'on';
		music = true;
	}
	
}

//Sound
let soundOnOff = document.getElementById('soundOnOff');

let sound = false;
soundOnOff.onclick = function(){
	if(sound){
		soundOnOff.innerHTML = 'off';
		sound = false;
	}else{
		soundOnOff.innerHTML = 'on';
		sound = true;
	}
	
}

////Sound manipulation===========///////////



////Info screen manipulation===========///////////
infoButton.onclick = function(){
	infoBox.classList.add('_activeInfoBox');
}

closeInfo.onclick = function(){
	infoBox.classList.remove('_activeInfoBox');
}

let startGame = false;

window.onload = function(){
	game()
}



function game(){
	update();
	render();
	if(startGame && heroAlive){
		requestAnimationFrame(game);
	}

}

function update(){

}


function render() {
	context.clearRect(0, 0, 500, 300);
	drawFon();

	drawBonuses();
	collisionHeroWithBonuses();

	drawWeapon();

	drawEnemy();
	drawHero();
	moveHero();

	collisionBulletsEnemy();
	collisionEnemyWithHero();
	drawExplosion();

	if(music === true){
		mainMusic.play();
		mainMusic.volume = 0.7;
	}
	if(music === false){
		mainMusic.pause();
	}

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

let a = 0;



var drawRect = function(img, x, y, w, h, a){
			var dx = x + w/2;
			var dy = y + h/2;

			if(a){
				a = a * (Math.PI/180);
				context.save();
				context.translate(dx, dy);
				context.rotate(a);
				context.translate(-dx, -dy);
			}

			context.drawImage( img,x, y , w, h,);

			if(a){
				context.restore();
			}
		}



function drawFon(fImg){
		
			a+=0.02;
			drawRect(fonImg, -100, -200, 700, 700, a);
		}


///Object Hero /////////////////////=============================
function Hero(img, x, y, speedX, speedY, width, height, life, weaponPower, weaponKind){
	this.img = img;
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.speedX = speedX;
	this.speedY = speedY;
	this.life = life;
	this.weaponPower = weaponPower;

	this.weaponKind = weaponKind;
}


///Object Hero /////////////////////=============================


//Hero creations =========================================

///////////////////////////////////////////////////////////


let collisionAllow = true;

function collisionAgain(){
	collisionAllow = true;
}

///////Is alive================
let heroAlive = true;



//Hero Datas=====================================
//////////////////////////////////////////////////////////

let heroSpeedX = 5;
let heroSpeedY = 5;

let N_x = 0;
let N_y = 0;

let fire = true;
let fireToLive = true;

function fireTrue(){
	fire = true;
}


//Declare Hero===================================
let hero = new Hero(heroShipImg, 250, 200, heroSpeedX, heroSpeedY, 30, 50, playerLifeVar, weaponPowerVar, weaponKind);

//Declare Hero===================================

function addLazer(x, y){
	let bullet = new Weapon(lazer, x, y, 0, 3, 10, 15, 'lazer')
	weaponsArr.push(bullet);
}

function drawHero(){
	if(collisionAllow){
		hero.img = heroShipImg;
	}else{
		hero.img = heroShipWoundedImg;
	}
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
		if(sound){
			soundFunc(shot, 0.2);
		}
		if(hero.weaponKind === 'L'){
			if(hero.weaponPower === 1){
				addLazer(hero.x+hero.width/2, hero.y, 0, -2);

			}
			if(hero.weaponPower === 2){
				addLazer(hero.x, hero.y, 0, -2);
				addLazer(hero.x+hero.width, hero.y, 0, -2);
				
			}
			if(hero.weaponPower === 3){
				addLazer(hero.x, hero.y, -0.5, -2);
				addLazer(hero.x+hero.width/2, hero.y, 0, -2);
				addLazer(hero.x+hero.width, hero.y, 0.5, -2);
			
			}
			if(hero.weaponPower === 4){
				addLazer(hero.x, hero.y, -0.5, -2);
				addLazer(hero.x, hero.y, 0, -2);
				addLazer(hero.x+hero.width/2, hero.y, 0, -2);
				addLazer(hero.x+hero.width, hero.y, 0, -2);
				addLazer(hero.x+hero.width, hero.y, 0.5, -2);
			
			}
			if(hero.weaponPower === 5){
				addLazer(hero.x, hero.y, -1, -2);
				addLazer(hero.x, hero.y, -0.5, -2);
				addLazer(hero.x+hero.width/2-7, hero.y, -0.1, -2);
				addLazer(hero.x+hero.width/2, hero.y, 0, -2);
				addLazer(hero.x+hero.width/2+7, hero.y, 0.1, -2);
				addLazer(hero.x+hero.width, hero.y, 0.5, -2);
				addLazer(hero.x+hero.width, hero.y, 1, -2);
				
			}
		}

		if(hero.weaponKind === 'R'){
			if(hero.weaponPower === 1){
				addRocket(hero.x+hero.width/2, hero.y, 0, -2, 'center');

			}
			if(hero.weaponPower === 2){
				addRocket(hero.x, hero.y, 0, -2, 'left');
				addRocket(hero.x+hero.width, hero.y, 0, -2, 'right');
			}
			if(hero.weaponPower === 3){
				addRocket(hero.x, hero.y, -0.5, -2, 'left');
				addRocket(hero.x+hero.width/2, hero.y, 0, -2);
				addRocket(hero.x+hero.width, hero.y, 0.5, -2, 'right');
			}
			if(hero.weaponPower === 4){
				addRocket(hero.x, hero.y, -0.5, -2, 'left');
				addRocket(hero.x, hero.y, 0, -2, 'left');
				addRocket(hero.x+hero.width, hero.y, 0, -2, 'right');
				addRocket(hero.x+hero.width, hero.y, 0.5, -2, 'right');
			
			}
			if(hero.weaponPower === 5){
				addRocket(hero.x, hero.y, -0.5, -2, 'left');
				addRocket(hero.x, hero.y, 0, -2, 'left');
				addRocket(hero.x+hero.width/2, hero.y, 0, -2, 'center');
				addRocket(hero.x+hero.width, hero.y, 0, -2, 'right');
				addRocket(hero.x+hero.width, hero.y, 0.5, -2, 'right');
			
			}
		}

		if(hero.weaponKind === 'S'){
			if(hero.weaponPower === 1){

				addStarWeapon(hero.x+hero.width/2,hero.y, randomNum(-1, 1), -2)

			}
			if(hero.weaponPower === 2){

				addStarWeapon(hero.x+hero.width,hero.y, randomNum(-1, 1), -2)
				addStarWeapon(hero.x,hero.y, randomNum(-1, 1), -2)

			}
			if(hero.weaponPower === 3){

				addStarWeapon(hero.x+hero.width,hero.y, randomNum(-1, 1), -2)
				addStarWeapon(hero.x+hero.width/2,hero.y, randomNum(-1, 1), -2)
				addStarWeapon(hero.x,hero.y, randomNum(-1, 1), -2)

			}
			if(hero.weaponPower === 4){

				addStarWeapon(hero.x+hero.width,hero.y, randomNum(-1, 1), -2)
				addStarWeapon(hero.x+hero.width/2,hero.y, randomNum(-1, 1), -2)
				addStarWeapon(hero.x,hero.y, randomNum(-1, 1), -2)

			}
			if(hero.weaponPower === 5){

				addStarWeapon(hero.x+hero.width,hero.y, randomNum(-1, 1), -2)
				addStarWeapon(hero.x+hero.width/2,hero.y, randomNum(-1, 1), -2)
				addStarWeapon(hero.x,hero.y, randomNum(-1, 1), -2)

			}
			
		}
		
		fire = false;
		setTimeout(fireTrue, fireOften);

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

document.addEventListener('keydown', function(event) {
	if (event.code == 'ArrowLeft') {
		hero.x += -heroSpeedX;
	}
	if (event.code == 'ArrowRight') {
		hero.x += heroSpeedX;
	}
	if (event.code == 'ArrowUp') {
		hero.y += -heroSpeedY;
	}
	if (event.code == 'ArrowDown') {
		hero.y += heroSpeedY;
	}
});

let allowMouse = true;
/*
if(allowMouse){
	canvas.addEventListener('mousemove', function(event){
				
					hero.x = event.offsetX - 100;
					hero.y = event.offsetY-25;
					console.log(allowMouse)
			})
}
*/

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};


if(isMobile.any()){
	rightHero.style.display  = 'block';
	leftHero.style.display  = 'block';
	topHero.style.display  = 'block';
	downHero.style.display  = 'block';

	heroSpeedX = 2;
	heroSpeedY = 2;

	allowMouse = false;


}


// Random Numbers===========================================
function randomNum(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

// Random Numbers===========================================


// Array with enemy=================================
const enemyArr = [];
// Array with enemy=================================




//function Enemy(img, x, y, speedX, speedY, width, height)

///////////////////////////////////////////////////////////////////////////
// Adding enemy==========================================
function addEnemy(){
	let enemy = new Enemy(enemyShipImg, randomNum(20, 480),-40, randomNum(-1, 1), randomNum(1, 2), 20, 30, 'ship', rockrtEnemyLife)
	enemyArr.push(enemy);
}

let rockrtEnemyLife = 1;

let asterEnemyLife = 4;

function addEnemyAsterRed(x, y, speedX, speedY,width, height,name, life){
	let enemy = new Enemy(enemyAsterRedImg, x, y, speedX, speedY, width, height, name, life);
	enemyArr.push(enemy);
}

function addShipRed(x, y, speedX, speedY,width, height,name, life){
	let enemy = new Enemy(enemyShipRedImg, randomNum(20, 480),-40, randomNum(-1, 1), randomNum(1, 1), 30, 30, 'redShip', rockrtEnemyLife)
	enemyArr.push(enemy);
	
}

function addEnemyLazer(img, x, y, speedX, speedY, width, height, name, life){
	let enemy = new Enemy(img, x, y, speedX, speedY,width, height,name, life)
	enemyArr.push(enemy);
}

	//timer to create enemy===========================


setInterval(function run() {
	if( enemyArr.length < sizeEnemyArr && fireToLive && startGame){
		addEnemy();
	}
}, mainInterval);


setInterval(function run() {
	if( enemyArr.length < sizeEnemyArr && fireToLive && startGame && allowAster){
		addEnemyAsterRed(randomNum(20, 480), -40, randomNum(-1, 1), randomNum(1, 1.5),40, 40,'asterRed', asterEnemyLife);
	}
}, asterInterval);


setInterval(function run() {
	if( enemyArr.length < sizeEnemyArr && fireToLive && startGame && allowRedShip){
		addShipRed();
	}
}, redShipInterval);
	//timer to create enemy===========================


// Adding enemy==========================================
////////////////////////////////////////////////////////////////////////
function animateSth(img, sizeX, posX, sizeY, posY, x, y, width, height, sizeRow, sizeColumn){
	context.drawImage(img, sizeX*Math.floor(posX), sizeY*posY, sizeX, sizeY, x, y, width, height)

	posX += 0.1;
	console.log(posX);
	if(posX > sizeRow ){
		
		posX = 0;
		posY += 1;
		if(posY > sizeColumn){
			posY = 0;
		}
		
		
	}
}








//=/////////////////////////////////////////////////////////////////////////////////////////////
// CTX draw enemyis//////////////////////////////
function drawEnemy(){
	for(let i=0;i<enemyArr.length; i++){


		enemyArr[i].x += enemyArr[i].speedX;
		enemyArr[i].y += enemyArr[i].speedY;
		if(enemyArr[i].x + enemyArr[i].width >=500 || enemyArr[i].x <=0){
			enemyArr[i].speedX *= -1;
		}

		//Drawing ship enemy============================
			if(enemyArr[i].name === 'ship'){
				context.drawImage(enemyArr[i].img, 70*Math.floor(enemyArr[i].N_x), 70*enemyArr[i].N_y, 70, 70, enemyArr[i].x, enemyArr[i].y, enemyArr[i].width, enemyArr[i].height)

					enemyArr[i].N_x += 0.2;
					if(enemyArr[i].N_x > 6.9 ){
							
							enemyArr[i].N_x = 0;
							enemyArr[i].N_y += 1;
							if(enemyArr[i].N_y > 3){
								enemyArr[i].N_y = 0;
							}
					}
			}
		//Drawing ship enemy============================

		//Drawing AsteroidRed enemy============================
			if(enemyArr[i].name === 'asterRed' || enemyArr[i].name === 'asterSmall'){
				context.drawImage(enemyArr[i].img, 170*Math.floor(enemyArr[i].N_x), 160*enemyArr[i].N_y, 170, 160, enemyArr[i].x, enemyArr[i].y, enemyArr[i].width, enemyArr[i].height)

					enemyArr[i].N_x += 0.2;
					if(enemyArr[i].N_x > 3.9 ){
							
							enemyArr[i].N_x = 0;
							enemyArr[i].N_y += 1;
							if(enemyArr[i].N_y > 3){
								enemyArr[i].N_y = 0;
							}
					}
			}

		//Drawing AsteroidRed enemy============================


		//Drawing rocket enemy============================
			if(enemyArr[i].name === 'redShip' || enemyArr[i].name === 'enemyLazer'){
				context.drawImage(enemyArr[i].img, enemyArr[i].x, enemyArr[i].y, enemyArr[i].width, enemyArr[i].height);

				if(enemyArr[i].name === 'redShip'){

					enemyArr[i].fire++;

					if(enemyArr[i].fire%80 === 0){
						addEnemyLazer(enemyLazerImg, enemyArr[i].x+10, (enemyArr[i].y+enemyArr[i].height) , 0, 3, 10, 15,'enemyLazer', 1)
							
			
					}

				}
			}
		//Drawing rocket enemy============================

		//delete enemy from array===================
		if(enemyArr[i].y >=300 || enemyArr[i].y < -50 || enemyArr[i].x >=520 || enemyArr[i].x < -10){
			enemyArr.splice(i, 1);
		}
		//delete enemy from array===================
	}
}



// CTX draw enemyis//////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////







////////////Object enemy====================================
function Enemy(img, x, y, speedX, speedY, width, height, name, life){
	this.img = img;
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.speedX = speedX;
	this.speedY = speedY;

	this.N_x = 0;
	this.N_y = 0;

	this.life = life;
	this.name = name;
	this.fire = 0;

}

////////////Object enemy====================================


let lazer = document.getElementById('lazer');

let rocketimg = document.getElementById('rocket');

let starWeaponimg = document.getElementById('starWeapon');


const weaponsArr = [];


function Weapon(img, x, y, speedX, speedY, width, height, name, power, moveFree, moveDir){
	this.img = img;
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.speedX = speedX;
	this.speedY = speedY;

	this.N_x = 0;
	this.N_y = 0;

	this.name = name;
	this.power = power;

	this.timer = 0;
	this.moveFree = moveFree;

	this.moveDir = moveDir;

}


function addLazer(x, y, spedX, speedY){
	let bullet = new Weapon(lazer, x, y, spedX, speedY, 10, 15, 'lazer', 1, true)
	weaponsArr.push(bullet);

}

function addRocket(x, y, spedX, speedY, moveDir){
	let bullet = new Weapon(rocketimg, x, y, spedX, speedY, 10, 15, 'rocket', rocketPower, false, moveDir)
	weaponsArr.push(bullet);

}

function addStarWeapon(x, y, spedX, speedY){
	let bullet = new Weapon(starWeaponimg, x, y, spedX, speedY, 15, 15, 'starWeapon', 1, true)
	weaponsArr.push(bullet);

}


function drawWeapon(){
	if(weaponsArr.length > 0){
		for(let i=0;i<weaponsArr.length; i++){

			if(weaponsArr[i].name === 'rocket' && weaponsArr[i].moveFree === false){
		//		console.log(weaponsArr[i].moveFree);
				weaponsArr[i].timer++;
				if(weaponsArr[i].moveDir === 'left'){
					weaponsArr[i].x-= 1;
				}
				if(weaponsArr[i].moveDir === 'right'){
					weaponsArr[i].x+= 1;
				}
				if(weaponsArr[i].moveDir === 'center'){
				//	weaponsArr[i].x+= 1;
				}
				if(weaponsArr[i].timer%20 === 0){
					weaponsArr[i].moveFree = true;
				}
			}
			if(weaponsArr[i].moveFree){
				weaponsArr[i].x += weaponsArr[i].speedX;
				weaponsArr[i].y += weaponsArr[i].speedY;
			}
			
			//Drawing bullets enemy============================
			if(weaponsArr[i].name === 'lazer' || weaponsArr[i].name === 'rocket'){
				context.drawImage(weaponsArr[i].img, weaponsArr[i].x, weaponsArr[i].y, weaponsArr[i].width, weaponsArr[i].height);
			}
			//Drawing rocket enemy============================
			if(weaponsArr[i].name === 'starWeapon'){
				weaponsArr[i].timer+=4;
				drawRect(weaponsArr[i].img, weaponsArr[i].x, weaponsArr[i].y, weaponsArr[i].width, weaponsArr[i].height, weaponsArr[i].timer);
				if(weaponsArr[i].x+weaponsArr[i].width > 500 || weaponsArr[i].x < 0){
					weaponsArr[i].speedX *= -1;
				}
				if(weaponsArr[i].y+weaponsArr[i].height > 300 || weaponsArr[i].y < 0){
					weaponsArr[i].speedY *= -1;
				}
				if(weaponsArr[i].timer%1200 === 0){
					weaponsArr.splice(i, 1);
				}
			}

			if(weaponsArr[i].x  >=500 || weaponsArr[i].x + weaponsArr[i].width <=0 || 
				weaponsArr[i].y + weaponsArr[i].height < 0 ){
				weaponsArr.splice(i, 1);
			}
		}
	}
}





function collision_02(obj_01, obj_02){

			if(	obj_01.x+obj_01.width > obj_02.x+5 && obj_01.y+obj_01.height > obj_02.y+5 &&
				obj_01.x+5 < obj_02.x+obj_02.width && obj_01.y+5 < obj_02.y+obj_02.height ){

				return true;
			}

}



function collisionEnemyWithHero(){
	if(enemyArr.length>0 && hero){
		for(j in enemyArr){
			if(collision_02(enemyArr[j],hero) && collisionAllow){
				enemyArr[j].life--;
				addSmallExplosion_02(enemyArr[j].x-(enemyArr[j].width/2), enemyArr[j].y+enemyArr[j].height );
				if(enemyArr[j].life <= 0){
					addExplosion_01(enemyArr[j].x-(enemyArr[j].width/2), enemyArr[j].y);

					addBonusFromEnemy(enemyArr[j].x, enemyArr[j].y);

					if(sound){
						soundFunc(shot, 0.7);
					}
					enemyArr.splice(j, 1);
					scoreVar++;
					score.innerHTML = `Score: ${scoreVar}`;
					if(scoreVar > hiScoreVar){
						hiScoreVar = scoreVar;
						hiScore.innerHTML = `HiScore: ${hiScoreVar}`;
					}
				}

				if(hero.life > 0){
					hero.life--;
					let lifeBar = percentage(playerLifeVar, hero.life);
					if(lifeBar < 60){
						lifeRow.style.backgroundColor  = `#D8B61F`;
					};
					if(lifeBar < 30){
						lifeRow.style.backgroundColor  = `#F00`;
					};

				//Rewrite pk=layers life===================
					lifeRow.style.width = `${lifeBar}%`;
				//Rewrite pk=layers life===================
					if(hero.weaponPower > 1){
						hero.weaponPower --;
						if(lazerBulSpeed < 450){
							lazerBulSpeed += 50;
						}
						if(hero.weaponKind === 'L'){
							fireOften = lazerBulSpeed;
						}
						if(rocketPower > 2){
							rocketPower--;
						}
						console.log(hero.weaponPower)

						weaponPower.innerHTML = `Power: ${hero.weaponPower}`;
					}
				}
				collisionAllow = false;
			//	playerLife.innerHTML = `Life: ${hero.life}`;
				setTimeout(collisionAgain, 5000);
				if(hero.life <= 0){
				//	heroAlive = false;
					if(sound){
						soundFunc(shot, 1);
					}
					fireToLive = false;
					addExplosionHero(hero.x-100, hero.y-80);
					heroSpeedX = 0;
					heroSpeedY = 0;
				//	restart();
					setTimeout(heroDead, 3000);
				}

				return;
			}
		}
	}
}

function heroDead(){
	heroAlive = false;
	startButton.innerHTML = "restart";
}

function collisionBulletsEnemy(){
	for(i in weaponsArr){
		for(j in enemyArr){
			if(collision_02(weaponsArr[i], enemyArr[j])){
				enemyArr[j].life -= weaponsArr[i].power;
				if(enemyArr[j].name === 'enemyLazer'){
				}
				
				if(enemyArr[j].life <= 0){

					if(enemyArr[j].name ==='asterRed'){
						addEnemyAsterRed(enemyArr[j].x,enemyArr[j].y,randomNum(-2, 2), randomNum(0, 1.5),20, 20,'asterSmall', 2);
						addEnemyAsterRed(enemyArr[j].x,enemyArr[j].y,randomNum(-2, 2), randomNum(0, 1.5),20, 20,'asterSmall', 2);
						addEnemyAsterRed(enemyArr[j].x,enemyArr[j].y,randomNum(-2, 2), randomNum(0, 1.5),20, 20, 'asterSmall',2);

					}

					///Adding bonuses Exposion sound without enemy weapon
					if(enemyArr[j].name ==='asterRed' || enemyArr[j].name ==='redShip' || enemyArr[j].name ==='ship' 
						|| enemyArr[j].name ==='asterSmall'){

							addBonusFromEnemy(enemyArr[j].x, enemyArr[j].y);

							addExplosion_01(enemyArr[j].x-(enemyArr[j].width/2), enemyArr[j].y);
							if(sound){
								soundFunc(shot, 0.7);
							}
					}
					///Adding bonuses Exposion sound without enemy weapon
					enemyArr.splice(j, 1);
					scoreVar++;
			//// Increase Emeny power and count==============================

					enemyApearence(scoreVar)
					
			//// Increase Emeny power and count==============================
					score.innerHTML = `Score: ${scoreVar}`;
					if(scoreVar > hiScoreVar){
						hiScoreVar = scoreVar;
						hiScore.innerHTML = `HiScore: ${hiScoreVar}`;
					}
				}
				addSmallExplosion_01(weaponsArr[i].x, weaponsArr[i].y);
				if(sound){
					soundFunc(shot, 0.4);
				}
				weaponsArr.splice(i, 1);
				
				return;
			}
		}
	}
}



///COlision  with bonuses===================================
function collisionHeroWithBonuses(){
	if(bonusesArr.length>0 && hero){
		for(j in bonusesArr){
			if(collision_02(bonusesArr[j],hero)){
				if(sound){
					soundFunc(bonusGet, 0.5);
				}
				if(bonusesArr[j].name === 'powerUp'){
					if(hero.weaponPower< 5){
						hero.weaponPower++;
						if(lazerBulSpeed > 350){
							lazerBulSpeed -= 50;
						}
						if(hero.weaponKind === 'L'){
							fireOften = lazerBulSpeed;
						}
						if(rocketPower < 5){
							rocketPower++
						}
					}
					weaponPower.innerHTML = `Power: ${hero.weaponPower}`;
				}

				if(bonusesArr[j].name === 'lifeUp'){

					if(hero.life < playerLifeVar){
						hero.life++;
						let lifeBar = percentage(playerLifeVar, hero.life);
						lifeRow.style.width = `${lifeBar}%`;
					}
					
				}

				if(bonusesArr[j].name === 'rocketBon'){
					hero.weaponKind = bonusesArr[j].kind;

					fireOften = rocketBulSpeed;

					weaponIconRocket.style.display = 'block';
					weaponIconLazer.style.display = 'none';



				}

				if(bonusesArr[j].name === 'lazerBon'){
					hero.weaponKind = bonusesArr[j].kind;

					fireOften = lazerBulSpeed;
					console.log('lazer',fireOften);

					weaponIconRocket.style.display = 'none';
					weaponIconLazer.style.display = 'block';
				}

				if(bonusesArr[j].name === 'starWeaponBon'){
					hero.weaponKind = bonusesArr[j].kind;

					weaponIconStar.style.display = 'block';

					weaponIconRocket.style.display = 'none';
					weaponIconLazer.style.display = 'none';

				}

				bonusesArr.splice(j, 1);

				return;
			}
		}
	}
}
///COlision  with bonuses===================================




////EXPLOSION///////////////////////////////////////////////////

var explosion_01Img = document.getElementById('explosion_01');

var explosion_02Img = document.getElementById('explosion_02');

const explosionArr = [];

function Explosion(img, x, y,speedY, width, height, name){
	this.img = img;
	this.x = x;
	this.y = y;

	this.speedY = speedY;

	this.width = width;
	this.height = height;

	this.N_x = 0;
	this.N_y = 0;

	this.name = name;
	this.del = false;

}


function addExplosion_01(x, y){
	let exp = new Explosion(explosion_01Img, x, y,0.5, 60, 60, 'explosion_01')
	explosionArr.push(exp);

}

function addSmallExplosion_01(x, y){
	let exp = new Explosion(explosion_02Img, x, y,0.2, 20, 20, 'explosion_02')
	explosionArr.push(exp);

}

function addSmallExplosion_02(x, y){
	let exp = new Explosion(explosion_02Img, x, y,0.2, 30, 30, 'explosion_02')
	explosionArr.push(exp);

}


function addExplosionHero(x, y){
	let exp = new Explosion(explosion_01Img, x, y,0, 200, 200, 'explosion_03')
	explosionArr.push(exp);

}


function drawExplosion(){
	if(explosionArr.length > 0){
		for(let i=0;i<explosionArr.length; i++){

//////////Exp;osion move /======================================
//			explosionArr[i].x += explosionArr[i].speedX;
			explosionArr[i].y += explosionArr[i].speedY;
//////////Exp;osion move /======================================



			if(explosionArr[i].name === 'explosion_01'){
				context.drawImage(explosionArr[i].img, 512*Math.floor(explosionArr[i].N_x), 512*explosionArr[i].N_y, 512, 512,
				 explosionArr[i].x, explosionArr[i].y, explosionArr[i].width, explosionArr[i].height)

					explosionArr[i].N_x += 1;
					if(explosionArr[i].N_x > 7.9 ){
							explosionArr[i].N_x = 0;
							explosionArr[i].N_y += 1;
							if(explosionArr[i].N_y > 5){
								explosionArr[i].del = true;
							}
					}
			}

			if(explosionArr[i].name === 'explosion_02'){
				context.drawImage(explosionArr[i].img, 110*Math.floor(explosionArr[i].N_x), 109*explosionArr[i].N_y, 110, 109,
				 explosionArr[i].x, explosionArr[i].y, explosionArr[i].width, explosionArr[i].height)

					explosionArr[i].N_x += 0.5;
					if(explosionArr[i].N_x > 8.9 ){
						explosionArr[i].del = true;
					}
			}


			if(explosionArr[i].name === 'explosion_03'){
				context.drawImage(explosionArr[i].img, 512*Math.floor(explosionArr[i].N_x), 512*explosionArr[i].N_y, 512, 512,
				 explosionArr[i].x, explosionArr[i].y, explosionArr[i].width, explosionArr[i].height)

					explosionArr[i].N_x += 0.4;
					if(explosionArr[i].N_x > 7.9 ){
							explosionArr[i].N_x = 0;
							explosionArr[i].N_y += 1;
							if(explosionArr[i].N_y > 7){
								explosionArr[i].del = true;
							}
					}
			}

			//delete explosion from array===================
			if(explosionArr[i].del === true ){
				explosionArr.splice(i, 1);
			}
			//delete explosion from array===================
		}
	}
}


let powerUpImg = document.getElementById('powerUp');

let rocketBonusImg = document.getElementById('rocketBonus');

let lazerBonusImg = document.getElementById('lazerBonus');

let lifeUpBonusImg = document.getElementById('lifeUp');

let starWeaponBonusImg = document.getElementById('starWeaponBonus');



let bonusesArr = [];



function Bonus(img, x, y, speedX, speedY, width, height, name, life, kind){
	this.img = img;
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.speedX = speedX;
	this.speedY = speedY;

	this.N_x = 0;
	this.N_y = 0;

	this.name = name;
	this.life = life;
	this.kind = kind;

}
/*
setInterval(function run() {
	if( bonusesArr.length < 10 && fireToLive && startGame){
		addPowerUpBonus();
		addLazerBonus();
		addRocketBonus();
		addLazerBonusEn(100, 100);
	}
}, 5000);

*/

function addBonusFromEnemy(x, y){
	let allowB = randomNum(0, 2);

	if (allowB === 2){
		let kindB = randomNum(0, 4); 


		if(kindB === 1){
			addPowerUpBonusEn(x, y);
		}else if(kindB === 2){
			addRocketBonusEn(x, y);
		}else if(kindB === 3){
			addLazerBonusEn(x, y);
		}else if(kindB === 4){
			addLifeUpBonusEn(x, y);
		}else if(kindB === 0){
			addStarWeaponBonusEn(x, y);
		}

	}
	return;
}

function drawBonuses(){
	if(bonusesArr.length > 0){
		for(let i=0;i<bonusesArr.length; i++){


			bonusesArr[i].x += bonusesArr[i].speedX;
			bonusesArr[i].y += bonusesArr[i].speedY;
			if(bonusesArr[i].x + bonusesArr[i].width >=500 || bonusesArr[i].x <=0){
				bonusesArr[i].speedX *= -1;
			}

				if(bonusesArr[i].name === 'powerUp' || bonusesArr[i].name === 'rocketBon' || bonusesArr[i].name === 'lazerBon' || bonusesArr[i].name === 'starWeaponBon'){
					context.drawImage(bonusesArr[i].img, 55*Math.floor(bonusesArr[i].N_x), 55*bonusesArr[i].N_y, 55, 55, bonusesArr[i].x, bonusesArr[i].y, bonusesArr[i].width, bonusesArr[i].height)

						bonusesArr[i].N_x += 0.2;
						if(bonusesArr[i].N_x > 5.9 ){
								
								bonusesArr[i].N_x = 0;
								bonusesArr[i].N_y += 1;
								if(bonusesArr[i].N_y > 2){
									bonusesArr[i].N_y = 0;
								}
						}
				}

				if(bonusesArr[i].name === 'lifeUp' ){
					context.drawImage(bonusesArr[i].img, 140*Math.floor(bonusesArr[i].N_x), 80*bonusesArr[i].N_y, 140, 80, bonusesArr[i].x, bonusesArr[i].y, bonusesArr[i].width, bonusesArr[i].height)

						bonusesArr[i].N_x += 0.1;
						if(bonusesArr[i].N_x > 3.9 ){
								
								bonusesArr[i].N_x = 0;
								bonusesArr[i].N_y += 1;
								if(bonusesArr[i].N_y > 1){
									bonusesArr[i].N_y = 0;
								}
						}
				}

/////////////////Rocket bonus==================================
	/*			if(bonusesArr[i].name === 'rocketBon'){
					context.drawImage(bonusesArr[i].img, 55*Math.floor(bonusesArr[i].N_x), 55*bonusesArr[i].N_y, 55, 55, bonusesArr[i].x, bonusesArr[i].y, bonusesArr[i].width, bonusesArr[i].height)

						bonusesArr[i].N_x += 0.2;
						if(bonusesArr[i].N_x > 5.9 ){
								
								bonusesArr[i].N_x = 0;
								bonusesArr[i].N_y += 1;
								if(bonusesArr[i].N_y > 2){
									bonusesArr[i].N_y = 0;
								}
						}
				}*/
/////////////////Rocket bonus==================================


			//delete enemy from array===================
			if(bonusesArr[i].y >=300 ){
				bonusesArr.splice(i, 1);
			}
			//delete enemy from array===================
		}
	}
}




function addPowerUpBonusEn(x, y){
	let bon = new Bonus(powerUpImg, x, y, randomNum(-1, 1), randomNum(1, 2), 30, 30, 'powerUp', 2, 'none');
	bonusesArr.push(bon);
}

function addLifeUpBonusEn(x, y){
	let bon = new Bonus(lifeUpBonusImg, x, y, randomNum(-1, 1), randomNum(1, 2), 40, 30, 'lifeUp', 2, 'none');
	bonusesArr.push(bon);
}

function addRocketBonusEn(x, y){
	let bon = new Bonus(rocketBonusImg, x, y, randomNum(-1, 1), randomNum(1, 2), 30, 30, 'rocketBon', 2, 'R');
	bonusesArr.push(bon);
}

function addLazerBonusEn(x, y){
	let bon = new Bonus(lazerBonusImg, x, y, randomNum(-1, 1), randomNum(1, 2), 30, 30, 'lazerBon', 2, 'L');
	bonusesArr.push(bon);
}

function addStarWeaponBonusEn(x, y){
	let bon = new Bonus(starWeaponBonusImg, x, y, randomNum(-1, 1), randomNum(1, 2), 30, 30, 'starWeaponBon', 2, 'S');
	bonusesArr.push(bon);
}





function soundFunc(audio, vol){
	audio.pause();
	audio.volume = vol;
	audio.currentTime = 0;
	audio.play();
}

let mainMusic = document.getElementById('mainMusic');

let bonusGet = document.getElementById('bonusGet');

let shot = document.getElementById('shot');


