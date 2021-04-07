

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
function addEnemy(x, y ){
	let enemy = new Enemy(enemyShipImg, x, y, randomNum(-1, 1), randomNum(1, 2), 20, 30, 'ship', rockrtEnemyLife)
	enemyArr.push(enemy);
}

let rockrtEnemyLife = 1;

let asterEnemyLife = 4;

function addEnemyAsterRed(x, y, speedX, speedY,width, height,name, life){
	let enemy = new Enemy(enemyAsterRedImg, x, y, speedX, speedY, width, height, name, life);
	enemyArr.push(enemy);
}

function addShipRed(x, y, speedX, speedY,width, height,name, life){
	let enemy = new Enemy(enemyShipRedImg, x, y, randomNum(-1, 1), randomNum(1, 1), 30, 30, 'redShip', rockrtEnemyLife)
	enemyArr.push(enemy);
	
}

function addEnemyFregat(x, y, speedX, speedY,width, height,name, life){
	let enemy = new Enemy(enemyFregatImg, randomNum(30, 30),-30, randomNum(-1, 1), randomNum(1, 2), 100, 40, 'redFregat', 15);
	enemyArr.push(enemy);
	
}


function addEnemyCarier(x, y, speedX, speedY,width, height,name, life){
	let enemy = new Enemy(enemyCarierImg, randomNum(30, 30),-30, randomNum(-1, 1), randomNum(1, 2), 40, 80, 'redCarier', 15);
	enemyArr.push(enemy);
	
}




function addEnemyLazer(img, x, y, speedX, speedY, width, height, name, life){
	let enemy = new Enemy(img, x, y, speedX, speedY,width, height,name, life)
	enemyArr.push(enemy);
}

	//timer to create enemy===========================



setInterval(function run() {
	if( enemyArr.length < sizeEnemyArr && fireToLive && startGame && bossBattle === false){
		addEnemy(randomNum(20, 480),-30);
//		addEnemyCarier();
	}
}, mainInterval);


setInterval(function run() {
	if( enemyArr.length < sizeEnemyArr && fireToLive && startGame && allowAster && bossBattle === false){
		addEnemyAsterRed(randomNum(20, 480), -40, randomNum(-1, 1), randomNum(1, 1.5),40, 40,'asterRed', asterEnemyLife);
	}
}, asterInterval);


setInterval(function run() {
	if( enemyArr.length < sizeEnemyArr && fireToLive && startGame && allowRedShip && bossBattle === false){
		addShipRed(randomNum(20, 480),-30);
	}
}, redShipInterval);

setInterval(function run() {
	if( enemyArr.length < sizeEnemyArr && fireToLive && startGame && allowRedFregat && bossBattle === false){
		addEnemyFregat();
	}
}, redFregatInterwal);
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


////Draw enemy biShips ====================================================

function drawEnemyBigShips(){
		for(let i=0;i<enemyArr.length; i++){


			if(enemyArr[i].name === 'redCarier'){

					if(enemyArr[i].topFrame === true && enemyArr[i].y <= 0){
								enemyArr[i].speedY *= -1;
					}
					if(enemyArr[i].y >= enemyArr[i].yPos ){
						enemyArr[i].speedY *= -1;
						if(enemyArr[i].topFrame === false){
							enemyArr[i].topFrame = true;
						}
						if(enemyArr[i].speedX === 0){
							enemyArr[i].speedX = 1;
						}
					}

					// Fire Logics==================
					enemyArr[i].fire++;

					if(enemyArr[i].fire%180 === 0){
						addShipRed(enemyArr[i].x + 20,enemyArr[i].y + enemyArr[i].height);
					}
					if(enemyArr[i].fire%280 === 0){
						addShipRed(enemyArr[i].x + 40,enemyArr[i].y + enemyArr[i].height);
						addEnemy(enemyArr[i].x + 80,enemyArr[i].y + enemyArr[i].height);
					}

				}

		}

}





