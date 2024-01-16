function open_menu() {
  var clicked = document.getElementById("drop-menu");
  if (clicked.style.display == "block") {
    clicked.style.display = "none";
  } else {
    clicked.style.display = "block";
  }
}
