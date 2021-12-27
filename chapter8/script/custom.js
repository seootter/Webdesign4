function setBackground() {
	let $background = $('<div>').addClass('js-slidemenu-effect');

	$background.on('click', function() {
		$('#slidemenu-btn').click();
	});

	$('body').append($background);
}

function removeBackground() {
	$('.js-slidemenu-effect').remove();
}

/* humburger menu */
$('#slidemenu-btn').on('click', function(e){
	e.preventDefault();

	if($('.js-slidemenu-effect').length == 0) {
		setBackground();

		$('#js-slidemenu').slideDown('fast');
	} else {
		removeBackground();

		$('#js-slidemenu').slideUp('fast');
	}
});