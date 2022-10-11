// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getGalleryCardsMarkup } from './gallery-cards/GalleryCardsMarkup';

// import getGalleryCardsMarkup from 'gallery-cards/GalleryCardsMarkup.js';

const galleryEl = document.querySelector('.gallery');
// const galleryCardsMarkup = getGalleryCardsMarkup(galleryItems);

const galleryCardsMarkup = getGalleryCardsMarkup(galleryItems);
const imgEL = document.querySelector('img');

galleryEl.innerHTML = galleryCardsMarkup;

const fullImage = new SimpleLightbox('.gallery .gallery__item', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
