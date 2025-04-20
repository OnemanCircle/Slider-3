// script.js - Interactivity for Image Gallery

document.addEventListener('DOMContentLoaded', () => {

  // Image Modal functionality
  const imageCards = document.querySelectorAll('.image-card');
  const modal = document.createElement('div');
  const modalImage = document.createElement('img');
  modal.classList.add('modal');
  modalImage.classList.add('modal-image');
  modal.appendChild(modalImage);
  document.body.appendChild(modal);

  imageCards.forEach(card => {
    card.addEventListener('click', () => {
      // Show modal with the clicked image
      const imageSrc = card.querySelector('img').src;
      modalImage.src = imageSrc;
      modal.style.display = 'block';
    });
  });

  // Close the modal when clicked
  modal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Image hover glow effect
  const gridImages = document.querySelectorAll('.image-card img');
  gridImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
      image.style.opacity = 0.8;
    });
    image.addEventListener('mouseleave', () => {
      image.style.opacity = 1;
    });
  });

  // Smooth Scroll effect when clicking on any anchor link
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Auto close modal when clicked outside the image
  modalImage.addEventListener('click', (e) => {
    e.stopPropagation();
  });

});
