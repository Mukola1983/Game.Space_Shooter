

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

let firstBoss = true;

let secondBoss = true;





function drawEnemyBoses(){
		for(let i=0;i<enemyArr.length; i++){

			


			if(enemyArr[i].name === 'redFregatBoss'){

					if(enemyArr[i].topFrame === true && enemyArr[i].y <= 0){
								enemyArr[i].speedY *= -1;
					}
					if(enemyArr[i].y >= enemyArr[i].yPos ){
						enemyArr[i].speedY = 0;
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


					drawRect(enemyFregatImg, enemyArr[i].x,enemyArr[i].y, enemyArr[i].width, enemyArr[i].height, enemyArr[i].deg);

					// Fire Logics==================
					enemyArr[i].fire++;

					if(enemyArr[i].fire%40 === 0){
				//		addBackFire(enemyArr[i].x +5, enemyArr[i].y + 20, -0.6, 0, 30, 30 ,270)
					}

					if(enemyArr[i].fire%100 === 0){

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
							
						let thirdL;
						if(enemyArr[i].x+10 > hero.x){
							thirdL = randomNum(-2, -1)
						}else{
							thirdL = randomNum(1, 2)
						}

						addEnemyLazer(enemyLazerImg, enemyArr[i].x+120, (enemyArr[i].y+enemyArr[i].height) , thirdL, 2, 10, 15,'enemyLazer', 1)
							
			
					}
			//	context.drawImage(enemyArr[i].img, enemyArr[i].x, enemyArr[i].y, enemyArr[i].width, enemyArr[i].height);
				}

		}

}