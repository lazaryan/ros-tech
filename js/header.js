let burger = document.querySelector('.js-header__logo_burger');
let nav = document.querySelector('.js-header__nav');

burger.addEventListener('click', () => {
	nav.classList.toggle('header__nav_active');
});