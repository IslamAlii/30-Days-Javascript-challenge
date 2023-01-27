"use strict";
const btnsShowModal = document.querySelectorAll(".show-modal"),
  btnsCloseModal = document.querySelectorAll(".close-modal"),
  modal = document.querySelectorAll(".modal"),
  overlay = document.querySelector(".overlay");

btnsShowModal.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    document.querySelector(".overlay").classList.remove("hidden");
    modal[index].classList.remove("hidden");
  });
});

btnsCloseModal.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    closeModal(index);
  });
});

overlay.addEventListener("click", () => {
  closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

function closeModal(index = undefined) {
  overlay.classList.add("hidden");
  index === undefined
    ? modal.forEach((modal) => {
        modal.classList.add("hidden");
      })
    : modal[index].classList.add("hidden");
}
