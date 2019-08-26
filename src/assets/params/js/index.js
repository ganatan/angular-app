$(function () {
  var navMain = $("#navbarsExampleDefault");
  navMain.on("click", "a", null, function () {
    navMain.collapse('hide');
  });
});
