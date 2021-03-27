









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

	drawWeapon();

	drawEnemy();
	drawHero();
	moveHero();

	collisionBulletsEnemy();
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

///Object Hero /////////////////////=============================
function Hero(img, x, y, speedX, speedY, width, height){
	this.img = img;
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.speedX = speedX;
	this.speedY = speedY;

}


var heroShipImg = document.getElementById('heroShip');

///Object Hero /////////////////////=============================


//Hero creations =========================================


//Hero Datas=====================================
var score = document.getElementById('score');
let scoreVar = 0;

score.innerHTML = `Score: ${scoreVar}`;



let heroSpeedX = 2;
let heroSpeedY = 2;

let N_x = 0;
let N_y = 0;

let fire = true;

function fireTrue(){
	fire = true;
}

let hero = new Hero(heroShipImg, 250, 200, heroSpeedX, heroSpeedY, 30, 50)


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

	if(fire){
		addLazer(hero.x+(hero.width/2), hero.y);
		fire = false;

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




// Random Numbers===========================================
function randomNum(min, max) {
	return Math.random() * (max - min) + min;
}

// Random Numbers===========================================



var rocketimg = document.getElementById('rocket');

var enemyShipImg = document.getElementById('enemyShip');



// Array with enemy=================================
const enemyArr = [];
// Array with enemy=================================




//function Enemy(img, x, y, speedX, speedY, width, height)

///////////////////////////////////////////////////////////////////////////
// Adding enemy==========================================
function addEnemy(){
	let enemy = new Enemy(enemyShipImg, randomNum(20, 480),-40, randomNum(-1, 1), randomNum(1, 2), 20, 30, 'ship', 2)
	enemyArr.push(enemy);
}

function addEnemy_02(){
	let enemy = new Enemy(rocketimg, randomNum(20, 480),-40, randomNum(-1, 1), randomNum(1, 2), 20, 30, 'rocket', 1)
	enemyArr.push(enemy);
}

	//timer to create enemy===========================
setInterval(function run() {
	if( enemyArr.length < 10){
		addEnemy();
		addEnemy_02();
	}
}, 1000);
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
		//delete enemy from array===================
		if(enemyArr[i].y >=300 ){
			enemyArr.splice(i, 1);
		}
		//delete enemy from array===================

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

		//Drawing rocket enemy============================
			if(enemyArr[i].name === 'rocket'){
				context.drawImage(enemyArr[i].img, enemyArr[i].x, enemyArr[i].y, enemyArr[i].width, enemyArr[i].height);
			}
		//Drawing rocket enemy============================
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


var lazer = document.getElementById('lazer');


const weaponsArr = [];


function Weapon(img, x, y, speedX, speedY, width, height, name){
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

}


function addLazer(x, y){
	let bullet = new Weapon(lazer, x, y, 0, -3, 10, 15, 'lazer')
	weaponsArr.push(bullet);

}


function drawWeapon(){
	if(weaponsArr.length > 0){
		for(let i=0;i<weaponsArr.length; i++){

			
			weaponsArr[i].x += weaponsArr[i].speedX;
			weaponsArr[i].y += weaponsArr[i].speedY;
			//Drawing rocket enemy============================
			if(weaponsArr[i].name === 'lazer'){
				context.drawImage(weaponsArr[i].img, weaponsArr[i].x, weaponsArr[i].y, weaponsArr[i].width, weaponsArr[i].height);
			}
			//Drawing rocket enemy============================


			if(weaponsArr[i].x  >=500 || weaponsArr[i].x + weaponsArr[i].width <=0){
				weaponsArr.splice(i, 1);
			}
			//delete enemy from array===================
			if(weaponsArr[i].y + weaponsArr[i].height < 0 ){
				weaponsArr.splice(i, 1);
			}
			//delete enemy from array===================
		}
	}
}




function collision(arr_1, arr_2){

			if(	arr_1[i].x+arr_1[i].width > arr_2[j].x+5 && arr_1[i].y+arr_1[i].height > arr_2[j].y+5 &&
				arr_1[i].x+5 < arr_2[j].x+arr_2[j].width && arr_1[i].y+5 < arr_2[j].y+arr_2[j].height ){

				return true;
			}

}


function collisionBulletsEnemy(){
	for(i in weaponsArr){
		for(j in enemyArr){
			if(collision(weaponsArr, enemyArr)){
				enemyArr[j].life--;
				if(enemyArr[j].life <= 0){
					addExplosion_01(enemyArr[j].x-(enemyArr[j].width/2), enemyArr[j].y);
					enemyArr.splice(j, 1);
					scoreVar++;
					score.innerHTML = `Score: ${scoreVar}`;
				}
				addSmallExplosion_01(weaponsArr[i].x, weaponsArr[i].y);
				weaponsArr.splice(i, 1);
				
				return;
			}
		}
	}
}




////EXPLOSION///////////////////////////////////////////////////

var explosion_01Img = document.getElementById('explosion_01');

const explosionArr = [];

function Explosion(img, x, y, width, height, name){
	this.img = img;
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.N_x = 0;
	this.N_y = 0;

	this.name = name;
	this.del = false;

}


function addExplosion_01(x, y){
	let exp = new Explosion(explosion_01Img, x, y, 60, 60, 'explosion_01')
	explosionArr.push(exp);

}

function addSmallExplosion_01(x, y){
	let exp = new Explosion(explosion_01Img, x, y, 20, 20, 'explosion_01')
	explosionArr.push(exp);

}


function drawExplosion(){
	if(explosionArr.length > 0){
		for(let i=0;i<explosionArr.length; i++){


			if(explosionArr[i].name === 'explosion_01'){
				context.drawImage(explosionArr[i].img, 512*Math.floor(explosionArr[i].N_x), 512*explosionArr[i].N_y, 512, 512,
				 explosionArr[i].x, explosionArr[i].y, explosionArr[i].width, explosionArr[i].height)

					explosionArr[i].N_x += 0.9;
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