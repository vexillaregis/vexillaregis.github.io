window.onload = function(){
	//針對article中的paragraph
	var em = document.querySelector('article > p'); //querySelector只搜尋特定一個元件
	//em.style.color = 'red';
	var ems = document.querySelectorAll('body p'); //body跟p之間的間隔 代表p並非body的immediate child //會回傳陣列
	ems[1].style.color = 'orange'; //指定出陣列中的哪一項
	
}