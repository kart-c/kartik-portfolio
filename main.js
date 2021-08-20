const htmlImage = document.querySelector('.container-image');
const backdrop = document.querySelector('.backdrop');

htmlImage.addEventListener('click', () => {
	backdrop.classList.add('open');
	htmlImage.classList.remove('container-image');
	htmlImage.classList.add('container-image__onclick');
});

backdrop.addEventListener('click', () => {
	backdrop.classList.remove('open');
	htmlImage.classList.remove('container-image__onclick');
	htmlImage.classList.add('container-image');
});
