import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const createGalleryCardsMarkup = galleryItemsArray =>
  galleryItemsArray
    .map(
      ({ preview, original, description }) => `
    <li>
      <a class="gallery__item" href="${original}">
          <img class="gallery__image"
          src="${preview}"
          alt="${description}" />
      </a>
    </li>`
    )
    .join('');

galleryEl.innerHTML = createGalleryCardsMarkup(galleryItems);

new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