//=/////////////////////////////////////////////////////////////////////////////////////////////
// CTX draw enemyis//////////////////////////////
function drawEnemy(){
	for(let i=0;i<enemyArr.length; i++){

		if(enemyArr[i].name === 'redFregat'){
			if(enemyArr[i].y >= enemyArr[i].yPos){
				enemyArr[i].speedY = 0;
				if(enemyArr[i].speedX === 0){
					enemyArr[i].speedX = 1;
				}
			}
		}
		
		enemyArr[i].x += enemyArr[i].speedX;
		enemyArr[i].y += enemyArr[i].speedY;
		if (enemyArr[i].name != 'redFregatBoss'){
			if(enemyArr[i].x + enemyArr[i].width >=500 || enemyArr[i].x <=0){
				enemyArr[i].speedX *= -1;
			}
		}

		//Drawing ship enemy============================
			enemyArr[i].N_x += 0.2;
			ship_01()

		//Drawing ship enemy============================

		//Drawing AsteroidRed enemy============================
			
			asteroidDraw()

		//Drawing AsteroidRed enemy============================


		//Drawing redShip Freg Lazer enemy============================
				if(enemyArr[i].name === 'redShip'){

					enemyArr[i].fire++;

					if(enemyArr[i].fire%80 === 0){
						addEnemyLazer(enemyLazerImg, enemyArr[i].x+10, (enemyArr[i].y+enemyArr[i].height) , 0, 3, 10, 15,'enemyLazer', 1)
							
			
					}

				}

				

				if(enemyArr[i].name === 'redFregat'){

					enemyArr[i].fire++;

					if(enemyArr[i].fire%140 === 0){

						let firstL;
						if(enemyArr[i].x+10 > hero.x){
							firstL = randomNum(-2, -1)
						}else{
							firstL = randomNum(1, 2)
						}

						addEnemyLazer(enemyLazerImg, enemyArr[i].x+10, (enemyArr[i].y+enemyArr[i].height) , firstL, 2, 10, 15,'enemyLazer', 1)

						let secondL;
						if(enemyArr[i].x+10 > hero.x){
							secondL = randomNum(-2, -1)
						}else{
							secondL = randomNum(1, 2)
						}

						addEnemyLazer(enemyLazerImg, enemyArr[i].x+70, (enemyArr[i].y+enemyArr[i].height) , secondL, 2, 10, 15,'enemyLazer', 1)
							
			
					}

				}


				redShipFregLazer()
		//Drawing redShip Freg Lazer enemy============================

		//delete enemy from array===================
		if( enemyArr[i].y >=300 || enemyArr[i].y < -50 || enemyArr[i].x >=520 || enemyArr[i].x < -10){

			enDead = true;
			if(enDead){
				enemyArr.splice(i, 1);

			}
		}
		//delete enemy from array===================
	}
}



// CTX draw enemyis//////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
///Functions  Drews Enemyis======================
function ship_01(){
	for(let i=0;i<enemyArr.length; i++){
		if(enemyArr[i].name === 'ship'){
				context.drawImage(enemyArr[i].img, 70*Math.floor(enemyArr[i].N_x), 70*enemyArr[i].N_y, 70, 70, enemyArr[i].x, enemyArr[i].y, enemyArr[i].width, enemyArr[i].height)

			//		enemyArr[i].N_x += 0.05;
					if(enemyArr[i].N_x > 6.9 ){
							
							enemyArr[i].N_x = 0;
							enemyArr[i].N_y += 1;
							if(enemyArr[i].N_y > 3){
								enemyArr[i].N_y = 0;
							}
					}
			}
	}
}


function asteroidDraw(){
	for(let i=0;i<enemyArr.length; i++){
		if(enemyArr[i].name === 'asterRed' || enemyArr[i].name === 'asterSmall'){
					context.drawImage(enemyArr[i].img, 170*Math.floor(enemyArr[i].N_x), 160*enemyArr[i].N_y, 170, 160, enemyArr[i].x, enemyArr[i].y, enemyArr[i].width, enemyArr[i].height)

				//		enemyArr[i].N_x += 0.04;
						if(enemyArr[i].N_x > 3.9 ){
								
								enemyArr[i].N_x = 0;
								enemyArr[i].N_y += 1;
								if(enemyArr[i].N_y > 3){
									enemyArr[i].N_y = 0;
								}
						}
				}
	}
}


function redShipFregLazer(){
	for(let i=0;i<enemyArr.length; i++){
		if(enemyArr[i].name === 'redShip' || enemyArr[i].name === 'enemyLazer' ||
		 enemyArr[i].name === 'redFregat' || enemyArr[i].name === 'redCarier'){
				context.drawImage(enemyArr[i].img, enemyArr[i].x, enemyArr[i].y, enemyArr[i].width, enemyArr[i].height);

			}
	}
}




///Functions  Drews Enemyis======================
//////////////////////////////////////////////////////////////////////




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
	this.yPos = randomNum(50, 100);
	this.enDead = false;

	this.topFrame = false;

	this.boss = false;
	this.deg = 0;

}

////////////Object enemy====================================