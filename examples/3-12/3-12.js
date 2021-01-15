function mouseEventMsg (){
	alert('Mouse Entered!');
};

window.onload = function(){
	var em = document.querySelector('body');
	em.addEventListener('click', function(){ //事件類型+事件發生後會執行什麼
		alert('clicked!');
	});
	em.addEventListener('mouseenter', mouseEventMsg); //先在上面設好function打出function的名字就可以叫出function
	em.addEventListener('mouseleave', mouseEventMsg);
	em.removeEventListener('mouseleave');
};