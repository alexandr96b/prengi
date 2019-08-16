$(document).ready(function () {

$('.menu-icon').click(function(){
  $('.b-nav').toggleClass('active');
  $('.menu-icon').toggleClass('active');
});

$(".fancybox-media").fancybox({
 "width": 620, // or whatever
 "height": 420,
 "type": "iframe"
});


$(document).on('click', function(event) {
  if (!$(event.target).closest(".menu-icon , .b-nav").length) {
    $('.b-nav').removeClass('active');
    $('.menu-icon').removeClass('active');
  }
  event.stopPropagation();
});


$(".b-nav a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
  scrollSpeed: 1500,
  offset: 95,
  forceSingleHighlight: true,
  highlightSelector:".b-nav a"
});


$('.b-footer-form__top').click(function(){
  $(this).next().toggleClass('active');
  $(this).toggleClass('active');
});

$(document).on('click', function(event) {
  if (!$(event.target).closest(".b-footer-form__top , .b-footer-form__content").length) {
    $('.b-footer-form__content').removeClass('active');
    $('.b-footer-form__top').removeClass('active');
  }
  event.stopPropagation();
});



$('.btn-callback').click(function(){
  $('.b-header .b-block').toggleClass('active');
  $('.btn-callback').toggleClass('active');
});


$(document).on('click', function(event) {
  if (!$(event.target).closest(".btn-callback , .b-header .b-block").length) {
    $('.b-header .b-block').removeClass('active');
    $('.btn-callback').removeClass('active');
  }
  event.stopPropagation();
});


$('.b-programm-item__link').click(function(){
  $('.b-block-wrap .b-block').toggleClass('active');
  $('.b-programm-item__link').toggleClass('active');
});


$(document).on('click', function(event) {
  if (!$(event.target).closest(".b-programm-item__link , .b-block-wrap .b-block").length) {
    $('.b-block-wrap .b-block').removeClass('active');
    $('.b-programm-item__link').removeClass('active');
  }
  event.stopPropagation();
});


$(".btn-scroll").click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');
});

var scrolledpx = parseInt($(window).scrollTop());
$(window).scroll( function (){

    scrolledpx = parseInt($(window).scrollTop()); 

    if(scrolledpx > 1530){
        $('.btn-scroll').addClass('active');
     } else if(scrolledpx < 1531){
      $('.btn-scroll').removeClass('active');
     }

    if(scrolledpx > 230){
        $('.b-header-top').addClass('active');
     } else if(scrolledpx < 231){
      $('.b-header-top').removeClass('active');
     }

  });


 




});


