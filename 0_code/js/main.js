$(window).load(function(){
 
  $('.loader').delay(1400).fadeOut(500);
});


$(document).ready(function(){
  

  /* main */
  new fullpage('#fullpage', {
    licenseKey: 'D5222D75-3F794A7D-84014405-7039DD4A',
    anchors: ['page01', 'page02', 'page03', 'page04', 'page05'],
    autoScrolling:true,
    scrollHorizontally: true,
    css3: false,
    verticalCentered: false,
    afterLoad: function(origin, destination, direction){
      $('.text_box, .bn, .num').addClass('active');
      
      if(destination.index == 4){ 
          $('.left, .right, h2 span').addClass('active');
      }
    },
    onLeave: function(origin, destination, direction){ 
        $('.text_box, .bn, .num, .left, .right, h2 span').removeClass('active');
    }
 
  });

  var swiper = new Swiper('.swiper-container', {
      speed: 1000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      effect: 'fade',
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        
    });

  /* iframe */
  $('.viewButton').click(function(e){
    e.preventDefault();
    var thisSrc = $(this).parent().find('iframe').attr('src');
    $(this).parent().find('iframe').attr('src', thisSrc);
    $(this).next().fadeIn(300);
  });
  
  $('.view a').click(function(){
    $(this).parent().fadeOut(300);
  });
  
});

