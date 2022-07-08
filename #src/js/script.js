function testWebP(callback) {
	let webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();



$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .menu__list').toggleClass('active');
		$('body').toggleClass('lock');
	})
});


const s = document.querySelectorAll('.counter');


function func1() {
	let val = Number(this.innerHTML);
	val += 1;
	this.innerHTML = val;
}
s.forEach(ss => {
	ss.addEventListener('mouseover', func1);
})
// s.addEventListener('mouseover', func1);


var menu = ['Pink' + 'Shoes', 'AnnaField', 'Prada', 'Casadei', 'MellowYellow']
var mySwiper = new Swiper('.swiper', {
	// If we need pagination
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},


})