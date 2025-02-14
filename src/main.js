import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImage } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

const refs = {
    form: document.querySelector('.form'),
    imagesContainer: document.querySelector('.images-container'),
    input: document.querySelector('.input'),
    loader: document.querySelector('.loader')
};

const lightbox = new SimpleLightbox('.gallery-link');

refs.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userValue = refs.input.value.trim();
    
    if (userValue === '') {
        iziToast.show({
            backgroundColor: 'red',
            position: 'topRight',
            message: 'The input field cannot be empty'
        });
        return;
    }

    refs.imagesContainer.innerHTML = ''; 
    refs.loader.innerHTML = 'Please wait, the images are loading...'; 

    getImage(userValue)
        .then(images => {
            if (images.length === 0) {
                iziToast.show({
                    backgroundColor: 'orange',
                    position: 'topRight',
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
                refs.imagesContainer.innerHTML = '';
                return;
            }

            refs.imagesContainer.innerHTML = createMarkup(images);
            lightbox.refresh(); 
        })
        .catch(() => {
            iziToast.show({
                backgroundColor: 'red',
                position: 'topRight',
                message: 'Failed to fetch images. Try again later!'
            });
        })
        .finally(() => {
            refs.loader.innerHTML = ""; 
        });

    e.target.reset();
});
