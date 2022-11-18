$(window).scroll(function () {
	let sc = $(window).scrollTop();
	if (sc > 70) {
		$("#header__scroll").addClass("small");
	} else {
		$("#header__scroll").removeClass("small");
	}
});