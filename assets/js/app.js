$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 120) {
      $(".navbar-area").addClass("is-sticky");
    } else {
      $(".navbar-area").removeClass("is-sticky");
    }
  });
  
  $(".others-option .search-icon i").on("click", function(){
		$(".search-overlay").toggleClass("search-overlay-active");
	});
	$(".search-overlay-close").on("click", function(){
		$(".search-overlay").removeClass("search-overlay-active");
	});

  
 
});
