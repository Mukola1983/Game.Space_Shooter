



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
				addSmallExplosion_02(enemyArr[j].x-(enemyArr[j].width/2), enemyArr[j].y+enemyArr[j].height );
				if(enemyArr[j].life <= 0){

					if(enemyArr[j].name === 'redFregat' || enemyArr[j].name === 'redCarier'){
						addExplosionHero(enemyArr[j].x-(enemyArr[j].width/2), enemyArr[j].y-80)
					}
					if(enemyArr[j].name ==='asterRed' || enemyArr[j].name ==='redShip' || enemyArr[j].name ==='ship' 
						|| enemyArr[j].name ==='asterSmall'){
						addExplosion_01(enemyArr[j].x-(enemyArr[j].width/2), enemyArr[j].y);
					}
					

					addBonusFromEnemy(enemyArr[j].x, enemyArr[j].y);

					if(sound){
						soundFunc(shot, 0.7);
					}
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
					let lifeBar = percentage(playerLifeVar, hero.life);
					if(lifeBar < 60){
						lifeRow.style.backgroundColor  = `#D8B61F`;
					};
					if(lifeBar < 30){
						lifeRow.style.backgroundColor  = `#F00`;
					};

				//Rewrite pk=layers life===================
					lifeRow.style.width = `${lifeBar}%`;
				//Rewrite pk=layers life===================
					if(hero.weaponPower > 1){
						hero.weaponPower --;
						if(lazerBulSpeed < 450){
							lazerBulSpeed += 50;
						}
						if(hero.weaponKind === 'L' || hero.weaponKind === 'S'){
							fireOften = lazerBulSpeed;
						}
						if(rocketPower > 2){
							rocketPower--;
						}
						console.log(hero.weaponPower)

						weaponPower.innerHTML = `Power: ${hero.weaponPower}`;
					}
				}
				collisionAllow = false;
			//	playerLife.innerHTML = `Life: ${hero.life}`;
				setTimeout(collisionAgain, 5000);
				if(hero.life <= 0){
				//	heroAlive = false;
					if(sound){
						soundFunc(shot, 1);
					}
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
	startButton.innerHTML = "restart";
}

