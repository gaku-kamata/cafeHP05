$(function() {
    $('a[href^="#"]').click(function() {
        // スクロールの速度
    let speed = 400; // ミリ秒で記述
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('html,body').animate({scrollTop: position}, 600, "swing");
    return false;
     });
  });