$(document).ready(function() {
	$('body > button').eq(0).on('click', function() {
		$('body > div:nth-child(odd)').addClass('selected');
	});
	$('body > button').eq(1).on('click', function() {
		$('body > div:nth-child(even)').addClass('selected');
	});
	$('body > button:last-of-type').on('click', function() {
		$('body > div').removeClass('selected');
	});
	
});