
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


canvas.addEventListener('mousemove', function(event){
			
				hero.x = event.offsetX - 100;
				hero.y = event.offsetY-25;
			
		})



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