"use strick";

import galleryItems from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),   //preview
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),  //btn
  overlay: document.querySelector("div.lightbox__content"),
  item: document.querySelector(".lightbox__image"),   //modalImg
  openModalWindow: document.querySelector("div.lightbox"),  //modal
  img: document.querySelector(".lightbox__image")    /////modalImg
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

function previewClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
      return
  };

  let bigImg = event.target;
  // refs.openModalWindow.classList.add("is-open");
  openModal(bigImg);


  refs.openModalWindow.classList.add("is-open");
  // refs.img.alt = targetImage.alt;
  // refs.img.src = targetImage.dataset.source;
  // window.addEventListener("keyup", handleEscape);
  // window.addEventListener("keyup", handleScrolling);
}

// refs.openModalWindow.classList.add("is-open");
  // refs.img.alt = targetImage.alt;
  // refs.img.src = targetImage.dataset.source;
  // window.addEventListener("keyup", handleEscape);
  // window.addEventListener("keyup", handleScrolling);

  function hangeleCloseButton() {
  refs.openModalWindow.classList.remove("is-open");
  refs.img.alt = "";
  refs.img.src = "";
  window.removeEventListener("keyup", handleEscape);
  window.removeEventListener("keyup", handleScrolling);

  }


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

