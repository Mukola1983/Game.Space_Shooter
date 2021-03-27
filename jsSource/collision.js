


function collision(arr_1, arr_2){

			if(	arr_1[i].x+arr_1[i].width > arr_2[j].x+5 && arr_1[i].y+arr_1[i].height > arr_2[j].y+5 &&
				arr_1[i].x+5 < arr_2[j].x+arr_2[j].width && arr_1[i].y+5 < arr_2[j].y+arr_2[j].height ){

				return true;
			}

}


function collisionBulletsEnemy(){
	for(i in weaponsArr){
		for(j in enemyArr){
			if(collision(weaponsArr, enemyArr)){
				enemyArr[j].life--;
				if(enemyArr[j].life <= 0){
					addExplosion_01(enemyArr[j].x-(enemyArr[j].width/2), enemyArr[j].y);
					enemyArr.splice(j, 1);
					scoreVar++;
					score.innerHTML = `Score: ${scoreVar}`;
				}
				addSmallExplosion_01(weaponsArr[i].x, weaponsArr[i].y);
				weaponsArr.splice(i, 1);
				
				return;
			}
		}
	}
}




////EXPLOSION///////////////////////////////////////////////////

var explosion_01Img = document.getElementById('explosion_01');

const explosionArr = [];

function Explosion(img, x, y, width, height, name){
	this.img = img;
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.N_x = 0;
	this.N_y = 0;

	this.name = name;
	this.del = false;

}


function addExplosion_01(x, y){
	let exp = new Explosion(explosion_01Img, x, y, 60, 60, 'explosion_01')
	explosionArr.push(exp);

}

function addSmallExplosion_01(x, y){
	let exp = new Explosion(explosion_01Img, x, y, 20, 20, 'explosion_01')
	explosionArr.push(exp);

}


function drawExplosion(){
	if(explosionArr.length > 0){
		for(let i=0;i<explosionArr.length; i++){


			if(explosionArr[i].name === 'explosion_01'){
				context.drawImage(explosionArr[i].img, 512*Math.floor(explosionArr[i].N_x), 512*explosionArr[i].N_y, 512, 512,
				 explosionArr[i].x, explosionArr[i].y, explosionArr[i].width, explosionArr[i].height)

					explosionArr[i].N_x += 0.9;
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