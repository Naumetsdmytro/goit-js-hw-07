import { galleryItems } from "./gallery-items.js";
// Change code below this line
const divGalleryEl = document.querySelector(".gallery");

const galleryRow = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

divGalleryEl.innerHTML = galleryRow;

divGalleryEl.addEventListener("click", onOpenModal);

function onOpenModal(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const orgImg = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${orgImg}">
`);

  instance.show();
}
