$(document).ready(function() {

			//Анимированая галерея портфолио
	$("#portfolio_grid").mixItUp();		

			//Добавляет класс active при клике
	$(".s_portfolio li").click(function(){
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

			//Магнифик попап
	$(".popup").magnificPopup({type: "image"});
	$(".popup_content").magnificPopup({type: "inline"});

		//Анимация элементов страници с Animate.css
	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2, .left .resume_item").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3, .right .resume_item").animated("fadeInRight", "fadeOutRight");
	

			// рисунок на всю высоту экрана
	function heightDetect() {

	$(".main_head").css("height", $(window).height());
	};

	heightDetect();

	$(window).resize(function(){
		heightDetect()
	})
			// интерактивное меню(три полоски)
	$(".toggle_mnu").click(function() {
  		$(".sandwich").toggleClass("active");
});
	$(".top_mnu li a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").removeClass("h_opacity");
	}).append("<span>");

			// всплывающее меню на весь экран(с анимацией)
	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").removeClass("h_opacity");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").addClass("h_opacity");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
		
	});

			//Присваивание ID ссылкам "a" в портфолио
	$(".portfolio_item").each(function(i){
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".product_descr").attr("id", "work_" + i);
	});
			//Для импутов скрипт JqBootstrapValidation
	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();

			//Скролл меню к элементу
	$(".top_mnu li a").mPageScroll2id();


}); 
		// прелодер
	$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

