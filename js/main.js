/*global $ */

$(function () {
  "use strict";
  $(".sections li").click(function () {
    $(this).addClass("selected").siblings("li").removeClass("selected");
    window.console.log($(this).data("class"));
    $(".info-sections div").hide();
    $("." + $(this).data("class")).fadeIn();
  });
});
