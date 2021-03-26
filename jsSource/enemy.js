

// Random Numbers===========================================
function randomNum(min, max) {
	return Math.random() * (max - min) + min;
}

// Random Numbers===========================================





// Array with enemy=================================
const enemyArr = [];
// Array with enemy=================================







// Adding enemy==========================================
function addEnemy(){
	let enemy = new Enemy(rocketimg, randomNum(30, 100),randomNum(30, 100), randomNum(0, 4), randomNum(0, 4), 10, 20)
	enemyArr.push(enemy);
}


	//timer to create enemy===========================
setInterval(function run() {
	if( enemyArr.length < 5){
		addEnemy();
	}
}, 1000);
	//timer to create enemy===========================


// Adding enemy==========================================



// CTX draw enemyis//////////////////////////////
function drawEnemy(){
	for(let i=0;i<enemyArr.length; i++){


	enemyArr[i].x += enemyArr[i].speedX;
	enemyArr[i].y += enemyArr[i].speedY;
	if(enemyArr[i].x + enemyArr[i].width >=500 || enemyArr[i].x <=0){
		enemyArr[i].speedX *= -1;
	}
	if(enemyArr[i].y + enemyArr[i].height >=300 || enemyArr[i].y <=0){
		enemyArr[i].speedY *= -1;
	}
	context.drawImage(enemyArr[i].img, enemyArr[i].x, enemyArr[i].y, enemyArr[i].width, enemyArr[i].height);

	context.rotate(enemyArr[i].img * Math.PI/60);
	}
}

// CTX draw enemyis//////////////////////////////


////////////Object enemy====================================
function Enemy(img, x, y, speedX, speedY, width, height){
	this.img = img;
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.speedX = speedX;
	this.speedY = speedY;

}

////////////Object enemy====================================