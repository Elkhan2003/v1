// // ! Sticky Navigation Menu JS Code
// let header = document.querySelector("#header__scroll");
// window.onscroll = function () {
// 	if (document.documentElement.scrollTop > 20) {
// 		header.classList.add("small");
// 	} else {
// 		header.classList.remove("small");
// 	}
// };

// !
$(function () {
	// ! Sticky Header on Scroll
	$(window).scroll(function () {
		let sc = $(window).scrollTop();
		if (sc > 50) {
			$("#header__scroll").addClass("small");
		} else {
			$("#header__scroll").removeClass("small");
		}
	});

	// ! Smooth scroll
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate(
			{
				scrollTop: blockOffset,
			},
			1000
		);
	});

	// ! Menu nav toggle
	$("#nav_toggle").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});

	// ! Collapse
	$("[data-collapse]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data("collapse");

		$this.toggleClass("active");
	});

	// ! Slider
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});
