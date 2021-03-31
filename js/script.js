









let canvas = document.getElementById('game');
let context = canvas.getContext('2d');


let wrapper = document.getElementById('wrapper');



let startButton = document.querySelector('.start');

let infoButton = document.querySelector('.info');
let closeInfo = document.querySelector('.closeInfo');


let cover = document.querySelector('.cover');
let infoBox = document.querySelector('.infoBox');

let optionBox = document.querySelector('.optionBox');

function restart(){
	if(heroAlive === false){
		startButton.innerHTML = "restart";
	}
}


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
		heroAlive = true;
		startButton.innerHTML = "pause";
		hero.life = playerLifeVar;
		lifeRow.style.width = `${100}%`;
		lifeRow.style.backgroundColor  = `#47B932`;
		game();
		scoreVar = 0;
		score.innerHTML = `Score: ${scoreVar}`;
		heroSpeedX = 2;
		heroSpeedY = 2;
		hero.x = 240;
		hero.y = 200;
		fireToLive = true;
		hero.weaponPower = weaponPowerVar;
		weaponPower.innerHTML = `Power: ${hero.weaponPower}`;
		rockrtEnemyLife = 1;

	}
}


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


let heroShipImg = document.getElementById('heroShip');
let heroShipWoundedImg = document.getElementById('heroShipWounded');

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

weaponPower.innerHTML = `Power: ${weaponPowerVar}`;


let playerWeapon = document.getElementById('playerWeapon');

let weaponKind = 'L';

let weaponIcon = document.getElementById('weaponIcon');

let weaponIconLazer = document.getElementById('weaponIconLazer');
let weaponIconRocket = document.getElementById('weaponIconRocket');


//playerWeapon.innerHTML = `Weapon: ${weaponKind}`;


//WeaponPower===========================
////////Life data======================
let playerLife = document.getElementById('playerLife');
let lifeRow = document.getElementById('lifeRow');
let playerLifeVar = 6;


lifeRow.style.width = `${100}%`;

function percentage(num, curNum)
{
	//return (num/100)*per;
	return (curNum * 100)/ num;
}

//playerLife.innerHTML = `Life: ${playerLifeVar}`;
////////Life data======================

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
				addLazer(hero.x+hero.width, hero.y, 0, -2);
				addLazer(hero.x+hero.width, hero.y, 0.5, -2);
			
			}
			if(hero.weaponPower === 5){
				addLazer(hero.x, hero.y, -1, -2);
				addLazer(hero.x, hero.y, -0.5, -2);
				addLazer(hero.x+hero.width/2, hero.y, 0, -2);
				addLazer(hero.x+hero.width, hero.y, 0.5, -2);
				addLazer(hero.x+hero.width, hero.y, 1, -2);
				
			}
			fire = false;
			setTimeout(fireTrue, 500);
		}
		if(hero.weaponKind === 'R'){
			if(hero.weaponPower === 1){
				addRocket(hero.x+hero.width/2, hero.y, 0, -2);
			}
			if(hero.weaponPower === 2){
				addRocket(hero.x, hero.y, 0, -2);
				addRocket(hero.x+hero.width, hero.y, 0, -2);
			}
			if(hero.weaponPower === 3){
				addRocket(hero.x, hero.y, -0.5, -2);
				addRocket(hero.x+hero.width/2, hero.y, 0, -2);
				addRocket(hero.x+hero.width, hero.y, 0.5, -2);
			}
			if(hero.weaponPower === 4){
				addRocket(hero.x, hero.y, -0.5, -2);
				addRocket(hero.x, hero.y, 0, -2);
				addRocket(hero.x+hero.width, hero.y, 0, -2);
				addRocket(hero.x+hero.width, hero.y, 0.5, -2);
			
			}
			fire = false;
			setTimeout(fireTrue, 500);
		}
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


}


