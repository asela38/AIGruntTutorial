(function() {
	a();b();c();
})();

function a() {
	var c = document.getElementById('canvas1');
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(10,10,150,75);
	ctx.fillStyle = "#CC0000";
	ctx.fillRect(100,100,150,75);
	ctx.fillStyle = "#FF3300";
	ctx.fillRect(10,200,150,75);
}

function b() {
	var c = document.getElementById('canvas2');
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#10D000";
	ctx.fillRect(10,10,150,75);
	ctx.fillStyle = "#009933";
	ctx.fillRect(100,100,150,75);
	ctx.fillStyle = "#00CC99";
	ctx.fillRect(10,200,150,75);
}

function c() {
	var c = document.getElementById('canvas3');
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#660066";
	ctx.fillRect(10,10,150,75);
	ctx.fillStyle = "#CC0099";
	ctx.fillRect(100,100,150,75);
	ctx.fillStyle = "#460046";
	ctx.fillRect(10,200,150,75);
}	

