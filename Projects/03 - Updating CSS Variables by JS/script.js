const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("change", handleUpdate);
  input.addEventListener("mousemove", handleUpdate);
});

function handleUpdate() {
  const suffex = this.dataset.sizing || "";
  const inputName = this.name;
  document.documentElement.style.setProperty(
    `--${inputName}`,
    this.value + suffex
  );
}
