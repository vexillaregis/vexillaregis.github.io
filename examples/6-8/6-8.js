$(document).ready(function() {
	slideUpTarget();
	$(document).on('scroll', function() {
		slideUpTarget();
	});
});

function slideUpTarget() {
	var divs = $('div');
	var vh = $(document).height();
	var scrollTop = $(window).scrollTop();
	divs.each(function () {
		var divTtop = $(this).offset().top;
		if(vh + scrollTop > divTtop) {
			$(this).animate({top: 0, opacity: 1}, 1000);
		}
	});
};