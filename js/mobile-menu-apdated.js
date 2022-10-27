document.addEventListener("DOMContentLoaded", function (event) {
	const mobileMenu = document.querySelector('.js-menu-container'),
		  openMenuBtn = document.querySelector('.js-open-menu'),
		  closeMenuBtn = document.querySelector('.js-close-menu');

	function toggleMenu(){
		const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
		openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
		mobileMenu.classList.toggle('is-open');
	};

	openMenuBtn.addEventListener('click', toggleMenu);
	closeMenuBtn.addEventListener('click', toggleMenu);

	document.querySelectorAll('header nav a').forEach(link => link.addEventListener('click', function (e) {
		if(link.getAttribute('href')[0] !== '#'){
			return
		} else {
			e.preventDefault();

			let target = document.getElementById(link.getAttribute('href').substring(1));

			window.scrollTo({
				top: target.offsetTop,
				behavior: "smooth"
			});
			
			toggleMenu();
		}

	}));

	// Close the mobile menu on wider screens if the device orientation changes
	window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
		if (!e.matches) return;
		toggleMenu();
	});
});
