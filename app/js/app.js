import Swiper from 'swiper/bundle';
import { Fancybox } from "@fancyapps/ui";

// import NiceSelect from 'nice-select2/src/js/nice-select2.js';
// global.NiceSelect = NiceSelect;

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
	
	var i_PS = 0;

	products.forEach(function (item) {

		var productSlides = item.querySelectorAll(".product-slider");
		var productThumbs = item.querySelectorAll(".product-thumbslider");

		if( item.querySelectorAll('.product-slider__item').length > 1 && productSlides.length && productThumbs.length ) {
			var swiper = new Swiper(productThumbs[0], {
				loop: true,
				spaceBetween: 10,
				slidesPerView: 4,
			});
			
			new Swiper(productSlides[0], {
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
	

	var btnMap = document.querySelector(".btn-icon_map");
	if(btnMap) {
		btnMap.addEventListener("click",function(e) {
			btnMap.classList.toggle('active');
			document.body.classList.toggle('map-catalog-openned');
		}, false);
	}

});
