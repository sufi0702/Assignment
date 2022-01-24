$(document).ready(function () {
  $(window).resize(function () {
    var width = $(window).width();
    if (width >= 769) {
      $("button").click(function () {
        var tabId = "#" + $(this).attr("title");
        $("button").removeClass("active");
        $(".tab-content").hide();
        $(tabId).show();
        $(this).addClass("active");
      });
    } else {
      $(".tab-content").slideUp(1000);
      $("button").removeClass("active").css({
        display: "flex",
        "flex-Direction": "row",
        width: "100%",
      });
    }
  });
});
