import { galleryItems } from './gallery-items.js'
// Change code below this line
// console.log(galleryItems)
const galleryEl = document.querySelector('.gallery')

const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems)
galleryEl.insertAdjacentHTML('beforeend', galleryCardsMarkup)

const imageRef = document.querySelectorAll('.gallery__image')
console.log(imageRef)

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    })
    .join('')
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionsData: imageRef.alt,
  captionPosition: 'bottom',
  captionDelay: 250,
})
