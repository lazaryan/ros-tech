let burger 		= document.querySelector('.js-header__logo_burger');
let nav 		= document.querySelector('.js-header__nav');

let search 		= document.querySelector('.js-header__nav_search-img');
let search_bar		= document.querySelector('.js-header__search-bar');
let close_search_bar	= document.querySelector('.js-header__search-bar_close');

burger.addEventListener('click', () => {
	nav.classList.toggle('header__nav_active');
});

search .addEventListener('click', () => {
	search_bar.classList.toggle('header__search-bar_active');
});

close_search_bar.addEventListener('click', () => {
	search_bar.classList.remove('header__search-bar_active');
});