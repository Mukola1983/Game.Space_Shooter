





let canvas = document.getElementById('game');
let context = canvas.getContext('2d');


let wrapper = document.getElementById('wrapper');



let startButton = document.querySelector('.start');

let infoButton = document.querySelector('.info');
let closeInfo = document.querySelector('.closeInfo');


let cover = document.querySelector('.cover');
let infoBox = document.querySelector('.infoBox');

let optionBox = document.querySelector('.optionBox');

function restart(){
	if(heroAlive === false){
		startButton.innerHTML = "restart";
	}
}


startButton.onclick = function(){
	if(heroAlive){
		startButton.classList.toggle('_started');
		optionBox.classList.toggle('_hidenButton');
		cover.classList.toggle('_hiden');
		if(startGame === false){
			launchFullScreen(wrapper);
			startGame = true;
			game();
			startButton.innerHTML = "pause";
		}else{
			startGame = false;
			startButton.innerHTML = "start";
		}
	}else{
		heroAlive = true;
		startButton.innerHTML = "pause";
		hero.life = playerLifeVar;
		playerLife.innerHTML = `Life: ${hero.life}`;
		game();
		scoreVar = 0;
		score.innerHTML = `Score: ${scoreVar}`;
		heroSpeedX = 2;
		heroSpeedY = 2;
		hero.x = 240;
		hero.y = 200;
		fireToLive = true;

	}
}


infoButton.onclick = function(){
	infoBox.classList.add('_activeInfoBox');
}

closeInfo.onclick = function(){
	infoBox.classList.remove('_activeInfoBox');
}

let startGame = false;

window.onload = function(){
	game()
}

function game(){
	update();
	render();
	if(startGame && heroAlive){
		requestAnimationFrame(game);
	}

}

function update(){

}


function render() {
	context.clearRect(0, 0, 500, 300);
	drawFons();

	drawBonuses();
	collisionHeroWithBonuses();

	drawWeapon();

	drawEnemy();
	drawHero();
	moveHero();

	collisionBulletsEnemy();
	collisionEnemyWithHero();
	drawExplosion();

}




var requestAnimationFrame = (function(){
	return window.requestAnimationFrame  ||
		window.webkitRequstAnimationFrame ||
		window.mozRequstAnimationFrame ||
		window.oRequstAnimationFrame ||
		window.msRequstAnimationFrame ||
		function(callback){
			window.setTimeout(callback, 1000 / 20);
		};
})();





function launchFullScreen(element){
			if(element.requestFullscreen){
				element.requestFullscreen();
			}
		}






