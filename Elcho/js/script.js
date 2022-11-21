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

// !

// ! JQuery
$(function () {
	// ! Smooth scroll
	$(document).ready(function () {
		$('.nav a[data-scroll^="#"]').click(function () {
			let target = $(this).attr("data-scroll");
			$("html, body").animate(
				{
					scrollTop: $(target).offset().top - 70,
				},
				700
			);
			$(".nav a span").removeClass("active");
			$(this).addClass("active");
			return false;
		});
	});

	// ! scroll top
	$(function () {
		$("#scroll_top").click(function () {
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
	});

	// ! Menu nav toggle
	$("#nav_toggle").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});
});
