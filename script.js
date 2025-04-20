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

  // Generate image gallery dynamically for the subsection
  const images = [];
  for (let i = 1; i <= 100; i++) {
    images.push(`${i}.jpg`);
  }

  // Set gallery images based on subsection
  const galleryHTML = images.map(img => {
    return `<img src="images/${subsection}/${img}" alt="${subsection} ${img}" class="gallery-image">`;
  }).join('');

  document.getElementById('gallery-images').innerHTML = galleryHTML;
}

function closeModal() {
  document.getElementById('gallery-modal').style.display = 'none';
}
