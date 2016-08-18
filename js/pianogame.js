$(function(){
	$("#paddleB").css("top","20px");
	$("#paddleA").css("top","60px");
});

var KEY = {
	A:65,
	B:66,
	C:67,
	D:68,
	E:69,
	F:70,
	G:71,
	H:72,
	I:73,
	J:74,
	K:75,
	L:76,
	M:77,
	N:78,
	O:79,
	P:80,
	Q:81,
	R:82,
	S:83,
	T:84,
	U:85,
	V:86,
	W:87,
	X:88,
	Y:89,
	Z:90
}

var pianokey = {};
pianokey[KEY.A] = document.getElementById("a");
pianokey[KEY.B] = document.getElementById("b");
pianokey[KEY.C] = document.getElementById("c");
pianokey[KEY.D] = document.getElementById("d");
pianokey[KEY.E] = document.getElementById("e");
pianokey[KEY.F] = document.getElementById("f");
pianokey[KEY.G] = document.getElementById("g");
pianokey[KEY.H] = document.getElementById("h");
pianokey[KEY.I] = document.getElementById("i");
pianokey[KEY.J] = document.getElementById("j");
pianokey[KEY.K] = document.getElementById("k");
pianokey[KEY.L] = document.getElementById("l");
pianokey[KEY.M] = document.getElementById("m");
pianokey[KEY.N] = document.getElementById("n");
pianokey[KEY.O] = document.getElementById("o");
pianokey[KEY.P] = document.getElementById("p");
pianokey[KEY.Q] = document.getElementById("q");
pianokey[KEY.R] = document.getElementById("r");
pianokey[KEY.S] = document.getElementById("s");
pianokey[KEY.T] = document.getElementById("t");
pianokey[KEY.U] = document.getElementById("u");
pianokey[KEY.V] = document.getElementById("v");
pianokey[KEY.W] = document.getElementById("w");
pianokey[KEY.X] = document.getElementById("x");
pianokey[KEY.Y] = document.getElementById("y");
pianokey[KEY.Z] = document.getElementById("z");

$(function(){
	$(document).keydown(function(e){
		console && console.log && console.log(e.which);
		
		pianokey[e.which].play();
	});
});