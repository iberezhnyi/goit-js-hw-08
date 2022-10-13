// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getGalleryCardsMarkup } from './gallery-cards/01-gallery-cards-markup';

const galleryEl = document.querySelector('.gallery');
const galleryCardsMarkup = getGalleryCardsMarkup(galleryItems);

galleryEl.innerHTML = galleryCardsMarkup;

const fullImage = new SimpleLightbox('.gallery .gallery__link', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
