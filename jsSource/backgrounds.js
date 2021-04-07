

var fonImg = document.getElementById('bg_01');


function drawFons(){
	context.drawImage(fonImg, 0, 0, 500, 300);
}

let a = 0;



function drawRect(img, x, y, w, h, a){
			var dx = x + w/2;
			var dy = y + h/2;

			if(a){
				a = a * (Math.PI/180);
				context.save();
				context.translate(dx, dy);
				context.rotate(a);
				context.translate(-dx, -dy);
			}

			context.drawImage( img,x, y , w, h,);

			if(a){
				context.restore();
			}
		}

function drawRectAnimated(img, N_x,N_y, N_xWidth, N_yHight, x, y, w, h, a){
			var dx = x + w/2;
			var dy = y + h/2;

			if(a){
				a = a * (Math.PI/180);
				context.save();
				context.translate(dx, dy);
				context.rotate(a);
				context.translate(-dx, -dy);
			}

			context.drawImage( img,N_x,N_y, N_xWidth, N_yHight,x, y , w, h,);





			if(a){
				context.restore();
			}
		}




function drawFon(fImg){
		
			a+=0.02;
			drawRect(fonImg, -100, -200, 700, 700, a);
		}
