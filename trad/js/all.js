$(document).foundation();

$('.scrollTop').click(function () {
	$('html,body').animate({
		scrollTop: 0
	}, 800);
	return false;
});


$(document).ready(function () {
	$('.owl-lovein').owlCarousel({
		loop: true,
		dots: false,
		autoplay: false,
		margin: 10,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 2,
			}
		}
	});

	$('.owl-mysai').owlCarousel({
		loop: true,
		dots: false,
		autoplay: false,
		margin: 10,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 2,
			}
		}
	});

	$('.owl-discource').owlCarousel({
		loop: true,
		dots: false,
		autoplay: false,
		margin: 10,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			}
		}
	});

	$('.owl-upcomming').owlCarousel({
		loop: true,
		dots: false,
		autoplay: false,
		margin: 10,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			}
		}
	});


	$('.owl-updates').owlCarousel({
		loop: true,
		dots: false,
		autoplay: false,
		margin: 10,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			}
		}
	});

	$(".owl-timeline")
		.owlCarousel('destroy')
		.owlCarousel({
			loop: false,
			dots: false,
			autoplay: false,
			margin: 10,
			items: 3,
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 3,
				}
			}
		});

	$(".owl-single")
		.owlCarousel('destroy')
		.owlCarousel({
			loop: true,
			dots: false,
			autoplay: false,
			margin: 10,
			items: 1,
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
		});

	$(".owl-recommended")  //his messages (recommended new)
		.owlCarousel('destroy')
		.owlCarousel({
			loop: false,
			dots: false,
			autoplay: false,
			items: 3,
			margin: 15,
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 3,
				}
			}
		});

	// for navi toggle
	$('.navi__toggle').click(function (e) {
		e.preventDefault();
		$(this).next('.navi__wrap').toggleClass('navi--opened');
	});

	// for language dropdown
	$('.lang-sel__main').click(function (e) {
		e.preventDefault();
		$(this).next('.lang-sel__wrap').toggleClass('lang-sel--opened');
	});

	$('.search__trig').click(function () {
		$(this).next('.search__input').toggleClass('search--open');
	});

	/** Mailchimp AJAX mailing list. **/

	//var url = wpAjax.wpurl + '/wp-content/themes/saivrinda-theme/';
	$("#signup").validate({  // jQuery Validation
		submitHandler: function (form) { // if valid, post data via AJAX
			$.post(url + "/subscribe.php", {
				email: $("#email").val()
			}, function (data) {
				$('#response').html(data);
			});
		},
		rules: {  // all fields are required
			email: {
				required: true,
				email: true
			}
		}
	});

	/** Mailchimp AJAX mailing list. **/

});

//display live now label.
$('iframe').iframeTracker({
	blurCallback: function () {
		$('.live-lbl').css('display', 'none');
	}
});

// Sticky section
// $("#main-content").stick_in_parent();

//isotope.
$('.grid').isotope({
	itemSelector: '.grid-item',
	layoutMode: 'masonry'
});

// filter items on button click
$('.filter-button-group').on('click', 'a', function () {
	var filterValue = $(this).attr('data-filter');
	$('.grid').isotope({
		filter: filterValue
	});
	$('.filter-button-group').find('.sort__single--active').removeClass('sort__single--active');
	$('.filter-button-group').find('[data-filter="' + filterValue + '"]').addClass('sort__single--active');
});