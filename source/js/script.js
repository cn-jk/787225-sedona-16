/*
 * Smotri  UROVEN-2, Lelcia-5       2019-05-12
 */
var x = document.getElementById("idHeader");

console.log(x);
x.classList.remove('page-header_nojs');
console.log(x);

//myMobileMenu('cross');

/*
 *
 * @param {type} iconName
 * @return {undefined}
 */
function myMobileMenu(icon_Name) {

  var key_Word = "cross";
  var selector_Close = 'site-list_close';
  var selector_Open = 'site-list_open';
  var selector_Menu = "site-list";


  var x = document.getElementById("idHeader");

  var y = x.getElementsByClassName(selector_Menu)[0];

  y.classList.remove('site-list_close');
  y.classList.remove('site-list_open');

  if (icon_Name === key_Word) {
    y.classList.add(selector_Close);
    return;
  }

  y.classList.add(selector_Open)
  return;
}

//  x.getElementsByClassName(selectorName)[0].style.display = "flex";

//  if (iconName === keyWord) {
//    x.getElementsByClassName(selectorName)[0].style.display = "none";
