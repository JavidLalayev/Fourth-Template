function klikle(){
	let root = document.documentElement;


		root.style.setProperty('--color', 'black');
		root.style.setProperty('--color2', 'white');

}


function klikle2(){
	let root = document.documentElement;

	root.style.setProperty('--color', 'white');
	root.style.setProperty('--color2', 'black');

}

jQuerry(document).ready(function(){

	"use strict"

	$('.slider').ripples({
		dropRadius: 10,
		perturbance: 0.01,
	});


});