function collisionBulletsEnemy(){
	for(i in weaponsArr){
		for(j in enemyArr){
			if(collision_02(weaponsArr[i], enemyArr[j])){
				enemyArr[j].life -= weaponsArr[i].power;


				if(enemyArr[j].name === 'redFregatBoss' ||  enemyArr[j].name === 'redCarierBoss'){
					let bosslifeBar = Math.round(percentage(bossLifeVar, enemyArr[j].life));


					if(bosslifeBar < 60){
						bossLifeRow.style.backgroundColor  = `#D8B61F`;
					};
					if(bosslifeBar < 30){
						bossLifeRow.style.backgroundColor  = `#F00`;
					};
					bossLifeRow.style.width = `${bosslifeBar}%`;
				}

				
				if(enemyArr[j].life <= 0){

					if(enemyArr[j].name ==='asterRed'){
						addEnemyAsterRed(enemyArr[j].x,enemyArr[j].y,randomNum(-2, 2), randomNum(1, 1.5),20, 20,'asterSmall', 2);
						addEnemyAsterRed(enemyArr[j].x,enemyArr[j].y,randomNum(-2, 2), randomNum(1, 1.5),20, 20,'asterSmall', 2);
						addEnemyAsterRed(enemyArr[j].x,enemyArr[j].y,randomNum(-2, 2), randomNum(1, 1.5),20, 20, 'asterSmall',2);

					}

					///Adding bonuses Exposion sound without enemy weapon
					if(enemyArr[j].name ==='asterRed' || enemyArr[j].name ==='redShip' || enemyArr[j].name ==='ship' 
						|| enemyArr[j].name ==='asterSmall'){

							addBonusFromEnemy(enemyArr[j].x, enemyArr[j].y);

							addExplosion_01(enemyArr[j].x-(enemyArr[j].width/2), enemyArr[j].y);
							if(sound){
								soundFunc(shot, 0.7);
							}
					}
					if(enemyArr[j].name === 'redFregat' || enemyArr[j].name === 'redCarier' 
						|| enemyArr[j].name === 'redFregatBoss' ||  enemyArr[j].name === 'redCarierBoss'){
						
							addExplosionHero(enemyArr[j].x-(enemyArr[j].width/2), enemyArr[j].y-80)
							addBonusFromEnemy(enemyArr[j].x, enemyArr[j].y);
							if(sound){
									soundFunc(shot, 0.7);
								}
					}
					///Adding bonuses Exposion sound without enemy weapon
					if(enemyArr[j].name === 'redFregatBoss' ||  enemyArr[j].name === 'redCarierBoss'){
						bossKilled = true;
						setTimeout(activateCoverBetRound, 4000);
						
					
					}
					if(enemyArr[j].name != 'enemyLazer'){
						scoreVar++;
					}
					enemyArr.splice(j, 1);

			//// Increase Emeny power and count==============================

					enemyApearence(scoreVar);

					addBoses(scoreVar);
					
			//// Increase Emeny power and count==============================
					score.innerHTML = `Score: ${scoreVar}`;
					if(scoreVar > hiScoreVar){
						hiScoreVar = scoreVar;
						hiScore.innerHTML = `HiScore: ${hiScoreVar}`;
					}
				}
				addSmallExplosion_01(weaponsArr[i].x, weaponsArr[i].y);
				if(sound){
					soundFunc(shot, 0.4);
				}

				if(weaponsArr[i].name === 'rocket'){
				//	addRocket(weaponsArr[i].x, weaponsArr[i].y, -2, -2, 'left', true, 'small');
				//	addRocket(weaponsArr[i].x, weaponsArr[i].y, 2, -2, 'right', true, 'small');

					addLazer(weaponsArr[i].x, weaponsArr[i].y, -2, -2);
					addLazer(weaponsArr[i].x, weaponsArr[i].y, 2, -2);
				}
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
				addLighthAnimHero(hero.x, hero.y)
				if(sound){
					soundFunc(bonusGet, 0.5);
				}
				if(bonusesArr[j].name === 'powerUp'){
					if(hero.weaponPower< 5){
						hero.weaponPower++;
						if(lazerBulSpeed > 350){
							lazerBulSpeed -= 50;
						}
						if(hero.weaponKind === 'L' ||  hero.weaponKind === 'S'){
							fireOften = lazerBulSpeed;
						}
						if(rocketPower < 5){
							rocketPower++
						}
					}
					weaponPower.innerHTML = `Power: ${hero.weaponPower}`;
				}

				if(bonusesArr[j].name === 'lifeUp'){

					if(hero.life < playerLifeVar){
						hero.life++;
						let lifeBar = percentage(playerLifeVar, hero.life);
						lifeRow.style.width = `${lifeBar}%`;
					}
					
				}

				if(bonusesArr[j].name === 'rocketBon'){
					hero.weaponKind = bonusesArr[j].kind;

					fireOften = rocketBulSpeed;

					weaponIconRocket.style.display = 'block';
					weaponIconLazer.style.display = 'none';
					weaponIconStar.style.display = 'none';



				}

				if(bonusesArr[j].name === 'lazerBon'){
					hero.weaponKind = bonusesArr[j].kind;

					fireOften = lazerBulSpeed;
			

					weaponIconStar.style.display = 'none';
					weaponIconRocket.style.display = 'none';
					weaponIconLazer.style.display = 'block';
				}

				if(bonusesArr[j].name === 'starWeaponBon'){
					hero.weaponKind = bonusesArr[j].kind;

					fireOften = lazerBulSpeed;

					weaponIconStar.style.display = 'block';

					weaponIconRocket.style.display = 'none';
					weaponIconLazer.style.display = 'none';

				}

				bonusesArr.splice(j, 1);

				return;
			}
		}
	}
}
///COlision  with bonuses===================================




////EXPLOSION///////////////////////////////////////////////////

let explosion_01Img = document.getElementById('explosion_01');

let explosion_02Img = document.getElementById('explosion_02');

let lighthAnimImg = document.getElementById('lighthAnim');



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

function addSmallExplosion_02(x, y){
	let exp = new Explosion(explosion_02Img, x, y,0.2, 30, 30, 'explosion_02')
	explosionArr.push(exp);

}


function addExplosionHero(x, y){
	let exp = new Explosion(explosion_01Img, x, y,0, 200, 200, 'explosion_03')
	explosionArr.push(exp);

}

function addLighthAnimHero(x, y){
	let exp = new Explosion(lighthAnimImg, x, y,0, 30, 50, 'lighthAnim')
	explosionArr.push(exp);

}


function drawExplosion(){
	if(explosionArr.length > 0){
		for(let i=0;i<explosionArr.length; i++){

//////////Exp;osion move /======================================
//			explosionArr[i].x += explosionArr[i].speedX;
			if(explosionArr[i].name === 'explosion_01' || explosionArr[i].name === 'explosion_02' || 
				explosionArr[i].name === 'explosion_03'){
					explosionArr[i].y += explosionArr[i].speedY;
			}
			if(explosionArr[i].name === 'lighthAnim'){
				explosionArr[i].y = hero.y;
				explosionArr[i].x = hero.x;
			}
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

			if(explosionArr[i].name === 'lighthAnim'){
				context.drawImage(explosionArr[i].img, 512*Math.floor(explosionArr[i].N_x), 0*explosionArr[i].N_y, 512, 512,
				 explosionArr[i].x, explosionArr[i].y, explosionArr[i].width, explosionArr[i].height)

					explosionArr[i].N_x += 0.2;
					if(explosionArr[i].N_x > 1.9 ){
						explosionArr[i].N_x = 0;
						explosionArr[i].N_y ++;
						if(explosionArr[i].N_y === 3){
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