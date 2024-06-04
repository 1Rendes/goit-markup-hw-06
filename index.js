const data = [
  ".backdrop",
  ".mob-close-button",
  ".close-button",
  ".close-butt-icon", //тут є питання. Кнопка закриття складно відслідковується, тому що event.target інколи випадає саме на іконку хрестика. Тому довелося додавати всі стилі, які включає кнопка закриття.
  ".close-butt-use",
];
const orderButton = document.querySelector("[data-open-form]");
const menuButton = document.querySelector("[data-open-mobile]");
const closers = document.querySelectorAll(data);

document.addEventListener("click", closeHandler);
menuButton.addEventListener("click", () => closers[0].classList.add("is-open"));
orderButton.addEventListener("click", () =>
  closers[4].classList.add("is-open")
);
function closeHandler(event) {
  const element = event.target.classList[0];
  if (data.includes("." + element)) {
    closers.forEach((element) => {
      if (element.classList.contains("is-open")) {
        element.classList.remove("is-open");
      }
    });
  }
}
// const orderButton = document.querySelector(".order-button");
// const backdrop = document.querySelector(".backdrop");
// const closeButton = document.querySelector(".close-button");
// const mobMenuRef = document.querySelector(".mob-menu-ref");
// const backdropMob = document.querySelector(".backdrop-mob");
// const mobCloseButton = document.querySelector(".mob-close-button");

// backdrop.addEventListener("click", () => {
//   backdrop.classList.remove("is-open");
// });
// orderButton.addEventListener("click", () => {
//   backdrop.classList.add("is-open");
// });
// closeButton.addEventListener("click", () => {
//   backdrop.classList.remove("is-open");
// });
// mobMenuRef.addEventListener("click", () => {
//   backdropMob.classList.add("is-open");
// });
// backdropMob.addEventListener("click", () => {
//   backdropMob.classList.remove("is-open");
// });
// mobCloseButton.addEventListener("click", () => {
//   backdropMob.classList.remove("is-open");
// });
