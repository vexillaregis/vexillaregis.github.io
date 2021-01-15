function changeBg () {
	//var emId = this.id; //this可以代表被點到的各個item
	//var em = document.getElementById(emId); //會根據emId的內容去找
	//em.style.backgroundColor = 'blue';
	this.style.backgroundColor = 'blue';
}

function resetBg () {
	var em = document.getElementById('item1');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item2');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item3');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item4');
	em.style.backgroundColor = 'red';
}

function changeBg () {
	resetBg();
	this.style.backgroundColor = 'blue';
}

window.onload = function() {
	var em = document.getElementById('item1');
	em.addEventListener('click', changeBg);
	em = document.getElementById('item2');
	em.addEventListener('click', changeBg);
	em = document.getElementById('item3');
	em.addEventListener('click', changeBg);
	em = document.getElementById('item4');
	em.addEventListener('click', changeBg);
}