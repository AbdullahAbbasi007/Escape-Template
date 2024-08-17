const activepage = window.location.pathname;
const navlinks = document.querySelectorAll(".nav-link");

navlinks.forEach((link) => {
	if (link.href && link.href.includes(activepage)) {
		link.classList.add("active");
	}
});

document.addEventListener("DOMContentLoaded", function () {
	const showNav = document.querySelector(".menu-button");
	const mobileOverlay = document.querySelector(".mobile-overlay");
	const hideNav = document.getElementById("close-nav");
	const heading = document.querySelector(".hero-header");
	const para = document.querySelector(".hero-para");

	showNav.addEventListener("click", function () {
		mobileOverlay.style.transform = "translateX(0%)";
		heading.style.display = "none";
		para.style.display = "none";
	});

	hideNav.addEventListener("click", function () {
		mobileOverlay.style.transform = "translateX(100%)";
		heading.style.display = "block";
		para.style.display = "block";
	});
});
