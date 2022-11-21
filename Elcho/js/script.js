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

// ! JQuery
$(function () {
	// ! Smooth scroll
	$(document).ready(function () {
		$('a[data-scroll^="#"]').click(function () {
			//Сохраняем значение атрибута href в переменной:
			var target = $(this).attr("data-scroll");
			$("html, body").animate(
				{
					scrollTop: $(target).offset().top - 70, //можно вычесть высоту меню
				},
				700
			);
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
