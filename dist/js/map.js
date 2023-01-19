
document.addEventListener('DOMContentLoaded', () => {

	var intMap = document.querySelectorAll('.interactive-map');

	intMap.forEach(function (the_map) {

		var myMap = the_map.querySelectorAll('path.interactive');
		myMap.forEach(function (item) {

			var region = item.getAttribute("data-region");

			item.onmouseover = function(event) {
				if (this != event.currentTarget) { return false; }
		
				the_map.querySelectorAll('.region-rating[data-region="' + region + '"]')[0].classList.toggle('hover');
			}
			item.onmouseout = function(event) {
				if (this != event.currentTarget) { return false; }
		
				the_map.querySelectorAll('.region-rating[data-region="' + region + '"]')[0].classList.toggle('hover');
			}

		});

		//////////////

		var columns = the_map.querySelectorAll('.region-rating');
		columns.forEach(function (item) {

			var region = item.getAttribute("data-region");

			item.onmouseover = function(event) {
				if (this != event.currentTarget) { return false; }
				the_map.querySelectorAll('path.interactive[data-region="' + region + '"]')[0].classList.toggle('hover');
			}
			item.onmouseout = function(event) {
				if (this != event.currentTarget) { return false; }
				the_map.querySelectorAll('path.interactive[data-region="' + region + '"]')[0].classList.toggle('hover');
			}

		});

	});

});
