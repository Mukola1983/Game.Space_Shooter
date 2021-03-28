



function collision_02(obj_01, obj_02){

			if(	obj_01.x+obj_01.width > obj_02.x+5 && obj_01.y+obj_01.height > obj_02.y+5 &&
				obj_01.x+5 < obj_02.x+obj_02.width && obj_01.y+5 < obj_02.y+obj_02.height ){

				return true;
			}

}



function collisionEnemyWithHero(){
	if(enemyArr.length>0 && hero){
		for(j in enemyArr){
			if(collision_02(enemyArr[j],hero) && collisionAllow){
				enemyArr[j].life--;
				if(enemyArr[j].life <= 0){
					addExplosion_01(enemyArr[j].x-(enemyArr[j].width/2), enemyArr[j].y);
					enemyArr.splice(j, 1);
					scoreVar++;
					score.innerHTML = `Score: ${scoreVar}`;
					if(scoreVar > hiScoreVar){
						hiScoreVar = scoreVar;
						hiScore.innerHTML = `HiScore: ${hiScoreVar}`;
					}
				}

				if(hero.life > 0){
					hero.life--;
				}
				collisionAllow = false;
				playerLife.innerHTML = `Life: ${hero.life}`;
				setTimeout(collisionAgain, 5000);
				if(hero.life <= 0){
				//	heroAlive = false;
					fireToLive = false;
					addExplosionHero(hero.x-100, hero.y-80);
					heroSpeedX = 0;
					heroSpeedY = 0;
				//	restart();
					setTimeout(heroDead, 3000);
				}

				return;
			}
		}
	}
}

function heroDead(){
	heroAlive = false;
	restart();
}

function collisionBulletsEnemy(){
	for(i in weaponsArr){
		for(j in enemyArr){
			if(collision_02(weaponsArr[i], enemyArr[j])){
				enemyArr[j].life--;
				if(enemyArr[j].life <= 0){
					addExplosion_01(enemyArr[j].x-(enemyArr[j].width/2), enemyArr[j].y);
					enemyArr.splice(j, 1);
					scoreVar++;
					score.innerHTML = `Score: ${scoreVar}`;
					if(scoreVar > hiScoreVar){
						hiScoreVar = scoreVar;
						hiScore.innerHTML = `HiScore: ${hiScoreVar}`;
					}
				}
				addSmallExplosion_01(weaponsArr[i].x, weaponsArr[i].y);
				weaponsArr.splice(i, 1);
				
				return;
			}
		}
	}
}


///COlision  with bonuses===================================
function collisionHeroWithBonuses(){
	if(bonusesArr.length>0 && hero){
		for(j in bonusesArr){
			if(collision_02(bonusesArr[j],hero)){
				if(bonusesArr[j].name === 'powerUp'){
					if(hero.weaponPower< 4){
						hero.weaponPower++;
					}
					weaponPower.innerHTML = `Weap Pow: ${hero.weaponPower}`;
				}

				bonusesArr.splice(j, 1);

				return;
			}
		}
	}
}
///COlision  with bonuses===================================




////EXPLOSION///////////////////////////////////////////////////

var explosion_01Img = document.getElementById('explosion_01');

var explosion_02Img = document.getElementById('explosion_02');

const explosionArr = [];

function Explosion(img, x, y,speedY, width, height, name){
	this.img = img;
	this.x = x;
	this.y = y;

	this.speedY = speedY;

	this.width = width;
	this.height = height;

	this.N_x = 0;
	this.N_y = 0;

	this.name = name;
	this.del = false;

}


function addExplosion_01(x, y){
	let exp = new Explosion(explosion_01Img, x, y,0.5, 60, 60, 'explosion_01')
	explosionArr.push(exp);

}

function addSmallExplosion_01(x, y){
	let exp = new Explosion(explosion_02Img, x, y,0.2, 20, 20, 'explosion_02')
	explosionArr.push(exp);

}


function addExplosionHero(x, y){
	let exp = new Explosion(explosion_01Img, x, y,0, 200, 200, 'explosion_03')
	explosionArr.push(exp);

}


function drawExplosion(){
	if(explosionArr.length > 0){
		for(let i=0;i<explosionArr.length; i++){

//////////Exp;osion move /======================================
//			explosionArr[i].x += explosionArr[i].speedX;
			explosionArr[i].y += explosionArr[i].speedY;
//////////Exp;osion move /======================================



			if(explosionArr[i].name === 'explosion_01'){
				context.drawImage(explosionArr[i].img, 512*Math.floor(explosionArr[i].N_x), 512*explosionArr[i].N_y, 512, 512,
				 explosionArr[i].x, explosionArr[i].y, explosionArr[i].width, explosionArr[i].height)

					explosionArr[i].N_x += 1;
					if(explosionArr[i].N_x > 7.9 ){
							explosionArr[i].N_x = 0;
							explosionArr[i].N_y += 1;
							if(explosionArr[i].N_y > 5){
								explosionArr[i].del = true;
							}
					}
			}

			if(explosionArr[i].name === 'explosion_02'){
				context.drawImage(explosionArr[i].img, 110*Math.floor(explosionArr[i].N_x), 109*explosionArr[i].N_y, 110, 109,
				 explosionArr[i].x, explosionArr[i].y, explosionArr[i].width, explosionArr[i].height)

					explosionArr[i].N_x += 0.5;
					if(explosionArr[i].N_x > 8.9 ){
						explosionArr[i].del = true;
					}
			}


			if(explosionArr[i].name === 'explosion_03'){
				context.drawImage(explosionArr[i].img, 512*Math.floor(explosionArr[i].N_x), 512*explosionArr[i].N_y, 512, 512,
				 explosionArr[i].x, explosionArr[i].y, explosionArr[i].width, explosionArr[i].height)

					explosionArr[i].N_x += 0.4;
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