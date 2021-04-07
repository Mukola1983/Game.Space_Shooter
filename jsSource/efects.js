
let backFireImg = document.getElementById('backFire');



let efectArr = [];


function Efect(img, x, y, speedX, speedY, width, height, deg, name, life, kind){
	this.img = img;
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.speedX = speedX;
	this.speedY = speedY;

	this.N_x = 0;
	this.N_y = 0;

	this.name = name;
	this.life = life;
	this.kind = kind;

	this.deg = deg;

	this.del = false;

}


function addBackFire(x, y, speedX, speedY,width, height, deg){
	let fire = new Efect(backFireImg, x,y, speedX, speedY, width, height, deg);
	efectArr.push(fire);

}



function drawEfects(){
	if(efectArr.length > 0){
		for(let i=0;i<efectArr.length; i++){

			efectArr[i].x += efectArr[i].speedX;
			efectArr[i].y += efectArr[i].speedY;

			efectArr[i].deg += 0.1;
	//		context.drawImage(efectArr[i].img, 30*Math.floor(efectArr[i].N_x), 30*efectArr[i].N_y, 30, 30, efectArr[i].x, efectArr[i].y, efectArr[i].width, efectArr[i].height)

			drawRectAnimated(efectArr[i].img, 30*Math.floor(efectArr[i].N_x),30*efectArr[i].N_y, 30, 30, efectArr[i].x, efectArr[i].y, efectArr[i].width, efectArr[i].height, efectArr[i].deg )

				efectArr[i].N_x += 0.2;

				if(efectArr[i].N_x > 5.9 ){
						
						efectArr[i].del = true;
						/*
						efectArr[i].N_x = 0;
						efectArr[i].N_y += 1;
						if(efectArr[i].N_y > 3){
							efectArr[i].del = true;
						}*/
				}

			//delete efects from array===================
			if(efectArr[i].del === true ){
				efectArr.splice(i, 1);
			}
			//delete efects from array===================
		}
	}
}

