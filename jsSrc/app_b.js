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