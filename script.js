$(function () {
  // var cursor = $(".cursor"),
  //   cWidth = 20, //カーソルの大きさ
  //   mouseX = 0, //マウスのX座標
  //   mouseY = 0; //マウスのY座標

  // $(document).on("mousemove", function (e) {
  //   mouseX = e.pageX;
  //   mouseY = e.pageY;
  //   cursor.css({
  //     //カーソルの真ん中に座標軸が来るよう、
  //     //カーソルの大きさの半分を引きます
  //     left: mouseX - cWidth / 2,
  //     top: mouseY - cWidth / 2,
  //   });
  // });

  var cursor = $(".cursor"),
    follower = $(".follower"),
    cWidth = 8, //カーソルの大きさ
    fWidth = 40, //フォロワーの大きさ
    delay = 8, //数字を大きくするとフォロワーがより遅れて来る
    mouseX = 0, //マウスのX座標
    mouseY = 0, //マウスのY座標
    posX = 0, //フォロワーのX座標
    posY = 0; //フォロワーのX座標

  //カーソルの遅延アニメーション
  //ほんの少ーーーしだけ遅延させる 0.001秒
  TweenMax.to({}, 0.001, {
    repeat: -1,
    onRepeat: function () {
      posX += (mouseX - posX) / delay;
      posY += (mouseY - posY) / delay;

      TweenMax.set(follower, {
        css: {
          left: posX - fWidth / 2,
          top: posY - fWidth / 2,
        },
      });

      TweenMax.set(cursor, {
        css: {
          left: mouseX - cWidth / 2,
          top: mouseY - cWidth / 2,
        },
      });
    },
  });

  //マウス座標を取得
  $(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  $("a, .btn").on({
    mouseenter: function () {
      cursor.addClass("is-active");
      follower.addClass("is-active");
    },
    mouseleave: function () {
      cursor.removeClass("is-active");
      follower.removeClass("is-active");
    },
  });

  $(".top__btn").click(function () {
    $(".layer__1.layer__first").addClass("layer__1_in");
    $(".layer__2.layer__first").addClass("layer__2_in");
    setTimeout(function () {
      $(".top").hide();
      $(".cat").show().css("display", "flex");
    }, 500);
  });

  $(".cat__skills").click(function () {
    $(".layer__1.layer__skills").addClass("layer__1_in");
    $(".layer__2.layer__skills").addClass("layer__2_in");
    setTimeout(function () {
      $(".cat").hide();
      $(".skills").show().css("display", "flex");
    }, 500);
    setTimeout(function () {
      $(".layer__1.layer__skills").removeClass("layer__1_in");
      $(".layer__2.layer__skills").removeClass("layer__2_in");
    }, 2000);
  });
  $(".cat__works").click(function () {
    $(".layer__1.layer__works").addClass("layer__1_in");
    $(".layer__2.layer__works").addClass("layer__2_in");
    setTimeout(function () {
      $(".cat").hide();
      $(".works").show().css("display", "flex");
    }, 500);
    setTimeout(function () {
      $(".layer__1.layer__works").removeClass("layer__1_in");
      $(".layer__2.layer__works").removeClass("layer__2_in");
    }, 2000);
  });
  $(".cat__about").click(function () {
    $(".layer__1.layer__about").addClass("layer__1_in");
    $(".layer__2.layer__about").addClass("layer__2_in");
    setTimeout(function () {
      $(".cat").hide();
      $(".about").show();
    }, 500);
    setTimeout(function () {
      $(".layer__1.layer__about").removeClass("layer__1_in");
      $(".layer__2.layer__about").removeClass("layer__2_in");
    }, 2000);
  });
  $(".cat__contact").click(function () {
    $(".layer__1.layer__contact").addClass("layer__1_in");
    $(".layer__2.layer__contact").addClass("layer__2_in");
    setTimeout(function () {
      $(".cat").hide();
      $(".contact").show().css("display", "flex");
    }, 500);
    setTimeout(function () {
      $(".layer__1.layer__contact").removeClass("layer__1_in");
      $(".layer__2.layer__contact").removeClass("layer__2_in");
    }, 2000);
  });

  $(".skills__close").click(function () {
    $(".layer__1.layer__skills").addClass("layer__1_in");
    $(".layer__2.layer__skills").addClass("layer__2_in");
    setTimeout(function () {
      $(".cat-wrapper").hide();
      $(".cat").show().css("display", "flex");
    }, 500);
    setTimeout(function () {
      $(".layer__1.layer__skills").removeClass("layer__1_in");
      $(".layer__2.layer__skills").removeClass("layer__2_in");
    }, 2000);
  });
  $(".works__close").click(function () {
    $(".layer__1.layer__works").addClass("layer__1_in");
    $(".layer__2.layer__works").addClass("layer__2_in");
    setTimeout(function () {
      $(".cat-wrapper").hide();
      $(".cat").show().css("display", "flex");
    }, 500);
    setTimeout(function () {
      $(".layer__1.layer__works").removeClass("layer__1_in");
      $(".layer__2.layer__works").removeClass("layer__2_in");
    }, 2000);
  });
  $(".about__close").click(function () {
    $(".layer__1.layer__about").addClass("layer__1_in");
    $(".layer__2.layer__about").addClass("layer__2_in");
    setTimeout(function () {
      $(".cat-wrapper").hide();
      $(".cat").show().css("display", "flex");
    }, 500);
    setTimeout(function () {
      $(".layer__1.layer__about").removeClass("layer__1_in");
      $(".layer__2.layer__about").removeClass("layer__2_in");
    }, 2000);
  });
  $(".contact__close").click(function () {
    $(".layer__1.layer__contact").addClass("layer__1_in");
    $(".layer__2.layer__contact").addClass("layer__2_in");
    setTimeout(function () {
      $(".cat-wrapper").hide();
      $(".cat").show().css("display", "flex");
    }, 500);
    setTimeout(function () {
      $(".layer__1.layer__contact").removeClass("layer__1_in");
      $(".layer__2.layer__contact").removeClass("layer__2_in");
    }, 2000);
  });

  let active = $(".active");

  active.prev("li").addClass("active-prev");
  active.next("li").addClass("active-next");
  $(".works__prev-btn").hide();

  const btnExsistCheck = () => {
    if ($(".active-prev").length) {
      $(".works__prev-btn").show();
    } else {
      $(".works__prev-btn").hide();
    }

    if ($(".active-next").length) {
      $(".works__next-btn").show();
    } else {
      $(".works__next-btn").hide();
    }
  };
  btnExsistCheck();


  const prevSlideAnimation = () => {
    $(".works__prev-btn").click(function () {
      $(".active-next").removeClass("active-next");
      $(".active").addClass("active-next");
      $(".active").removeClass("active");
      $(".active-prev").addClass("active");
      $(".active-prev").removeClass("active-prev");
      $(".active").prev("li").addClass("active-prev");

      btnExsistCheck();
    });
  };
  prevSlideAnimation();

  const nextSlideAnimation = () => {
    $(".works__next-btn").click(function () {
      $(".active-prev").removeClass("active-prev");
      $(".active").addClass("active-prev");
      $(".active").removeClass("active");
      $(".active-next").addClass("active");
      $(".active-next").removeClass("active-next");
      $(".active").next("li").addClass("active-next");
      btnExsistCheck();
    });
  };
  nextSlideAnimation();

  $(".about__back-icon").click(function () {
    $(".about").animate({ scrollTop: 0 }, 500);
    $(".about__main").animate({ scrollTop: 0 }, 500);
  });

  const topSec = $(".main__top-section");
  const secondSec = $(".main__second-section");
  const thirdSec = $(".main__third-section");
  const about = $(".about");
  const aboutMain = $(".about__main");
  const win = $(window);

  about.scroll(function () {
    if (about.scrollTop() > 200) {
      $(".about__back-icon").fadeIn();
    } else {
      $(".about__back-icon").fadeOut();
    }
  });

  const topScrollAnimation = () => {
    const triggerMargin = 200;
    about.scroll(function () {
      if (window.innerHeight >= topSec.offset().top + triggerMargin) {
        topSec.addClass("show");
      } else {
        topSec.removeClass("show");
      }
    });
  };
  topScrollAnimation();

  const slideInAnimation = (slideIn) => {
    aboutMain.scroll(function () {
      current =
        (1 - (slideIn.offset().top - win.scrollTop()) / win.height()) * 2 * 100;
      if (current > 99.9) {
        current = 100;
      }
      if (win.scrollTop() > slideIn.offset().top - win.height()) {
        slideIn.css({ width: current + "%" });
      }
    });
  };
  slideInAnimation(secondSec);
  slideInAnimation(thirdSec);

  const addOverflow = () => {
    about.scroll(function () {
      if (aboutMain.offset().top == 0) {
        aboutMain.css("overflow", "scroll");
      } else {
        aboutMain.css("overflow", "hidden");
      }
    });
  };
  addOverflow();
});
