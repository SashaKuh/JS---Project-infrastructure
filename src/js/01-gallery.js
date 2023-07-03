//Import
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

//Code
console.log(galleryItems);

console.log(SimpleLightbox);
const gallery = document.querySelector('.gallery');

function createGalleryMarkup(item) {
    return item.map(({ preview, original, description }) => 
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
   </a>
</li>`).join('');  
}
gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));


 new SimpleLightbox('.gallery a', { captionDelay: 250 });
