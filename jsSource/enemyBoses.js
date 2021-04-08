

let bossBattle = false;

let bossKilled = false;



/// Boss lifeBarr================

let bossData = document.querySelector('.bossData')

let bossLife = document.getElementById('bossLife');


let bossLifeRow = document.getElementById('bossLifeRow');


let bossLifeVar = 150;


/// Changing life bar================
bossLifeRow.style.width = `${100}%`;


///Gunction for Changing life bar================
function percentage(num, curNum)
{
	return (curNum * 100)/ num;
}


/// Boss lifeBarr================



///Boss 01 ==========================

function addEnemyBoss_01(x, y, speedX, speedY,width, height,name, life){
	let enemy = new Enemy(enemyFregatImg, randomNum(30, 30),-30, randomNum(-1, 1), randomNum(1, 1), 140, 45, 'redFregatBoss', bossLifeVar);
	enemyArr.push(enemy);
	
}

function addEnemyBoss_02(x, y, speedX, speedY,width, height,name, life){
	let enemy = new Enemy(enemyCarierImg, randomNum(30, 30),-30, randomNum(-1, 1), randomNum(1, 1), 155, 45, 'redCarierBoss', bossLifeVar);
	enemyArr.push(enemy);
	
}

let firstBoss = true;

let secondBoss = true;





function drawEnemyBoses(){
		for(let i=0;i<enemyArr.length; i++){

			


			if(enemyArr[i].name === 'redFregatBoss' || enemyArr[i].name === 'redCarierBoss'){

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

								///Rotation boses==============================
								if(enemyArr[i].x + enemyArr[i].width >=500){

									if(enemyArr[i].deg >= 0 && enemyArr[i].deg < 180){
										enemyArr[i].deg +=4;
										enemyArr[i].speedX = 0;
									}
									if(enemyArr[i].deg == 180){
										enemyArr[i].speedX = -1.5;
									}
								}
								if(enemyArr[i].x <= 0){

									if(enemyArr[i].deg > 0 && enemyArr[i].deg <= 180){
										enemyArr[i].deg -=4;
										enemyArr[i].speedX = 0;
									}
									if(enemyArr[i].deg == 0){
										enemyArr[i].speedX = 1.5;
									}
								}
								///Rotation boses==============================

					if(enemyArr[i].name === 'redFregatBoss'){

						drawRect(enemyFregatImg, enemyArr[i].x,enemyArr[i].y, enemyArr[i].width, enemyArr[i].height, enemyArr[i].deg);

						// Fire Logics==================
						enemyArr[i].fire++;


						fregatBossShot( enemyArr[i].fire,enemyArr[i].x+10,enemyArr[i].x+70, enemyArr[i].x+120, enemyArr[i].y+enemyArr[i].height )
					}
				
				}


				if(enemyArr[i].name === 'redCarierBoss'){
					
					drawRect(enemyCarierBossImg, enemyArr[i].x,enemyArr[i].y, enemyArr[i].width, enemyArr[i].height, enemyArr[i].deg);

						// Fire Logics==================
						enemyArr[i].fire++;

						carierBossShot( enemyArr[i].fire,enemyArr[i].x+10,enemyArr[i].x+80, enemyArr[i].x+130, enemyArr[i].y+enemyArr[i].height  )
				}

		}

}




function fregatBossShot( count,firstCannonX,secondCanonX, thirdCanonX, CanonY ){
	if(count%100 === 0){

		let firstL;
		if(firstCannonX > hero.x){
			firstL = randomNum(-2, -1)
		}else{
			firstL = randomNum(1, 2)
		}

		addEnemyLazer(enemyLazerImg, firstCannonX, CanonY , firstL, 2, 10, 15,'enemyLazer', 1)

		let secondL;
		if(secondCanonX > hero.x){
			secondL = randomNum(-2, -1)
		}else{
			secondL = randomNum(1, 2)
		}

		addEnemyLazer(enemyLazerImg, secondCanonX, CanonY , secondL, 2, 10, 15,'enemyLazer', 1)
			
		let thirdL;
		if(thirdCanonX > hero.x){
			thirdL = randomNum(-2, -1)
		}else{
			thirdL = randomNum(1, 2)
		}

		addEnemyLazer(enemyLazerImg, thirdCanonX, CanonY , thirdL, 2, 10, 15,'enemyLazer', 1)
			

	}
}


function carierBossShot( count,firstCannonX,secondCanonX, thirdCanonX, CanonY ){
	if(count%100 === 0){


		addShipRed(firstCannonX,CanonY);

		addShipRed(secondCanonX,CanonY);

	}

	if(count%120 === 0){
		

		addShipRed(thirdCanonX,CanonY);

		addShipRed(firstCannonX,CanonY);

	}
}