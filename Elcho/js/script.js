// // ! Sticky Navigation Menu JS Code
// let header = document.querySelector("#header__scroll");
// window.onscroll = function () {
// 	if (document.documentElement.scrollTop > 20) {
// 		header.classList.add("small");
// 	} else {
// 		header.classList.remove("small");
// 	}
// };

// ! loader
window.onload = function () {
	document.body.classList.add("loaded_hiding");
	window.setTimeout(function () {
		document.body.classList.add("loaded");
		document.body.classList.remove("loaded_hiding");
	}, 500);
	F;
};

// ! Multiple Typing Text Animation
const text = document.querySelector(".sec-text");

const textLoad = () => {
	setTimeout(() => {
		text.textContent = "Freelancer";
	}, 0);
	setTimeout(() => {
		text.textContent = "Blogger";
	}, 4000);
	setTimeout(() => {
		text.textContent = "YouTuber";
	}, 8000); //1s = 1000 milliseconds
};

textLoad();
setInterval(textLoad, 12000);

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
