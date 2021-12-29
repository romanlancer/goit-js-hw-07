import { galleryItems } from './gallery-items.js'
// Change code below this line

console.log(galleryItems)
const instance = basicLightbox.create(`
    <video controls>
        <source src="assets/videos/video.mp4" type="video/mp4">
    </video>
`)

instance.show()
