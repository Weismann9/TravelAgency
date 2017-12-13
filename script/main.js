//tabs
$(function() {
	$("#tabs").tabs();
});

$(function() {
	$(".datepicker").each(function() {
		$(this).datepicker({

		});
	});
	$(".spinner").each(function() {
		$(this).spinner({
			classes: {
				"ui-spinner": "form-control"
			}
		});
	});
    $( ".checkbox-radio" ).checkboxradio({
      icon: false
    });

    $( ".slider-range-price" ).slider({
      range: true,
      min: 0,
      max: 5000,
      values: [ 0, 0 ],
      slide: function( event, ui ) {
        $( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });

    $( ".slider-range-rating" ).slider({
      range: true,
      min: 0,
      max: 5,
      values: [ 0, 0 ],
      slide: function( event, ui ) {
        $( "#rating" ).val( "Зірок " + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
	$(".form").validate({
		rules: {
			nights : "required",
		},
		messages: {
			dataFrom : "Please enter the date",
		}
	});
	$( ".accordion" ).accordion({
	      heightStyle: "content"
    });
	});

//autocomplete
$(function() {
	var availableTags = [
		"Київ",
		"Москва",
		"Лондон",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"
	];
	$("#tags").autocomplete({
		source: availableTags
	});
});