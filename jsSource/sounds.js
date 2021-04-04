

function soundFunc(audio, vol){
//	audio.pause();
	
	audio.currentTime = 0;
	audio.volume = vol;
	audio.play();
}

let mainMusic = document.getElementById('mainMusic');

let bonusGet = document.getElementById('bonusGet');

let shot = document.getElementById('shot');


