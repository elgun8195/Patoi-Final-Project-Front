$(".carousel").owlCarousel({
  startPosition: 0,
        margin: 10,
  loop: true,
  autoplay: true,
  nav:false,
  autoplayTimeout: 4000,
  responsiveClass:true,
  autoplayHoverPause: false,
  pagination :true,
  dots: false,
  responsive: {
    0:{

      items:1
  },
  480:{

      items:2
  },
  568:{

      items:2
  },
  667:{

      items:2
  },
  768:{

      items:3
  },
  1024:{
      items:5
  }
  },
});
