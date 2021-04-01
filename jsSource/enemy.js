

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

let sizeEnemyArr = 8;
setInterval(function run() {
	if( enemyArr.length < sizeEnemyArr && fireToLive && startGame){
		addEnemy();
	}
}, 1000);

let allowAster = false;

setInterval(function run() {
	if( enemyArr.length < sizeEnemyArr && fireToLive && startGame && allowAster){
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