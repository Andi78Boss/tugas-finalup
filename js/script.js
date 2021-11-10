// landing element

$(window).on("scroll", function () {
  var win = $(this).scrollTop();

  if (win > 470) {
    $(".habout, .garis").addClass("tampil");
  } else {
    $(".habout, .garis").removeClass("tampil");
  }

  if (win > 533) {
    $(".about .row img").addClass("tampil");
  } else {
    $(".about .row img").removeClass("tampil");
  }

  if (win > 690) {
    $(".about .row p").addClass("tampil");
  } else {
    $(".about .row p").removeClass("tampil");
  }

  if (win > 1000) {
    $(".team .col-sm-12").addClass("tampil");
  } else {
    $(".team .col-sm-12").removeClass("tampil");
  }

  if (win > 1200) {
    $(".team .col-sm-2").addClass("tampil");
  } else {
    $(".team .col-sm-2").removeClass("tampil");
  }

  if (win > 1300) {
    $(".team .col-sm-2 .dua").addClass("tampil");
  } else {
    $(".team .col-sm-2 .dua").removeClass("tampil");
  }
});

// navbar

$(".scroll").on("click", function () {
  var ace = $(this).attr("href");
  var elemenTujuan = $(ace);

  $("html, body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    800
  );
});

// jumbotron

$(window).on("load", function () {
  $(".img-circle").addClass("ada");
  $(".h1, .tagline").addClass("tampil");
});
