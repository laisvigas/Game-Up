
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