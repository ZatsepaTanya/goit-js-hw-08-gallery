"use strick";

import galleryItems from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
  overlay: document.querySelector("div.lightbox__content"),
  item: document.querySelector(".lightbox__image"),
  openModalWindow: document.querySelector("div.lightbox"),
  img: document.querySelector(".lightbox__image")
};

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
let imageItem = "";
galleryItems.forEach(item => {
  imageItem = `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${item.original}
  >
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</li>`;
  refs.gallery.insertAdjacentHTML("beforeend", imageItem);
});
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// refs.gallery.addEventListener("click", handeleOpenItem);
// refs.closeButton.addEventListener("click", hangeleCloseButton);
// refs.overlay.addEventListener("click", hangeleCloseOverlay);

// function handeleOpenItem(evt) {
//   evt.preventDefault();
//   const targetImage = evt.target;
//   if (targetImage === evt.currentTarget) {
//     return; // при нажатии на ul - мы выходим
//   }
//   // Открытие модального окна по клику на элементе галереи.
//   refs.openModalWindow.classList.add("is-open");
//   // Подмена значения атрибута src элемента img.lightbox__image.
//   refs.img.alt = targetImage.alt;
//   refs.img.src = targetImage.dataset.source;
//   window.addEventListener("keyup", handleEscape);
//   window.addEventListener("keyup", handleScrolling);
// }
// // Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
// function hangeleCloseButton() {
//   refs.openModalWindow.classList.remove("is-open");
//   // Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того,
//   // чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
//   refs.img.alt = "";
//   refs.img.src = "";
//   window.removeEventListener("keyup", handleEscape);
//   window.removeEventListener("keyup", handleScrolling);
// }

// // Закрытие модального окна по клику на div.lightbox__overlay.
// function hangeleCloseOverlay(evt) {
//   if (evt.target !== evt.currentTarget) {
//     return;
//   }
//   hangeleCloseButton();
// }
// // Закрытие модального окна по нажатию клавиши ESC.
// function handleEscape(evt) {
//   if (evt.keyCode !== 27) {
//     return;
//   }
//   hangeleCloseButton();
// }
// // Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
// let originItems = [];
// galleryItems.forEach(item => {
//   originItems.push(item.original);
// });

// function handleScrolling(evt) {
//   let index = originItems.indexOf(refs.item.src);

//   if (evt.keyCode === 39) {
//     if (index < originItems.length - 1) {
//       refs.item.setAttribute("src", originItems[index + 1]);
//     } else {
//       index = -1;
//       refs.item.setAttribute("src", originItems[index + 1]);
//     }
//   }

//   if (evt.keyCode === 37) {
//     if (index === 0) {
//       index = originItems.length;
//       refs.item.setAttribute("src", originItems[index - 1]);
//     } else refs.item.setAttribute("src", originItems[index - 1]);
//   }
// }
