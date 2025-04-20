function openSection(section) {
  // Hide all sections
  document.querySelectorAll('.gallery').forEach((el) => {
    el.style.display = 'none';
  });

  // Show the selected section
  document.getElementById(`${section}-gallery`).style.display = 'block';
}

function openSubsection(subsection) {
  // Open the gallery modal
  document.getElementById('gallery-modal').style.display = 'flex';

  // Set gallery images based on subsection
  const galleryImages = {
    bugatti: ['1.jpg', '2.jpg', '3.jpg'],
    koenigsegg: ['1.jpg', '2.jpg', '3.jpg'],
    veneno: ['1.jpg', '2.jpg', '3.jpg'],
    arknights: ['1.jpg', '2.jpg', '3.jpg'],
    deadbydaylight: ['1.jpg', '2.jpg', '3.jpg'],
    genshin: ['1.jpg', '2.jpg', '3.jpg'],
    pubg: ['1.jpg', '2.jpg', '3.jpg'],
    wuthering: ['1.jpg', '2.jpg', '3.jpg'],
    anastasia: ['1.jpg', '2.jpg', '3.jpg'],
    barbra: ['1.jpg', '2.jpg', '3.jpg'],
    elina: ['1.jpg', '2.jpg', '3.jpg'],
    kristina: ['1.jpg', '2.jpg', '3.jpg'],
    mckenna: ['1.jpg', '2.jpg', '3.jpg']
  };

  const images = galleryImages[subsection];

  let galleryHTML = '';
  images.forEach(img => {
    galleryHTML += `<img src="images/${subsection}/${img}" alt="${subsection}">`;
  });

  document.getElementById('gallery-images').innerHTML = galleryHTML;
}

function closeModal() {
  document.getElementById('gallery-modal').style.display = 'none';
}
