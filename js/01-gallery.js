import { galleryItems } from './gallery-items.js'
// Change code below this line
// console.log(galleryItems)
const galleryEl = document.querySelector('.gallery')
const imageRef = document.querySelectorAll('.gallery__image')

const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems)
galleryEl.insertAdjacentHTML('beforeend', galleryCardsMarkup)

// console.log(createGalleryCardsMarkup(galleryItems))

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
        </div >
        `
    })
    .join('')
}

galleryEl.addEventListener('click', onPictureClick)

function onPictureClick(e) {
  e.preventDefault()
  if (!e.target.classList.contains('gallery__image')) {
    return
  }
  // console.log(event.target);
  // window.addEventListener('keydown', onEscBtnPress)
  // modalRef.classList.add('is-open')
  imageRef.src = e.target.dataset.source
  const instance = basicLightbox.create(`<img src="${imageRef.src}"/>`)

  instance.show()
}
