import { galleryItems } from './gallery-items.js';

const instance = basicLightbox.create(`
        <img src="">
    `);

const instanceImg = instance.element().querySelector('img');
const galleryEl = document.querySelector('.gallery');

const gallery = galleryItems.map(galleryItem => createGalatyItem(galleryItem));

galleryEl.append(...gallery);

galleryEl.addEventListener('click', showModal)

function showModal(e) {
    e.preventDefault(); 

    if (e.target.classList.value !== 'gallery__image') return;
    
    instanceImg.src = e.target.dataset.source;

    window.addEventListener('keydown', onEscPres)

    instance.show();
 }

function onEscPres(e) {
    if (e.code !== 'Escape') return;

    window.removeEventListener('keydown', onEscPres);
    instance.close();    
    return;
}

function createGalatyItem({preview, original, description}) {
    const item = document.createElement('div');
    item.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = original;
    
    const img = document.createElement('img');
    img.src = preview;
    img.alt = description;
    img.classList.add('gallery__image');
    img.dataset.source = original;

    link.append(img);
    item.append(link);

    return item;
}

console.log(galleryItems);