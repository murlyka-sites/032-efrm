$('.phone-mask').mask('+7 (000) 000 - 00 - 00');

$('.touch-menu__item').click(function() {
	$(this).toggleClass('touch-menu__item_active');
});

$('.top-menu:first-child .top-menu__button').click(function() {
	$(this).next().toggleClass("hidden")
});

$('.dropdown__item').click(function() {
	$(this).toggleClass('dropdown__item_active');
});