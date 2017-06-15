(function() {
	var portfolioDetails = {
		lg_law_enforcement : {
			heading : "Promotional Series &nbsp;&bull;&nbsp; London Police Services",
			details : "One in a series of custom photos to internally promote London Police Services. Raw photography artistically edited in Photoshop for dramatic effect."
		},

		lg_EPB : {
			heading : "Interface Design for DEX",
			details : "DEX is a tech startup in London working on solving user engagement problems across multiple channels, in multiple spaces. Crux designed interfaces, portals and branding."
		},

		lg_iv : {
			heading : "In Vitro Interactive Educational Program &nbsp;&bull;&nbsp; London Health Sciences Centre",
			details : "We used audio, video and detailed scripts to create an interactive educational program for LHSC. The goal was to educate prospective embryo transplant candidates about the issues surrounding their choices, and help guide them to the best decision using interactive tools."
		},

		lg_ergo : {
			heading : "Ergonomics App &nbsp;&bull;&nbsp; 3M",
			details : "Developed an ergnomic pain point application for 3M. Using supplied design, the development involved interactive, dynamic pain point selection which would be used to determine the best available ergonomic products for the user. Video promos were part of the package, as well as links to various parts of the 3M ergo site."
		},

		lg_nelson : {
			heading : "Nelson Aggregates Delivery Web App",
			details : "Crux designed and developed an interactive web application for Nelson Aggregates' customers. Features include an interactive map and dynamic load / delivery rate calculations."
		},

		lg_shoppers : {
			heading : "Shoppers Beauty Book",
			details : "We developed the Winter / Christmas interactive Shoppers Beauty Book. Features include dynamic served, regionally aware audio and video applications. Personalized Wish List and ecommerce functionality added on."
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