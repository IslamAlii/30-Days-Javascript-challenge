let checkboxes = document.querySelectorAll("input[type='checkbox']");
let lastChecked;
let checkedArray = [];

function handlecheck(e) {
  if (e.shiftKey && this.checked) {
    let inBetween = false;
    if (checkedArray.length > 0) {
      checkboxes.forEach((checkbox) => {
        if (
          checkbox === this ||
          checkbox === checkedArray[checkedArray.length - 1]
        ) {
          inBetween = !inBetween;
        }

        if (inBetween) {
          checkbox.checked = true;
        }
      });
    }
  }
  checkedArray.push(this);
}

checkboxes.forEach((item) => {
  item.addEventListener("click", handlecheck);
});
