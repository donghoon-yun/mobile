$(document).ready(function(){
  /* 닫기 */
$(".trigger").click(function(){
  $(".gnb_list").stop(true,true).animate({left:0});
  $(".back").stop(true,true).fadeIn();
});
/* 메뉴 */
$(".gnb_list .close").click(function(){
  $(".gnb_list").stop(true,true).animate({left:"-60%"});
  $(".back").stop(true,true).fadeOut();
});

$(".gnb_list a").hover(function(){
  $(".back").animate({left:"60%"});
  $(".back_menu1").css({display:"block"});
},function(){
  $(".back_menu1").css({display:"none"});
});

$(".gnb_list li:nth-child(2)").hover(function(){
  $(".sub1").stop().slideDown();
  $(".aicon2").css({display:"none"});
  $(".aicon1").css({display:"block"});
},function(){
  $(".sub1").stop().slideUp();
  $(".aicon1").css({display:"none"});
  $(".aicon2").css({display:"block"});
});
$(".gnb_list li:nth-child(6)").hover(function(){
  $(".sub2").stop().slideDown();
  $(".aicon2").css({display:"none"});
  $(".aicon1").css({display:"block"});
},function(){
  $(".sub2").stop().slideUp();
  $(".aicon1").css({display:"none"});
  $(".aicon2").css({display:"block"});
});

/* ________________________________________flowerprop 소품  */

  $(".header_name li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".tab_contents div").removeClass("active");
    $(`#${result}`).addClass("active");
  
  });

  /* _____________________________________pest */
  
  
  
  $(".pestheader_name li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".pest_contents div").removeClass("active");
    $(`#${result}`).addClass("active");
  
  });


/* ___________________________planteria */
$(".thumbs1 a").click(function(){
  let img1 = $(this).attr("href");
  $(".largeImg1>img").attr({"src":img1}).hide().fadeIn();
  return false;
});
$(".thumbs2 a").click(function(){
  let img2 = $(this).attr("href");
  $(".largeImg2>img").attr({"src":img2}).hide().fadeIn();
  return false;
});
$(".thumbs3 a").click(function(){
  let img3 = $(this).attr("href");
  $(".largeImg3>img").attr({"src":img3}).hide().fadeIn();
  return false;
});
$(".thumbs4 a").click(function(){
  let img4 = $(this).attr("href");
  $(".largeImg4>img").attr({"src":img4}).hide().fadeIn();
  return false;
});
$(".thumbs5 a").click(function(){
  let img5 = $(this).attr("href");
  $(".largeImg5>img").attr({"src":img5}).hide().fadeIn();
  return false;
});
$(".thumbs6 a").click(function(){
  let img6 = $(this).attr("href");
  $(".largeImg6>img").attr({"src":img6}).hide().fadeIn();
  return false;
});
$(".thumbs7 a").click(function(){
  let img7 = $(this).attr("href");
  $(".largeImg7>img").attr({"src":img7}).hide().fadeIn();
  return false;
});

/* ________________________________________________mypage */
$(".profile ul li:nth-child(1)").click(function(){
  $(".profile ul li:nth-child(2)").stop().slideToggle();
});


/* _____________________________________________plant */
$(".tab_plant li").click(function() {

  $(this).siblings().removeClass("active"); 
  $(this).addClass("active");
  
  let result = $(this).attr("data-alt");
  $(".tab-contents div").removeClass("active");
  $(`#${result}`).addClass("active");

});

/* _____________________terre_inner */
  $(".img_slide").click(function(){
    $(".slide_img").fadeToggle();
    $(this).css({display:"none"});
    $(".img_slide2").css({display:"block"});
  });
  $(".img_slide2").click(function(){
    $(".slide_img").fadeToggle();
    $(this).css({display:"none"});
    $(".img_slide").css({display:"block"});
  });

  /* ___________________________________footer */
  $(".footerRight p:first-child").click(function(){
    $(".footerRight p:nth-child(2)").stop().slideToggle();
  });

  
});