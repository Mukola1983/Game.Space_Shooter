

let powerUpImg = document.getElementById('powerUp');

let bonusesArr = [];



function Bonus(img, x, y, speedX, speedY, width, height, name, life){
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

setInterval(function run() {
	if( bonusesArr.length < 10 && fireToLive){
		addPowerUpBonus();
	}
}, 5000);

function drawBonuses(){
	if(bonusesArr.length > 0){
		for(let i=0;i<bonusesArr.length; i++){


			bonusesArr[i].x += bonusesArr[i].speedX;
			bonusesArr[i].y += bonusesArr[i].speedY;
			if(bonusesArr[i].x + bonusesArr[i].width >=500 || bonusesArr[i].x <=0){
				bonusesArr[i].speedX *= -1;
			}

				if(bonusesArr[i].name === 'powerUp'){
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

			//delete enemy from array===================
			if(bonusesArr[i].y >=300 ){
				bonusesArr.splice(i, 1);
			}
			//delete enemy from array===================
		}
	}
}


function addPowerUpBonus(){
	let powerUp = new Bonus(powerUpImg, randomNum(20, 480),-40, randomNum(-1, 1), randomNum(1, 2), 30, 30, 'powerUp', 2)
	bonusesArr.push(powerUp);
}