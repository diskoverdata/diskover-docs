document.addEventListener("DOMContentLoaded", function() {
  var elements = document.getElementsByClassName("md-sidebar md-sidebar--secondary");
  elements[0].classList.remove("md-sidebar--secondary");
  elements[0].classList.add("md-sidebar--primary");
});
