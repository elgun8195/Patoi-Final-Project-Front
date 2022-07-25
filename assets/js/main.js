$(document).ready(function () {
  window.loopcounter = function (idWarp) {
    if (typeof idWarp != "undefined") {
      var date = $("." + idWarp).data("date");
      if (typeof date != "undefined") {
        var start = new Date(date.replace(/-/g, "/")),
          end = new Date(),
          diff = new Date(start - end),
          time = diff / 1000 / 60 / 60 / 24;

        var day = parseInt(time);
        var hour = parseInt(24 - ((diff / 1000 / 60 / 60) % 24));
        var min = parseInt(60 - ((diff / 1000 / 60) % 60));
        var sec = parseInt(60 - ((diff / 1000) % 60));

        counterDate(idWarp, day, hour, min, sec);

        var interval = setInterval(function () {
          if (sec == 0 && min != 0) {
            min--;
            sec = 60;
          }
          if (min == 0 && sec == 0 && hour != 0) {
            hour--;
            min = 59;
            sec = 60;
          }
          if (min == 0 && sec == 0 && hour == 0 && day != 0) {
            day--;
            hour = 23;
            min = 59;
            sec = 60;
          }
          if (min == 0 && sec == 0 && hour == 0 && day == 0) {
            clearInterval(interval);
          } else {
            sec--;
          }
          counterDate(idWarp, day, hour, min, sec);
        }, 1000);

        function counterDate(id, day, hour, min, sec) {
          if (time < 0) {
            day = hour = min = sec = 0;
          }
          $("." + id + " .counter-days").html(counterDoubleDigit(day));
          $("." + id + " .counter-hours").html(counterDoubleDigit(hour));
          $("." + id + " .counter-minutes").html(counterDoubleDigit(min));
          $("." + id + " .counter-seconds").html(counterDoubleDigit(sec));
        }
        function counterDoubleDigit(arg) {
          if (arg.toString().length <= 1) {
            arg = ("0" + arg).slice(-2);
          }
          return arg;
        }
      }
    }
  };
  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 600) $(".go-top").addClass("active");
    if (scrolled < 600) $(".go-top").removeClass("active");
  });
  // Click Event
  $(".go-top").on("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 500);
  });
  $(".input-counter").each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find(".plus-btn"),
		btnDown = spinner.find(".minus-btn"),
		min = input.attr("min"),
		max = input.attr("max");
		btnUp.on("click", function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on("click", function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

});


//price range


const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        console.log(minPrice.value);
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


//price range
