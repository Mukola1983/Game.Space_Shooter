





let canvas = document.getElementById('game');
let context = canvas.getContext('2d');


let wrapper = document.getElementById('wrapper');



let startButton = document.querySelector('.start');
let cover = document.querySelector('.cover');



startButton.onclick = function(){
	startButton.classList.toggle('_started');
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
}


let startGame = false;

window.onload = function(){
	game()
}

function game(){
	update();
	render();
	if(startGame){
		requestAnimationFrame(game);
	}

}

function update(){

}


function render() {
	context.clearRect(0, 0, 500, 300);
	drawFons()
	drawEnemy();
	drawHero();
	moveHero()

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






