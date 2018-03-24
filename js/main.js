$(".bigBox").mouseenter(function() {
  $(".flyBox2").css("visibility", "visible")
});

$(".smallBox").mouseenter(function() {
  $(".flyBox1").css("visibility", "visible")
});

$(".bigBox").mouseenter(function() {
  $(".flyBox2").animate({
    left: "10%",bottom: "40%",
  }, 500);
})

$(".smallBox").mouseenter(function() {
  $(".flyBox2").animate({
    left: "8%",bottom: "40%",
  }, 500);
})