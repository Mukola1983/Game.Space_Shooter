
//////////////////////////////////////////////////////////////////////////////////////////
////Hero Variables=============================================


//Hero Imeges ==================
let heroShipImg = document.getElementById('heroShip');
let heroShipWoundedImg = document.getElementById('heroShipWounded');
//Hero Imeges ==================


////Hero Score and HiScore =========================
let score = document.getElementById('score');
let scoreVar = 0;

let hiScore = document.getElementById('hiScore');
let hiScoreVar = 0;

score.innerHTML = `Score: ${scoreVar}`;

hiScore.innerHTML = `HiScore: ${hiScoreVar}`;
////Hero Score and HiScore =========================


//WeaponPower===========================
let weaponPower = document.getElementById('weaponPower');

let weaponPowerVar = 1;

weaponPower.innerHTML = `Power: ${weaponPowerVar}`;
//WeaponPower===========================


///Weapon Kind ====================================/////////////

///Weapon Kind wrapper ============ 
let playerWeapon = document.getElementById('playerWeapon');


///Start weapon Kind========
let weaponKind = 'L';



///Weapon Kind Icons=== ============ 
let weaponIconLazer = document.getElementById('weaponIconLazer');
let weaponIconRocket = document.getElementById('weaponIconRocket');
let weaponIconStar = document.getElementById('weaponIconStar');

///Weapon Kind Icons=== ============ 

// Frequncy fire==========
let fireOften = 500;

let rocketBulSpeed = 900;
let lazerBulSpeed = 500;

if(weaponKind === 'R'){
	fireOften = rocketBulSpeed;
	weaponIconRocket.style.display = 'block';
}
if(weaponKind === 'L'){
	fireOften = lazerBulSpeed;
	weaponIconLazer.style.display = 'block';
}
if(weaponKind === 'S'){
	fireOften = lazerBulSpeed;
	weaponIconStar.style.display = 'block';
}

///Rocket power==========
let rocketPower = 2;


///Weapon Kind Icon ============ 
//let weaponIcon = document.getElementById('weaponIcon');



///Weapon Kind ====================================//////////////////////////


///Player Life data======================//////////////////////


let playerLife = document.getElementById('playerLife');

///Player lifeBar=============
let lifeRow = document.getElementById('lifeRow');

//Player starts number lifes========
let playerLifeVar = 10;


/// Changing life bar================
lifeRow.style.width = `${100}%`;


///Gunction for Changing life bar================
function percentage(num, curNum)
{
	return (curNum * 100)/ num;
}

///Player Life data=====================////////////|||||||||||||


////HERO RESTART FUNCTION=========================||||||||||||||||||||

function heroRestart(){
		heroAlive = true;
		startButton.innerHTML = "pause";

		//Rewrite hero data=====

		//life
		hero.life = playerLifeVar;
		lifeRow.style.width = `${100}%`;
		lifeRow.style.backgroundColor  = `#47B932`;

		//score
		scoreVar = 0;
		score.innerHTML = `Score: ${scoreVar}`;

		//Speed and position
		heroSpeedX = 2;
		heroSpeedY = 2;
		hero.x = 240;
		hero.y = 200;

		//Allow Fire
		fireToLive = true;

		//Weapon
		hero.weaponPower = weaponPowerVar;
		weaponPower.innerHTML = `Power: ${hero.weaponPower}`;
		weaponKind = 'L';

		// Frequncy fire==========
		rocketBulSpeed = 900;
		lazerBulSpeed = 500;

		if(weaponKind === 'R'){
			fireOften = rocketBulSpeed;
		}
		if(weaponKind === 'L'){
			fireOften = lazerBulSpeed;
		}

		//Rewrite hero data=====

		game();
		
		stage = 1;
		
		//Rewrite enemy data=====

		//rocketShip life
		rockrtEnemyLife = 1;

		//allow apperence
		allowAster = false;
		allowRedShip = false;
		allowRedFregat = false
		sizeEnemyArr = 6;

		enemyArr.splice(0);

		bossLifeVar = 150;
}


////HERO RESTART FUNCTION=========================||||||||||||||||||||

////Hero Variables=============================================
//////////////////////////////////////////////////////////////////////////////////////////









/////////////////////////////////////////////////////////////////
//Enemy Variables=========================================


//Enemy sprites===================
let enemyShipImg = document.getElementById('enemyShip');

let enemyShipRedImg = document.getElementById('enemyShipRed');

let enemyAsterRedImg = document.getElementById('enemyAsterRed');

	let enemyLazerImg = document.getElementById('enemyLazer');

let enemyFregatImg = document.getElementById('enemyFregat');

let enemyCarierImg = document.getElementById('enemyCarier');

let enemyCarierBossImg = document.getElementById('enemyCarierBoss');






//Enemy sprites===================


/// Alows diferent enemyis appearing===========

// Max size enemy array=======
let sizeEnemyArr = 6;


///Red asteroid Allows=======
let allowAster = false;

///Red ships Allows=======
let allowRedShip = false;

///Red fregat Allows=======
let allowRedFregat = false;


///Intervals for apearing======
let mainInterval = 1000;

let asterInterval = 3000;

let redShipInterval = 4000;

let redFregatInterwal = 8000;

/// Alows diferent enemyis appearing===========

function enemyApearence(scoreVar){
	if(scoreVar > 40){
		allowAster = true;
	}
	if(scoreVar > 30 && scoreVar < 100){
		rockrtEnemyLife = 2;
		sizeEnemyArr = 10;
	}
	if(scoreVar >= 100 ){
		rockrtEnemyLife = 2;
		sizeEnemyArr = 12;
		allowRedShip = true;
	}
	if(scoreVar >= 145 ){
		rockrtEnemyLife = 2;
		sizeEnemyArr = 12;
		allowRedFregat = true;
		mainInterval = 4000;
	}
}



function addBoses(scoreVar){
	if(scoreVar > 140 && firstBoss){
		bossData.style.display = 'flex';
		firstBoss = false;
		bossBattle = true;
		addEnemyBoss_01();
	}
	if(scoreVar > 300 && secondBoss){
		bossLifeVar = 250;
		bossLifeRow.style.width = `${100}%`;
		bossData.style.display = 'flex';
		secondBoss = false;
		bossBattle = true;
		addEnemyBoss_02();
	}
}

//Enemy Variables=========================================






//////Cover Betwen Bonuses ====================================

let stage = 1;


let coverBetvenRound = document.querySelector('.coverBetvenRound')

let scoreUpdate = document.getElementById('scoreUpdate');
let roundNum = document.getElementById('roundNum');

function activateCoverBetRound(){
	if (bossKilled){
		coverBetvenRound.classList.add('_activedCover');

		bossData.style.display = 'none';

		scoreUpdate.innerHTML = `Score - ${scoreVar}`

		roundNum.innerHTML = `Round ${stage} cleared`

		stage++;

		setTimeout(changeRound, 4000);

	}
}



function changeRound(){
	roundNum.innerHTML = `Prepare for Round ${stage}`;

	setTimeout(deActivateCoverBetRound, 3000);

	bossLifeRow.style.backgroundColor  = `#47B932`;
}

function deActivateCoverBetRound(){

	coverBetvenRound.classList.remove('_activedCover');

	bossBattle = false;
}


function stopMove() {
	fireToLive = false;
	addExplosionHero(hero.x-100, hero.y-80);
	heroSpeedX = 0;
	heroSpeedY = 0;
	for(let i=0;i<enemyArr.length; i++){


	}
}