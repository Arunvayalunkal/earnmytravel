$(".testi-slider").slick({
        dots: true,
		prevArrow: false,
    nextArrow: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
		responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
	  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
      });
	  
/*Searchbox script*/
$(".search-toggle li a").click(function() {
    $(this).parent().addClass('active').siblings().removeClass('active');

    });

$('#returntxt').prop('disabled', true);
    $('#oneway').click(function(){
   
     $('#returntxt').prop('disabled', true);
   });
   
    $('#roundtrip').click(function(){
   
       $('#returntxt').prop('disabled', false)
   });

$("#trav-click").click(function(e){
	  $(".traveller-pop").show();
});

$("#trav-submit").click(function(e){
	  $(".traveller-pop").hide();
});

$( "#return" ).hide();
$( "#depart" ).addClass('col-sm-6');
$( "#oneway" ).click(function() {
  $( "#return" ).hide();
  $( "#depart" ).addClass('col-sm-6');
  
});

$( "#roundtrip" ).click(function() {
  $( "#return" ).show();
  $( "#depart" ).removeClass('col-sm-6');
  
});


//multicity

$( "#mc-2" ).hide();
$( "#mc-3" ).hide();
$( "#mc-4" ).hide();
$( "#mc-5" ).hide();

$( "#multicity" ).click(function() {
  $( "#mc-2" ).show();
});

$( "#ad-btn-2" ).click(function() {
  $( "#mc-3" ).show();
  $( "#btn-con-2" ).hide();
});




$( "#ad-btn-3" ).click(function() {
  $( "#mc-4" ).show();
  $( "#btn-con-3" ).hide();
});
$( "#rem-btn-3" ).click(function() {
	$( "#mc-3" ).hide();
  $( "#mc-4" ).hide();
  $( "#btn-con-2" ).show();
});



$( "#ad-btn-4" ).click(function() {
  $( "#mc-5" ).show();
  $( "#btn-con-4" ).hide();
});
$( "#rem-btn-4" ).click(function() {
	$( "#mc-4" ).hide();
  $( "#mc-5" ).hide();
  $( "#btn-con-3" ).show();
});


$( "#rem-btn-5" ).click(function() {
	$( "#mc-5" ).hide();
  $( "#btn-con-4" ).show();
});

$( "#roundtrip" ).click(function() {
	$( "#mc-2" ).hide();
	$( "#mc-3" ).hide();
	$( "#mc-4" ).hide();
	$( "#mc-5" ).hide();
  $( "#btn-con-2" ).show();
  $( "#btn-con-3" ).show();
  $( "#btn-con-4" ).show();
  $( "#btn-con-5" ).show();
  $( "#btn-con-2" ).show();
  $( "#btn-con-3" ).show();
  $( "#btn-con-4" ).show();
  $( "#btn-con-5" ).show();
});

$( "#oneway" ).click(function() {
	$( "#mc-2" ).hide();
	$( "#mc-3" ).hide();
	$( "#mc-4" ).hide();
	$( "#mc-5" ).hide();
  $( "#btn-con-2" ).show();
  $( "#btn-con-3" ).show();
  $( "#btn-con-4" ).show();
  $( "#btn-con-5" ).show();
  $( "#btn-con-2" ).show();
  $( "#btn-con-3" ).show();
  $( "#btn-con-4" ).show();
  $( "#btn-con-5" ).show();
});


//modify search
$( "#search-edit" ).hide();
$( "#m-but" ).click(function() {
  $( "#search-edit" ).show();
  $( "#search-display" ).hide();
  
});

$( "#edit-m-btn" ).click(function() {
  $( "#search-edit" ).show();
  $( "#search-display" ).hide();
  
});

$( ".close-btn" ).click(function() {
  $( "#search-edit" ).hide();
  $( "#search-display" ).show();
  
});


/*price range slider*/

function showProducts(minPrice, maxPrice) {
    $("#flightlist .search-result-bx").hide().filter(function() {
        var price = parseInt($(this).data("price"), 10);
        return price >= minPrice && price <= maxPrice;
    }).show();
	
}

$(function() {
    var options = {
        range: true,
        min: 0,
        max: 500,
        values: [10, 300],
        slide: function(event, ui) {
            var min = ui.values[0],
                max = ui.values[1];

            $("#amount").val("$" + min + " - $" + max);
            showProducts(min, max);
        }
    }, min, max;

    $("#slider-range").slider(options);

    min = $("#slider-range").slider("values", 0);
    max = $("#slider-range").slider("values", 1);

    $("#amount").val("$" + min + " - $" + max);

    showProducts(min, max);
});


//scrollbar

//(function ($) {
//  $(window).on("load", function () {
//    $(".filter-inner").mCustomScrollbar();
//  });
//})(jQuery);

//filter

$( ".filter-btn-dtop" ).click(function() {
  $( ".filter-con" ).show();
  $( ".filter-overlay" ).show();
  
});
$( "#fltr-m-btn" ).click(function() {
  $( ".filter-con" ).show();
  $( ".filter-overlay" ).show();
});

$( ".f-clear-but" ).click(function() {
  $( ".filter-con" ).hide();
  $( ".filter-overlay" ).hide();
});

//list drop

$( "#list-drop-btn" ).click(function() {
  $( "#list-drop" ).show();
   $(this).hide();
   $( "#ld-btn-hide" ).show();
   
   if($(window).width() < 450)
{
  $( ".filter-overlay" ).show();
} 
});

$( "#ld-btn-hide" ).click(function() {
  $( "#list-drop" ).hide();
   $(this).hide();
   $( "#list-drop-btn" ).show();
  if($(window).width() < 450)
{
  $( ".filter-overlay" ).hide();
} 
});

$( ".list-drop-close" ).click(function() {
  $( "#list-drop" ).hide();
   $("#ld-btn-hide").hide();
   $( "#list-drop-btn" ).show();
  if($(window).width() < 450)
{
  $( ".filter-overlay" ).hide();
} 
});
