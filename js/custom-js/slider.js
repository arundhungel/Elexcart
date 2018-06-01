var owl = $('.product-slider');
  owl.owlCarousel({
    margin: 0,
    loop: false,
	nav: true,
	navText: [ '', '' ],
	slideBy: 4,
	items: 4,
	responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        
        600:{
            items:2,
        },
        750:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
  });
var owl = $('.card-slider');
  owl.owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'slideInRight',
    smartSpeed:450,
    margin: 1,
    loop: false,
    nav: true,
    navText: [ '', '' ],
    slideBy: 1,
    items: 1,
    responsiveClass:false,
   
  });
var owl = $('.main-slider');
  owl.owlCarousel({
    animateOut: 'slideOutLeft',
    animateIn: 'slideInRight',
    smartSpeed:450,
    margin: 1,
    loop: false,
	nav: true,
	navText: [ '', '' ],
	slideBy: 1,
	items: 1,
	responsiveClass:false,
   
  });