// Toggle sections
const sectionButtons = document.querySelectorAll('.glow-button');
sectionButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.section-block').forEach(section => section.classList.add('hidden'));
    const target = button.getAttribute('data-target');
    document.getElementById(target).classList.remove('hidden');
  });
});

// Toggle subsections
const subButtons = document.querySelectorAll('.sub-glow-button');
subButtons.forEach(button => {
  button.addEventListener('click', () => {
    const parentSection = button.closest('.section-block');
    parentSection.querySelectorAll('.subsection').forEach(sub => sub.classList.add('hidden'));
    const subId = button.getAttribute('data-sub');
    const subElement = parentSection.querySelector(`#${CSS.escape(subId)}`);
    subElement.classList.remove('hidden');
    loadImages(subId, subElement.querySelector('.grid'));
  });
});

// Load image counts
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    document.querySelectorAll('.count').forEach(span => {
      const section = span.getAttribute('data-section');
      const sub = span.getAttribute('data-sub');
      span.textContent = data?.[section]?.[sub] || 0;
    });
  });

// Load images
function loadImages(subsection, container) {
  container.innerHTML = '';
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      const count = data?.[Object.keys(data).find(sec => data[sec][subsection])]?.[subsection] || 0;
      for (let i = 1; i <= count; i++) {
        const img = document.createElement('img');
        img.src = `images/${subsection}/${i}.jpg`;
        img.alt = subsection;
        img.className = 'gallery-img';
        img.addEventListener('click', () => openFullscreen(img.src));
        container.appendChild(img);
      }
    });
}

// Fullscreen view
const fullscreen = document.getElementById('fullscreen-view');
const focusedImg = document.getElementById('focused-img');
document.getElementById('close-view').addEventListener('click', () => {
  fullscreen.classList.add('hidden');
  focusedImg.src = '';
  document.body.style.overflow = 'auto';
});

function openFullscreen(src) {
  focusedImg.src = src;
  fullscreen.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

fullscreen.addEventListener('click', (e) => {
  if (e.target.id === 'fullscreen-view') {
    fullscreen.classList.add('hidden');
    focusedImg.src = '';
    document.body.style.overflow = 'auto';
  }
});
