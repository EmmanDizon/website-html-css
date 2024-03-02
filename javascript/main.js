const cpllapsibles = document.querySelectorAll(".collapsible");
cpllapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  });
});
