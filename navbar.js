fetch("nav.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("shadow-lg", "bg-white/95");
    navbar.classList.remove("bg-white/90");
  } else {
    navbar.classList.remove("shadow-lg", "bg-white/95");
    navbar.classList.add("bg-white/90");
  }
});
