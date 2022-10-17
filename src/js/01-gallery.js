// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import galleryItemTpl from './templates/01-gallery-cards-markup.hbs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const galleryCardsMarkup = getGalleryCardsMarkup(galleryItems);

galleryEl.innerHTML = galleryCardsMarkup;

function getGalleryCardsMarkup(galleryItems) {
  return galleryItems.map(galleryItemTpl).join('');
}

const fullImage = new SimpleLightbox('.gallery .gallery__link', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
