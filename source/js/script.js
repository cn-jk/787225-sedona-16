function myMobileMenu() {
  var x = document.getElementById("idMobileMenu");
  var y = document.getElementById("idIconMenu");

  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.background = "green";
  } else {
    x.style.display = "block";
    y.style.background = "red";
  }
}
