let x = document.getElementById("snackbar"),
  y = document.querySelector(".gdoc-nav nav"),
  minimized = false,
  heightNow = x.clientHeight;

window.onscroll = () => {
  window.pageYOffset > y.offsetHeight + 80 ? (x.className = "show") : (x.className = x.className.replace("show", ""));
};

window.onresize = () => {
  x.style.left = `${document.getElementsByClassName("gdoc-page")[0].offsetLeft}px`;
  x.style.marginLeft = `-${x.clientWidth + 30}px`;
};

window.pageYOffset > y.offsetHeight + 80 ? (x.className = "show") : (x.className = x.className.replace("show", ""));
x.style.left = `${document.getElementsByClassName("gdoc-page")[0].offsetLeft}px`;
x.style.marginLeft = `-${x.clientWidth + 30}px`;
