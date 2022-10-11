export const getGalleryCardsMarkup = galleryItemsArray => {
  return galleryItemsArray
    .map(({ preview, original, description }) => {
      return `
    <li>
      <a class="gallery__item" href="${original}">
          <img class="gallery__image"
          src="${preview}"
          alt="${description}" />
      </a>
    </li>`;
    })
    .join('');
};
