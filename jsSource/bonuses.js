

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


