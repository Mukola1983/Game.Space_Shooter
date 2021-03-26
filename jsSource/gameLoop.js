





let canvas = document.getElementById('game');
let context = canvas.getContext('2d');





window.onload = function(){
	game()
}

function game(){
	update();
	render();
	requestAnimationFrame(game);
}

function update(){

}


function render() {
	moveRocket();

	drawFons()

	context.drawImage(rocketimg, x, y, width, height);
	drawEnemy();
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

		canvas.onclick = function(){
			launchFullScreen(canvas);
		//	main_music.play();
		}
