jQuery(function(){
    jQuery(".basic-example").heapbox();
});

(function($){
	$(".pop-link").click(function() { 
		$('.popup_content1').fadeToggle('fast'); 
	});
	$(".close_pop").click(function() { 
		$('.popup_content1').fadeOut('fast'); 
	});	
	$(".pop-link2").click(function() { 
		$('.popup_content2').fadeToggle('fast'); 
	});
	$(".close_pop").click(function() { 
		$('.popup_content2').fadeOut('fast'); 
	});	
})(jQuery);



jQuery(function(){
	jQuery('#menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});

	// jQuery(".scrollbar-box").mCustomScrollbar({ });
		jQuery('.owl-slider-area .owl-carousel').owlCarousel({
		stagePadding: 0,
		loop:true,
		margin: 30,
		nav:true,
		responsive: {
			0:{
				items:1,
				stagePadding: 0,
				margin:10
			},
			480:{
				items:1,
				stagePadding: 0,
				margin:10
			},  
			520:{
				items:2,
				stagePadding: 0,
				margin:10
			},  
			700:{
				items:2,
				stagePadding: 0,
				margin:10
			},  
			800:{
				items:2
			},   
			900:{
				items:3
			},   
			1023:{
				items:3
			},   
			1024:{
				items:4
			}  
			
		}
	});
});

jQuery(window).load(function(){
	jQuery('.flexslider.banner_container').flexslider({
		animation: "fade",
		controlNav: true,              
		directionNav: true,
		animationLoop: false,
		slideshow: true,
		prevText: "",
   	 	nextText: "", 
		start: function(slider){
		jQuery('body').removeClass('loading'); 
		}
	});
});
(function(jQuery){
	jQuery(window).on('load', function() {
		(function($) {
			handlePreloader()
		})(jQuery);
	});
	function handlePreloader() {
		if(jQuery('.preloader').length){
			jQuery('body').removeClass('active-preloader-ovh');
			jQuery('.preloader').fadeOut();
		}
	}
	
	var topmenu = jQuery( '.top_menu' ).html();
	jQuery( '.mobile_top_menu' ).html( topmenu );
	
})(jQuery);

jQuery(".menu_bar").click(function() { 
	jQuery('.mobile_menu').addClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideDown('slow'); 
});

jQuery(".menu_close").click(function() { 
	jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideUp('slow'); 
});
jQuery(function(){
	var $grid = jQuery('.photo-orient-food').isotope({
	  	layoutMode: 'fitRows',
		itemSelector: '.orient-food-item',
		percentPosition: true,
		fitRows: {
		  gutter: 1
		}
	}); 

	jQuery('.title-menu').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
});

jQuery(document).ready(function() {
    jQuery(".fancybox").fancybox({
        prevEffect      : 'fade',
        nextEffect      : 'fade',
        closeBtn        : true,
        overlayShow	    : true,
        type            : 'image',
    })
});