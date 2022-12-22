import Swiper from 'swiper/bundle';
// import NiceSelect from 'nice-select2/src/js/nice-select2.js';

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

		if( item.querySelectorAll('.product-slider__item').length > 1 ) {
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
				slidesPerView: 1,
				navigation: {
					nextEl: item.querySelector(".swiper-button-next"),
					prevEl: item.querySelector(".swiper-button-prev"),
				},
				thumbs: {
					  swiper: swiper,
				},
			});
		} else {
			item.querySelector('.swiper-button-prev').style.display = 'none';
			item.querySelector('.swiper-button-next').style.display = 'none';
		}
		
		i_PS++;
	});


	var toggler = document.querySelector(".menu-toggler");
	toggler.addEventListener("click",function(e){
		document.body.classList.toggle('menu-openned');
	}, false);


	document.querySelector(".mob-menu-nav li.arrow-link a").addEventListener("click", function(e){
		var $li = this.parentNode;
		$li.classList.toggle('active');

		e.preventDefault();
	}, false);

	// const selects = document.getElementsByTagName("select");
	// for (let i = 0; i < selects.length; i++) {
	// 	new NiceSelect(selects[i], {searchable: false});
	// }

});
