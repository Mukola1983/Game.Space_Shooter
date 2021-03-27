

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
	let enemy = new Enemy(enemyShipImg, randomNum(20, 480),-40, randomNum(-1, 1), randomNum(1, 2), 20, 30, 'ship')
	enemyArr.push(enemy);
}

function addEnemy_02(){
	let enemy = new Enemy(rocketimg, randomNum(20, 480),-40, randomNum(-1, 1), randomNum(1, 2), 20, 30, 'rocket')
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
function Enemy(img, x, y, speedX, speedY, width, height, name){
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

////////////Object enemy====================================