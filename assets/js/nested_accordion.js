$(function (){
	  'use strict';
});

$('.headLi').click(function () {
  $(this).next('div').removeClass('hide_list').addClass('show_list');
    $('.headLi').click(function(){
      $(this).next('div').removeClass('show_list').addClass('hide_list');
  });
});


//TEST CONNECTION///////
// $('div').on('click', function() {
//   alert('Y');
// });

//SLIDE DOWN TEST//////
//able to slide down content - but toggles every show class.
// $('.rightArrowblock').click(function () {
//   $('div').next('p').toggleSlide(this);
// })
