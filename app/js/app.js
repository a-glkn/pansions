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

	var products = document.querySelectorAll(".product");
	var productSlides = document.querySelectorAll(".product-slider");
	var productThumbs = document.querySelectorAll(".product-thumbslider");
	var i_PS = 0;

	products.forEach(function (item) {
		var swiper = new Swiper(productThumbs[i_PS], {
			loop: true,
			spaceBetween: 10,
			slidesPerView: 4,
			// freeMode: true,
			// watchSlidesProgress: true,
		});

		new Swiper(productSlides[i_PS], {
			loop: true,
			spaceBetween: 0,
			navigation: {
				nextEl: item.querySelector(".swiper-button-next"),
				prevEl: item.querySelector(".swiper-button-prev"),
			},
			thumbs: {
			  	swiper: swiper,
			},
		});
		i_PS++;
	});


	


	var toggler = document.querySelector(".menu-toggler");
	toggler.addEventListener("click",function(e){
		document.body.classList.toggle('menu-openned');
	},false);

});
