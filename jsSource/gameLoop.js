





let canvas = document.getElementById('game');
let context = canvas.getContext('2d');


//canvas.style.backgroundImage = "url('..//img/backgrounds/m101.jpg')";


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
	context.drawImage(fonImg, 0, 0, 600, 600);
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


