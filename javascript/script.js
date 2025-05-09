
// Efeito zoom nas bios dos instrutores

document.addEventListener('DOMContentLoaded', function() {
    const zoomEffect = document.querySelectorAll('.zoom-effect');

    zoomEffect.forEach(element => {
        element.style.transition = 'transform 0.3s ease-in-out';

        element.addEventListener('mouseover', () => {
            element.style.transform = 'scale(1.03)';
            element.style.zIndex = '10';
        });

        element.addEventListener('mouseout', () => {
            element.style.transform = 'scale(1)';
            element.style.zIndex = 'auto';
        });
    });
});


// js para ver as imagens da galeria ampliadas ao clicar nelas (utilizando tb o modal do bootstrap)

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.image-gallery-item');
    const imageModalElement = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    let imageModalInstance; // To store the Bootstrap Modal instance

    imageModalElement.addEventListener('show.bs.modal', function(event) {
        const clickedGalleryItem = event.relatedTarget; // The element that triggered the modal
        const imageSrc = clickedGalleryItem.getAttribute('data-image-src');
        modalImage.setAttribute('src', imageSrc);
    });

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image-src');
            modalImage.setAttribute('src', imageSrc);

            imageModalInstance = new bootstrap.Modal(imageModalElement);
            imageModalInstance.show();
        });
    });
});



