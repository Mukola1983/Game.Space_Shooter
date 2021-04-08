





let canvas = document.getElementById('game');
let context = canvas.getContext('2d');


let wrapper = document.getElementById('wrapper');


/// Buton for game start=========
let startButton = document.querySelector('.start');


/// Button for opening Info Box=======
let infoButton = document.querySelector('.info');

/// Button for close Info Box=======
let closeInfo = document.querySelector('.closeInfo');


/// Cover for screen========
let cover = document.querySelector('.cover');

//Info box===============
let infoBox = document.querySelector('.infoBox');


let coverFoto = document.querySelector('.coverFoto');



////////////////////////////////////////////////
///START GAME

startButton.onclick = function(){
	if(heroAlive){
		startButton.classList.toggle('_started');
		optionBox.classList.toggle('_hidenButton');
		cover.classList.toggle('_hiden');

		coverFoto.classList.toggle('_stopAnimate');
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
		heroRestart();

	}
}
///START GAME
////////////////////////////////////////////////


////Option screen manipulation===========///////////

let optionBox = document.querySelector('.optionBox');


//Option cover
let optionCover = document.querySelector('.optionCover');

// Option cover open button
let optionButton = document.querySelector('.option');

// Option cover close button
let closeOption = document.querySelector('.closeOption');




optionButton.onclick = function(){
	optionCover.classList.add('_activeInfoBox');
}

closeOption.onclick = function(){
	optionCover.classList.remove('_activeInfoBox');
}

////Option screen manipulation===========///////////




////Sound manipulation===========///////////

//Music
let musicOnOff = document.getElementById('musicOnOff');

let music = false;
musicOnOff.onclick = function(){
	if(music){
		musicOnOff.innerHTML = 'off';
		music = false;

	}else{
	
		musicOnOff.innerHTML = 'on';
		music = true;
	}
	
}

//Sound
let soundOnOff = document.getElementById('soundOnOff');

let sound = false;
soundOnOff.onclick = function(){
	if(sound){
		soundOnOff.innerHTML = 'off';
		sound = false;
	}else{
		soundOnOff.innerHTML = 'on';
		sound = true;
	}
	
}

////Sound manipulation===========///////////



////Info screen manipulation===========///////////
infoButton.onclick = function(){
	infoBox.classList.add('_activeInfoBox');
}

closeInfo.onclick = function(){
	infoBox.classList.remove('_activeInfoBox');
}

let startGame = false;

window.onload = function(){
//	game()
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
	drawFon();

	drawBonuses();
	drawEfects();
	collisionHeroWithBonuses();

	drawWeapon();

	drawEnemy();
	drawEnemyBigShips()
	drawEnemyBoses();

	
	drawHero();
	moveHero();

	collisionBulletsEnemy();
	collisionEnemyWithHero();
	drawExplosion();

	if(music === true){
		mainMusic.play();
		mainMusic.volume = 0.7;
	}
	if(music === false){
		mainMusic.pause();
	}

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






