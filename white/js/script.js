/* INIT */
jQuery(document).ready(function($)
{
	//HAMBURGER MENU
	$('.hamburger').click(function(e){
	  e.preventDefault();
	  $(this).toggleClass('is-active');
	});
	
	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });

});