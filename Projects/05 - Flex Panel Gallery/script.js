const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", toggleOpen);
});
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleOpened)
);

function toggleOpen() {
  panels.forEach((panel) => panel.classList.remove("open"));
  this.classList.add("open");
}

function toggleOpened(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("opened");
  }
}
