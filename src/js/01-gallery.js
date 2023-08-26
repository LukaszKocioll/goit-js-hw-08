import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.querySelector('.gallery');

  function createGalleryItem(item) {
    return `
      <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}" />
        </a>
      </div>
    `;
  }

  const galleryHtml = galleryItems.map(item => createGalleryItem(item)).join('');
  galleryContainer.innerHTML = galleryHtml;

  // Initialize SimpleLightbox after the images have been added to the DOM
  const lightbox = new SimpleLightbox('.gallery a', {
    elements: galleryItems.map(item => ({
      src: item.original,
      description: item.description
    }))
  });
});
