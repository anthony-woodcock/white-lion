/* INIT */
jQuery(document).ready(function($)
{
	//HAMBURGER MENU
	$('.hamburger').click(function(e){
	  e.preventDefault();
	  $(this).toggleClass('is-active');
	});

});