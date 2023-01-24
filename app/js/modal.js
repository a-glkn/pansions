
document.addEventListener('DOMContentLoaded', () => {

	let btns = document.querySelectorAll('[data-modal="order"]');

	btns.forEach(function (item) {
		let modalName = item.getAttribute('data-modal');

		item.onclick = function(event) {
			let modal = document.querySelector('.modal-' + modalName);
			modal.classList.add('open');
		}
	});

	let close = document.querySelectorAll('.modal__close');
	close.forEach(function (item) {

		item.onclick = function(event) {
			let modals = document.querySelectorAll('.modal');

			modals.forEach(function (m) {
				m.classList.remove('open');
			});
		}
	});
});
