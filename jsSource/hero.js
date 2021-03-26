

var rocketimg = new Image();
rocketimg.src = '..//img/rocket.png';


x = 0;
y = 0;
spX = 2;
spY = 2
let width = 20;
let height = 30;
function moveRocket(){
	x +=spX;
	y +=spY;
	if(x + width >=500 || x <=0){
		spX *= -1;
	}
	if(y + height >= 300 || y <=0){
		spY *= -1;
	}
}