/*--------- Testimonials Slider  -------*/
$(function() {

    $('.slider').cycle({
       fx:     'fade',
       speed:   800,
       timeout: 5000,
  
      pager: '#nav',
      cleartypeNoBg: true,
      slideResize: 0,
	   
 pagerAnchorBuilder: function (index) {
            return '<a href="#"> </a>';
        }
    });
     
});