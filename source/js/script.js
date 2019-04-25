function myMobileMenu(iconName) {

  var x = document.getElementById("idHeader");
  var selectorName = "page-header__list";
  var keyWord = "Cross";

  x.getElementsByClassName(selectorName)[0].style.display = "block";

  if (iconName === keyWord) {
    x.getElementsByClassName(selectorName)[0].style.display = "none";
  }

  return;
}


//  For example;

//  var x = document.getElementById("idMobileMenu");
//  var y = document.getElementById("idIconMenu");

//  if (x.style.display === "block") {
//    x.style.display = "none";
//    y.style.background = "green";
//  } else {
//    x.style.display = "block";
//    y.style.background = "red";
//  }
