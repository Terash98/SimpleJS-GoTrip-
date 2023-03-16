const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 0,
    items: 1,
    responsive: {
        600:{
            items:2,
            startPosition: 1,
        },
        850: {
            items:3,
            startPosition: 1,
        },
        1200: {
            items:3,
            margin:30,
        },
    },
});
$('.slider__btn-prev').click(function() {
    
    owl.trigger('prev.owl.carousel',);
})

$('.slider__btn-mext').click(function() {
    owl.trigger('next.owl.carousel');
});

    const navBtn = document.querySelector('.btn__toggle');
    const nav = document.querySelector('.nav')
    const menuIcon = document.querySelector('.menu-icon');

    navBtn.onclick = function () {
        nav.classList.toggle('nav--mobile')
        menuIcon.classList.toggle('menu-icon--active');
        document.body.classList.toggle('no-scroll');
    };
/* const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function () {
	nav.classList.toggle('nav--mobile')
	menuIcon.classList.toggle('menu-icon--active');
	document.body.classList.toggle('no-scroll');
}; */