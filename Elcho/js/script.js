// ! loader
window.onload = function () {
	document.body.classList.add("loaded_hiding");
	window.setTimeout(function () {
		document.body.classList.add("loaded");
		document.body.classList.remove("loaded_hiding");
	}, 500);
};

// ! Sticky Navigation Menu JS Code
let header = document.querySelector("#header__scroll");
window.onscroll = function () {
	if (document.documentElement.scrollTop > 20) {
		header.classList.add("small");
	} else {
		header.classList.remove("small");
	}
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

// ! JQuery
$(function () {
	// ! Smooth scroll
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let $this = $(this),
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
});
