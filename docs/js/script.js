let x = document.getElementById("snackbar");
window.onscroll = () => {
  window.pageYOffset > 220 ? (x.className = "show") : (x.className = x.className.replace("show", ""));
};

window.pageYOffset > 220 ? (x.className = "show") : (x.className = x.className.replace("show", ""));
