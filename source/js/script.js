function myMobileMenu() {
  var x = document.getElementById("idMobileMenu");
  var y = document.getElementById("idIconMenu");

  y.classList.remove("main-nav__imageThreeLines");
  y.classList.remove("main-nav__imageCross");

  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.background = "green";
    y.classList.add("main-nav__imageThreeLines");
  } else {
    x.style.display = "block";
    y.style.background = "red";
    y.classList.add("main-nav__imageCross");
  }
}
