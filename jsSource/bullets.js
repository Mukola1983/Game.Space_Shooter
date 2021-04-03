

let lazer = document.getElementById('lazer');

let rocketimg = document.getElementById('rocket');

let starWeaponimg = document.getElementById('starWeapon');


const weaponsArr = [];


function Weapon(img, x, y, speedX, speedY, width, height, name, power, moveFree, moveDir, size){
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
	this.power = power;

	this.timer = 0;
	this.moveFree = moveFree;

	this.moveDir = moveDir;

	this.dead = false;



}


function addLazer(x, y, spedX, speedY){
	let bullet = new Weapon(lazer, x, y, spedX, speedY, 10, 15, 'lazer', 1, true)
	weaponsArr.push(bullet);

}

function addRocket(x, y, spedX, speedY, moveDir,moveFree,size){
	let bullet = new Weapon(rocketimg, x, y, spedX, speedY, 10, 15, 'rocket', rocketPower, moveFree, moveDir)
	weaponsArr.push(bullet);

}

function addStarWeapon(x, y, spedX, speedY){
	let bullet = new Weapon(starWeaponimg, x, y, spedX, speedY, 15, 15, 'starWeapon', 1, true)
	weaponsArr.push(bullet);

}


function drawWeapon(){
	if(weaponsArr.length > 0){
		for(let i=0;i<weaponsArr.length; i++){

			if(weaponsArr[i].name === 'rocket' && weaponsArr[i].moveFree === false){
		//		console.log(weaponsArr[i].moveFree);
				weaponsArr[i].timer++;
				if(weaponsArr[i].moveDir === 'left'){
					weaponsArr[i].x-= 1;
				}
				if(weaponsArr[i].moveDir === 'right'){
					weaponsArr[i].x+= 1;
				}
				if(weaponsArr[i].moveDir === 'center'){
				//	weaponsArr[i].x+= 1;
				}
				if(weaponsArr[i].timer%20 === 0){
					weaponsArr[i].moveFree = true;
				}
			}
			if(weaponsArr[i].moveFree){
				weaponsArr[i].x += weaponsArr[i].speedX;
				weaponsArr[i].y += weaponsArr[i].speedY;
			}
			
			//Drawing bullets enemy============================
			if(weaponsArr[i].name === 'lazer' || weaponsArr[i].name === 'rocket'){
				context.drawImage(weaponsArr[i].img, weaponsArr[i].x, weaponsArr[i].y, weaponsArr[i].width, weaponsArr[i].height);
			}
			//Drawing rocket enemy============================
			if(weaponsArr[i].name === 'starWeapon'){
				weaponsArr[i].timer+=4;
				drawRect(weaponsArr[i].img, weaponsArr[i].x, weaponsArr[i].y, weaponsArr[i].width, weaponsArr[i].height, weaponsArr[i].timer);
				if(weaponsArr[i].x+weaponsArr[i].width > 500 || weaponsArr[i].x < 0){
					weaponsArr[i].speedX *= -1;
				}
				if(weaponsArr[i].y+weaponsArr[i].height > 300 || weaponsArr[i].y < 0){
					weaponsArr[i].speedY *= -1;
				}
				if(weaponsArr[i].timer%1200 === 0){
					weaponsArr[i].dead = true;
				}
			}

			if(weaponsArr[i].dead === true || weaponsArr[i].x  >=500 || weaponsArr[i].x + weaponsArr[i].width <=0 || 
				weaponsArr[i].y + weaponsArr[i].height < 0 ){
				weaponsArr.splice(i, 1);
			}
		}
	}
}
