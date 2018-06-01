 $(document).ready(function(){
     $('.assure .img-wrapper').matchHeight();           
     $('.assure li').matchHeight();           
     $('.product').matchHeight();           
     $('.card-slider .product').matchHeight("remove");           
});

$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
    $(".dropdown-button").dropdown();
  });

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
	
});
