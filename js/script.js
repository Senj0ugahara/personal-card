// Анимация бургера
(function () {
	$('.menu-button').on('click', function() {
		$('.menu-button__line').toggleClass('animate');
		$('.navbar__links--0').toggleClass('item-0');
		$('.navbar__links--1').toggleClass('item-1');
		$('.navbar__links--2').toggleClass('item-2');
		$('.navbar__links--3').toggleClass('item-3');
	})

	$('.navbar__links').on('click', function() {
		$('.menu-button__line').removeClass('animate');
		$('.navbar__links--0').removeClass('item-0');
		$('.navbar__links--1').removeClass('item-1');
		$('.navbar__links--2').removeClass('item-2');
		$('.navbar__links--3').removeClass('item-3');
	})
})();