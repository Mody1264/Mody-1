var FPS = 60
// 創造 img HTML 元素，並放入變數中
var bgImg = document.createElement("img");
var enemyImg = document.createElement("img");
var btnImg = document.createElement("img");
var towerImg = document.createElement("img");
// 設定這個元素的要顯示的圖片
bgImg.src = "images/map.png";
enemyImg.src = "images/rukia.gif";
btnImg.src = "images/tower-btn.png"
towerImg.src = "images/tower.png"
// 找出網頁中的 canvas 元素
var canvas = document.getElementById("game-canvas");

// 取得 2D繪圖用的物件
var ctx = canvas.getContext("2d");

function draw(){
	enemy.move();
	// 將背景圖片畫在 canvas 上的 (0,0) 位置s
	ctx.drawImage(bgImg,0,0);
	ctx.drawImage(enemyImg,enemy.x,enemy.y);
	ctx.drawImage(btnImg,btn.x,btn.y,64,64);
	if(isbuilding==true){
	  ctx.drawImage(towerImg,cursor.x - cursor.x%32,cursor.y - cursor.y%32);
	}else{
	  ctx.drawImage(towerImg,tower.x,tower.y);
	     }
    }
// 執行 draw 函式
setInterval(draw, 1000/FPS);

var enemy ={
x:64,
y:480-32,
speedX:0,
speedY:-64,
move: function(){
	this.x += this.speedX/FPS;
	this.y += this.speedY/FPS;
}
}

var btn ={
x:576,
y:416
}

var cursor ={
x:100,
y:200
}
var tower ={
x:0,
y:0
}

$("#game-canvas").on("mousemove", mousemove);
function mousemove(event){
cursor.x=event.offsetX
cursor.y=event.offsetY

}
var isbuilding =false 
$("#game-canvas").on("click",mouseclick)
function mouseclick () {
	if(cursor.x>576 && cursor.y>416){
		isbuilding=true;
	}else{
		if(isbuilding==true){
			tower.x=cursor.x - cursor.x%32;
		    tower.y=cursor.y - cursor.y%32;
		}

		isbuilding=false
	}
}
