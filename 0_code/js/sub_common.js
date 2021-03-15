$(document).ready(function(){
    $("#flipbook").turn({
		
	});
  $('.prev').click(function(e){
    e.preventDefault();
    $("#flipbook").turn("previous")
  });
  $('.next').click(function(e){
      e.preventDefault();
    $("#flipbook").turn("next")
  });


});