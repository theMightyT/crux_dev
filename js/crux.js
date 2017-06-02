(function() {
	$('.Portfolio-box a').click(function() {
		// lauch lightbox here
		if ($(this).attr('href') !== "#") {
			// navigate to url, or show a site screenshot? alternatively could load it in an iframe or even a modal
			window.open($(this).attr('href'), '_blank'); 
		} else {
			$(document.body).css('overflow', 'hidden');

			// blast it in for now => can animate this later
			$('.lightbox').css({ 'visibility' : 'visible', 'top' : $(document).scrollTop() });

			// load large image (just show path for now)
			$('.lightbox .temp').text($(this).find('img').attr('src').split('/')[1]);
		}
		
		return false;
	});

	$('.close-lightbox').click(function() {
		$(document.body).css('overflow', 'auto');
		$('.lightbox').css({ 'visibility' : 'hidden', 'top' : 'auto' });
	});
})();