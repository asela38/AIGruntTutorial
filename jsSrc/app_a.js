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