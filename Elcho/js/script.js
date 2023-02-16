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

// // ! JQuery
// $(function () {
// 	// ! Smooth scroll
// 	$(document).ready(function () {
// 		$('.nav a span[data-scroll^="#"]').click(function () {
// 			let target = $(this).attr("data-scroll");
// 			$("html, body").animate({
// 					scrollTop: $(target).offset().top - 70,
// 				},
// 				500
// 			);
// 			$('.nav a span[data-scroll^="#"]').removeClass("active");
// 			$(this).addClass("active");
// 			return false;
// 		});
// 	});

// 	// ! scroll top
// 	$(function () {
// 		$("#scroll_top").click(function () {
// 			$("html, body").animate({
// 				scrollTop: 0
// 			}, 200);
// 			return false;
// 		});
// 	});
// });

// ! Smooth scroll
function initSmoothScroll() {
	let navLinks = document.querySelectorAll('.nav a span[data-scroll^="#"]');
	navLinks.forEach(function (navLink) {
		navLink.addEventListener("click", function (event) {
			event.preventDefault();
			let target = this.getAttribute("data-scroll");
			window.scrollTo({
				top: document.querySelector(target).offsetTop - 70,
				behavior: "smooth"
			});
			navLinks.forEach(function (link) {
				link.classList.remove("active");
			});
			this.classList.add("active");
		});
	});
}

// ! scroll top
// function initScrollTop() {
// 	document.getElementById("scroll_top").addEventListener("click", function () {
// 		document.querySelector("html, body").animate({
// 			scrollTop: 0
// 		}, 200);
// 		return false;
// 	});
// }

// ! menu
function initMenu() {
	const navToggle = document.getElementById("nav_toggle");
	const nav = document.getElementById("nav");
	const links = nav.getElementsByTagName("a");

	navToggle.addEventListener("click", function (event) {
		event.preventDefault();
		navToggle.classList.toggle("active");
		nav.classList.toggle("active");
	});

	for (let i = 0; i < links.length; i++) {
		links[i].addEventListener("click", function () {
			navToggle.classList.remove("active");
			nav.classList.remove("active");
		});
	}
}

// ! initialize all functions on page load
document.addEventListener("DOMContentLoaded", function () {
	initSmoothScroll();
	initMenu();
	// initScrollTop();
});