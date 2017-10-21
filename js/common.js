$(function() {

	$(".slider").slideDown();


	$(".popup-with-move-anim").magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	$(".button-small").click(function(){
		$("#callback .form-name").val($(this).data("form"));
	});

	$(".service-item h4").equalHeights();

$(".owl-carousel").owlCarousel({
	items:1,
	loop:true,
	nav:true,
	mouseDrag:false,
	navContainerClass: "container nav-wrap",
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
});
 $('.next').on('click', function () {
      owl.trigger('next.owl.carousel', [500]);
  });
  $('.prev').on('click', function () {
      owl.trigger('prev.owl.carousel', [500]);
  }); 
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			$(".success").removeClass("visible");
			$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	$(window).scroll(function() {
	if($(this).scrollTop() > $(this).height() ){
		$('.top').addClass('active');
	} else {
		$('.top').removeClass('active');
	}
});
	$('.top').click(function() {
	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing')
});

		$(".sf-menu").after("<div id='my-menu' class='hidden-md hidden-lg'>").clone().appendTo("#my-menu");
		$("#my-menu").find(".sf-menu").attr("class", "");

	$("#my-menu").mmenu({
		extensions 	: [ "theme-white",  "fx-panels-slide-100", "fx-listitems-slide", "fx-menu-slide", "border-offset", "pagedim-black" ],
		navbar: {
			title: "Меню"
		},
		offCanvas: {
			position: 'left' //Позиция выезда меню
		}
		
	});
	
	
	

	$(".mobile-mnu").click(function() {
		
		var API = $("#my-menu").data( "mmenu" );
	 	API.open();
		//var thiss = $(this).find(".toggle-mnu");
	  //$(thiss).toggleClass("on");
	  var b = $(this).find(".menu_b");
	  $(b).toggleClass("invisible");


	  $(".mobile-mnu").click(function(){
	  	API.close();
	  });
	  
	 //  var el = document.getElementById('my-menu');
		// el.parentNode.removeChild(el);

});
	var api = $("#my-menu").data("mmenu");
	api.bind("open:start", function() {
		$(".toggle-mnu").addClass("on");
	}).bind("close:finish",function() {
		$(".toggle-mnu").removeClass("on");
	});

$(window).resize(function(){
		if($(window).width() >= 992){
			var API = $("#my-menu").data( "mmenu" );
			API.close();
		}
	});
});
