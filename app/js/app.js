import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', () => {

	new Swiper(".carousel_features_1", {
        slidesPerView: "auto",
        spaceBetween: 10,
		mousewheel: false,
        keyboard: true,
		navigation: {
			nextEl: ".carousel_features_1 .swiper-button-next",
			prevEl: ".carousel_features_1 .swiper-button-prev",
		},
    });

	new Swiper(".carousel_features_2", {
        slidesPerView: "auto",
        spaceBetween: 10,
		mousewheel: false,
        keyboard: true,
		navigation: {
			nextEl: ".carousel_features_2 .swiper-button-next",
			prevEl: ".carousel_features_2 .swiper-button-prev",
		},
    });

	new Swiper(".carousel_pansions", {
        slidesPerView: "auto",
        spaceBetween: 10,
		mousewheel: false,
        keyboard: true,
		navigation: {
			nextEl: ".carousel_pansions .swiper-button-next",
			prevEl: ".carousel_pansions .swiper-button-prev",
		},
    });

	new Swiper(".slider_banner", {
		loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

});
