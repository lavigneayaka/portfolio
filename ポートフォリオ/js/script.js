// PhotoSwipe
initPhotoSwipeFromDOM(".js-my-gallery");

$(function () {

  //iOS対策
  //iOSでは疑似要素を含むaタグのリンクは２回タップしないと遷移とページ内スクロールをしないため、
  //ユーザーエージェント判定でiOSの場合はbodyタグにiosを付与し、対象の疑似要素をdisplay: noneする
  var ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) {
    $("body").addClass("ios");
  }

  //Worksのリンクを有効化
  //スライド（Swiper）内に記載のリンクを有効にするため下記の記述が必要 (;´･ω･)ｳｰﾝ･･･
  $(".works-url").on("click", "a", function (e) {
    e.stopPropagation();
  });

  //ページ内スクロール
  var $nav = $(".gnav");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});

// ハンバーガーメニュー
$ (function (){
  
  $(".btn-gnavi").on("click", function() {
    let leftVal = 0;
    if($(this).hasClass("open")) {
      leftVal = -300;
      $(this).removeClass("open");
      $("#wrapper").removeClass("open");
    } else {
      $(this).addClass("open");
      $("#wrapper").addClass("open");
    }

    $("#global-navi").stop().animate({
      left: leftVal
    }, 200);
  });

  let $mask  = $('#mask');
  $mask.on('click', function() {
    let leftVal = 0;
    if($(".btn-gnavi").hasClass("open")) {
      leftVal = -300;
      $(".btn-gnavi").removeClass("open");
      $("#wrapper").removeClass("open");
    } else {
      $(".btn-gnavi").addClass("open");
      $("#wrapper").addClass("open");
    }
   
    $("#global-navi").stop().animate({
      left: leftVal
    }, 200);
  });
    
});
// service-section fadein
$(function(){
  $('.scrollanime').css("opacity","0");
  $(window).scroll(function (){
    $(".scrollanime").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight -160 ){
        $(this).addClass("fadeIn");
        $(this).css("opacity", "1");
      } 
      else {
        $(this).removeClass("fadeIn");
      }
    });
  });
});

$(window).on('load', function(){
  $('#load').fadeOut(4000);
});

//video 白黒からカラーへ戻す
$(window).on('scroll', function(){
  var scroll = $(window).scrollTop();
  if(scroll >= 100){
  $('video.gray').addClass('is-colored');
  }else{
  $('video.gray').removeClass('is-colored'); 
  }
});