// Random Numbers===========================================
function randomNum(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

// Random Numbers===========================================




let enemyShipImg = document.getElementById('enemyShip');

let enemyAsterRedImg = document.getElementById('enemyAsterRed');




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

	//timer to create enemy===========================
setInterval(function run() {
	if( enemyArr.length < 10 && fireToLive && startGame){
		addEnemy();
	}
}, 1000);

setInterval(function run() {
	if( enemyArr.length < 10 && fireToLive && startGame){
		addEnemyAsterRed(randomNum(20, 480), -40, randomNum(-1, 1), randomNum(1, 1.5),40, 40,'asterRed', asterEnemyLife);
	}
}, 2000);
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
			if(enemyArr[i].name === 'rocket'){
				context.drawImage(enemyArr[i].img, enemyArr[i].x, enemyArr[i].y, enemyArr[i].width, enemyArr[i].height);
			}
		//Drawing rocket enemy============================

		//delete enemy from array===================
		if(enemyArr[i].y >=300 || enemyArr[i].y < -50){
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

}

////////////Object enemy====================================


let lazer = document.getElementById('lazer');

let rocketimg = document.getElementById('rocket');


const weaponsArr = [];


function Weapon(img, x, y, speedX, speedY, width, height, name, power){
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

}


function addLazer(x, y, spedX, speedY){
	let bullet = new Weapon(lazer, x, y, spedX, speedY, 10, 15, 'lazer', 1)
	weaponsArr.push(bullet);

}

function addRocket(x, y, spedX, speedY){
	let bullet = new Weapon(rocketimg, x, y, spedX, speedY, 10, 15, 'rocket', 2)
	weaponsArr.push(bullet);

}


function drawWeapon(){
	if(weaponsArr.length > 0){
		for(let i=0;i<weaponsArr.length; i++){

			
			weaponsArr[i].x += weaponsArr[i].speedX;
			weaponsArr[i].y += weaponsArr[i].speedY;
			//Drawing rocket enemy============================
			if(weaponsArr[i].name === 'lazer' || weaponsArr[i].name === 'rocket'){
				context.drawImage(weaponsArr[i].img, weaponsArr[i].x, weaponsArr[i].y, weaponsArr[i].width, weaponsArr[i].height);
			}
			//Drawing rocket enemy============================


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
					lifeRow.style.width = `${lifeBar}%`;
					if(hero.weaponPower > 1){
						hero.weaponPower --;
						weaponPower.innerHTML = `Power: ${hero.weaponPower}`;
					}
				}
				collisionAllow = false;
			//	playerLife.innerHTML = `Life: ${hero.life}`;
				setTimeout(collisionAgain, 5000);
				if(hero.life <= 0){
				//	heroAlive = false;
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
	restart();
}

function collisionBulletsEnemy(){
	for(i in weaponsArr){
		for(j in enemyArr){
			if(collision_02(weaponsArr[i], enemyArr[j])){
				enemyArr[j].life -= weaponsArr[i].power;
				if(enemyArr[j].life <= 0){

					if(enemyArr[j].name ==='asterRed'){
						addEnemyAsterRed(enemyArr[j].x,enemyArr[j].y,randomNum(-2, 2), randomNum(0, 1.5),20, 20,'asterSmall', 2);
						addEnemyAsterRed(enemyArr[j].x,enemyArr[j].y,randomNum(-2, 2), randomNum(0, 1.5),20, 20,'asterSmall', 2);
						addEnemyAsterRed(enemyArr[j].x,enemyArr[j].y,randomNum(-2, 2), randomNum(0, 1.5),20, 20, 'asterSmall',2);

					}
					addBonusFromEnemy(enemyArr[j].x, enemyArr[j].y);

					addExplosion_01(enemyArr[j].x-(enemyArr[j].width/2), enemyArr[j].y);
					enemyArr.splice(j, 1);
					scoreVar++;
					if(scoreVar > 30 && scoreVar < 100){
						rockrtEnemyLife = 2;
					}
					if(scoreVar >= 100 && scoreVar < 100){
						rockrtEnemyLife = 3;
					}
					score.innerHTML = `Score: ${scoreVar}`;
					if(scoreVar > hiScoreVar){
						hiScoreVar = scoreVar;
						hiScore.innerHTML = `HiScore: ${hiScoreVar}`;
					}
				}
				addSmallExplosion_01(weaponsArr[i].x, weaponsArr[i].y);
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
				if(bonusesArr[j].name === 'powerUp'){
					if(hero.weaponPower< 5){
						hero.weaponPower++;
					}
					weaponPower.innerHTML = `Power: ${hero.weaponPower}`;
				}

				if(bonusesArr[j].name === 'rocketBon'){
					hero.weaponKind = bonusesArr[j].kind;

					weaponIconRocket.style.display = 'block';
					weaponIconLazer.style.display = 'none';
				}

				if(bonusesArr[j].name === 'lazerBon'){
					hero.weaponKind = bonusesArr[j].kind;

					weaponIconRocket.style.display = 'none';
					weaponIconLazer.style.display = 'block';
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
		}
		else if(kindB === 3){
			addLazerBonusEn(x, y);
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

				if(bonusesArr[i].name === 'powerUp' || bonusesArr[i].name === 'rocketBon' || bonusesArr[i].name === 'lazerBon'){
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


function addPowerUpBonus(){
	let bon = new Bonus(powerUpImg, randomNum(20, 480),-40, randomNum(-1, 1), randomNum(1, 2), 30, 30, 'powerUp', 2, 'none');
	bonusesArr.push(bon);
}


function addRocketBonus(){
	let bon = new Bonus(rocketBonusImg, randomNum(20, 480),-40, randomNum(-1, 1), randomNum(1, 2), 30, 30, 'rocketBon', 2, 'R');
	bonusesArr.push(bon);
}

function addLazerBonus(){
	let bon = new Bonus(lazerBonusImg, randomNum(20, 480),-40, randomNum(-1, 1), randomNum(1, 2), 30, 30, 'lazerBon', 2, 'L');
	bonusesArr.push(bon);
}

function addPowerUpBonusEn(x, y){
	let bon = new Bonus(powerUpImg, x, y, randomNum(-1, 1), randomNum(1, 2), 30, 30, 'powerUp', 2, 'none');
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