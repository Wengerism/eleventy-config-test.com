export const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-list");
	const navLink = document.querySelectorAll(".nav-links");
	const contentsList = document.querySelector("li a");

	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");

		// setTimeout(function () {
		// 	nav2.classList.toggle("nav-active");
		// }, 150);

		// Animate links
		navLink.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				setTimeout(function () {
					link.style.animation = `navLinkFade .7s ease forwards ${
						index / 15 + 0.5
					}s`;
				}, 300);
			}
		});

		setTimeout(function () {
			link.style.animation = `navLinkFade .7s ease forwards ${index / 15 + 0.5}s`;
		}, 300);

		// Burger animation
		burger.classList.toggle("toggler");
	});
};

// activeNav for menu

export const activeNav = () => {
	const currentPage = data.page.url;
	const contentsList = document.querySelectorAll("li a");

	contentsList.forEach(function (link) {
		if (link.href === currentPage) {
			link.classList.add("active");
		}
	});
};

// export const plah = () => {
// 	const aLinks = document.querySelectorAll("li a");
// 	console.log(aLinks);
// };

// Scroll sections
// $(document).ready(function () {
// 	$('a[href^="#"]').on("click", function (e) {
// 		e.preventDefault();

// 		var target = this.hash;
// 		var $target = $(target);

// Scroll but don't show hash in browser
// 		$("html, body").animate(
// 			{
// 				"scrollTop": $target.offset().top,
// 			},
// 			1500,
// 			"swing"
// 		);
// 	});
// });
