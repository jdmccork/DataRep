function dropNav() {
  document.getElementById("navigation").classList.toggle("show");
  document.getElementById("navBtn").classList.toggle("changeColor");
}

window.onclick = function(event) {
  if (!event.target.matches('.navDrop')) {
    var dropdowns = document.getElementsByClassName("navLinks");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.querySelector("button.navDrop").style.backgroundColor = 'grey'
      }
    }
  }
}
