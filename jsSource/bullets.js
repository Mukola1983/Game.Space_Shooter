

var lazer = document.getElementById('lazer');


const weaponsArr = [];


function Weapon(img, x, y, speedX, speedY, width, height, name){
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

}


function addLazer(x, y){
	let bullet = new Weapon(lazer, x, y, 0, -3, 10, 15, 'lazer')
	weaponsArr.push(bullet);

}


function drawWeapon(){
	if(weaponsArr.length > 0){
		for(let i=0;i<weaponsArr.length; i++){

			
			weaponsArr[i].x += weaponsArr[i].speedX;
			weaponsArr[i].y += weaponsArr[i].speedY;
			//Drawing rocket enemy============================
			if(weaponsArr[i].name === 'lazer'){
				context.drawImage(weaponsArr[i].img, weaponsArr[i].x, weaponsArr[i].y, weaponsArr[i].width, weaponsArr[i].height);
			}
			//Drawing rocket enemy============================


			if(weaponsArr[i].x  >=500 || weaponsArr[i].x + weaponsArr[i].width <=0){
				weaponsArr.splice(i, 1);
			}
			//delete enemy from array===================
			if(weaponsArr[i].y + weaponsArr[i].height < 0 ){
				weaponsArr.splice(i, 1);
			}
			//delete enemy from array===================
		}
	}
}
