jQuery(document).ready(function(){

	jQuery('.circles_content').each(function() {
		var font_size = parseInt(jQuery(this).find('.circle:first-child').css('font-size'));
		var real_width = (jQuery(this).width()-font_size)/2-Math.round(font_size/5)*2;
		var real_height = (jQuery(this).height()-font_size)/2-Math.round(font_size/5)*2;
		var nb_circles = jQuery(this).find('.circle').length;
		console.log(nb_circles);
		var angle = 2*Math.PI/nb_circles;
		jQuery(this).find('.circle').each(function( i, val ) {
			var current_angle = angle*i-Math.PI/2;
			var x = Math.cos(current_angle);
			var y = Math.sin(current_angle);
			jQuery(this).animate({ left: '+='+(real_width+x*real_width), top: '+='+(real_height+y*real_height), opacity: "+=1" }, 500);
		});
	});

	jQuery('.circles_content .circle').hover(function(){
		jQuery(this).parent().find('.title h3').html(jQuery(this).attr('rel'));
		jQuery(this).parent().find('.title p').html(jQuery(this).attr('cont'));
	});
	jQuery('.circles_content .circle').click(function(){
		return false;
	});

});