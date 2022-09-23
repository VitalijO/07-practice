import { galleryItems } from './gallery-items.js';

// Change code below this line

// console.log(galleryItems);

const galleryEls = document.querySelector('.gallery');
const markupGaleryEls = createMarkupGalleryEls(galleryItems) 
galleryEls.insertAdjacentHTML('beforeend', markupGaleryEls)

function createMarkupGalleryEls(elements) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    })
    .join('');
}

galleryEls.addEventListener('click', onGalleryEls)

function onGalleryEls(e) {
    if (!e.target.classList.contains('gallery__image')) {
        return
    }
        
    console.log(e.target.dataset.preview)
}