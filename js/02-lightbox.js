import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGalleryEl = document.querySelector(".gallery");

const galleryRow = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
  })
  .join("");
listGalleryEl.innerHTML = galleryRow;

listGalleryEl.addEventListener("click", onOpenModal);

function onOpenModal(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const orgImg = evt.target.dataset.source;

  var lightbox = new SimpleLightbox(".gallery .gallery__item", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
//vmdfpmd
