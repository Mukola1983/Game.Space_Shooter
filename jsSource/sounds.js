

function soundFunc(audio, vol){
	audio.pause();
	audio.volume = vol;
	audio.currentTime = 0;
	audio.play();
}

let mainMusic = document.getElementById('mainMusic');

let bonusGet = document.getElementById('bonusGet');

let shot = document.getElementById('shot');


