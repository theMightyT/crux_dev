(function() {
	var portfolioDetails = {
		lg_law_enforcement : {
			heading : "Promotional Series &nbsp;&bull;&nbsp; London Police Services",
			details : "One in a series of custom photos to internally promote London Police Services"
		},

		lg_EPB : {
			heading : "Interface Design for DEX",
			details : "DEX is a tech startup in London working on solving user engagement problems across multiple channels, in multiple spaces. Crux designed interfaces, portals and branding."
		}
	}
	// todo => keep lightbox at top on window resize (kinda works now but the media query breaks it at one point)
	// 
	$('.Portfolio-box a').click(function() {
		// launch lightbox here
		if ($(this).attr('href') !== "#") {
			// navigate to url, or show a site screenshot? alternatively could load it in an iframe or even a modal
			window.open($(this).attr('href'), '_blank'); 
		} else {
			$(document.body).css('overflow', 'hidden');
			
			// blast it in for now => can animate this later
			$('.lightbox').css({ 'display' : 'block', 'visibility' : 'visible', 'top' : $(document).scrollTop() });

			var imageSource = $(this).find('img').attr('src').split('/')[1].replace("sm", "lg"),
				textSourceKey = imageSource.substring(0, imageSource.lastIndexOf('.'));
			//imageSouce = imageSource.replace("sm", "lg");

			// load large image (just show path for now)
			$('.lightbox img').attr('src', "img/" + imageSource);
			$('.lightbox h3').html(portfolioDetails[textSourceKey].heading);
			$('.lightbox p').html(portfolioDetails[textSourceKey].details);

			window.addEventListener('resize', resetLightbox, false);
		}
		
		return false;
	});

	$('.close-lightbox').click(function() {
		$(document.body).css('overflow', 'auto');
		$('.lightbox').css({ 'display' : 'none', 'visibility' : 'hidden', 'top' : 'auto' });

		window.removeEventListener('resize', resetLightbox, false);
	});

	function resetLightbox() {
		// get the offset and reapply the top to the lightbox
		$('.lightbox').css('top', $(document).scrollTop());
	}
})();