$(function (){
	  'use strict';
});

//When the header is clikced, toggle the next div to .show_list
$('.headLi').on('click', function () {
  $(this).next('div').slideToggle('.show_list');
});

//Only allows 2 clicks before the function doesn't work anymore
// $('.headLi').click(function () {
//   $(this).next('div').removeClass('hide_list').addClass('show_list');
//     $('.headLi').click(function(){
//       $(this).next('div').removeClass('show_list').addClass('hide_list');
//   });
// });


//TEST CONNECTION///////
// $('div').on('click', function() {
//   alert('Y');
// });

//SLIDE DOWN TEST//////
//able to slide down content - but toggles every show class.
// $('.rightArrowblock').click(function () {
//   $('div').next('p').toggleSlide(this);
// })


/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
//TOGGLE SUBLIST TO SHOW/HIDE CSS WHEN CLICKED//
$('.r_smallArrowblock').on('click', function () {
  $(this).next('div').slideToggle('.sub_show');
});
