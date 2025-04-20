document.addEventListener("DOMContentLoaded", async () => {
  const mainButtons = document.querySelectorAll(".main-button");
  const subsectionContainer = document.getElementById("subsection-buttons");
  const galleryContainer = document.getElementById("gallery");

  const structure = {
    Cars: ["Bugatti Chiron", "Koenigsegg Jesko", "Veneno Roadster"],
    Games: ["Arknights", "Dead By Daylight", "Genshin Impact", "Pubg Mobile", "Wuthering Waves"],
    Girls: ["Anastasia Bezrukova", "Barbra Palvin", "Elina Karimova", "Kristina Pimenova", "McKenna Grace"]
  };

  let imageCounts = {};

  // Load the data.json file with counts
  try {
    const response = await fetch("data.json");
    imageCounts = await response.json();
  } catch (e) {
    console.error("Failed to load data.json:", e);
  }

  mainButtons.forEach(button => {
    button.addEventListener("click", () => {
      const section = button.getAttribute("data-section");
      subsectionContainer.innerHTML = "";

      structure[section].forEach(sub => {
        const count = imageCounts[section]?.[sub] || 0;
        const subBtn = document.createElement("button");
        subBtn.textContent = `${sub} (${count})`;
        subBtn.classList.add("subsection-button");
        subBtn.addEventListener("click", () => showGallery(section, sub));
        subsectionContainer.appendChild(subBtn);
      });

      galleryContainer.innerHTML = "";
    });
  });

  function showGallery(section, subsection) {
    galleryContainer.innerHTML = "";
    const count = imageCounts[section]?.[subsection] || 0;

    for (let i = 1; i <= count; i++) {
      const img = document.createElement("img");
      const encodedSection = encodeURIComponent(section);
      const encodedSub = encodeURIComponent(subsection);
      img.src = `images/${encodedSection}/${encodedSub}/${i}.jpg`;
      img.alt = `${subsection} ${i}`;
      img.classList.add("gallery-image");

      img.onerror = () => img.remove();

      img.addEventListener("click", () => openFullscreen(img.src));
      galleryContainer.appendChild(img);
    }
  }

  function openFullscreen(src) {
    const overlay = document.createElement("div");
    overlay.classList.add("fullscreen-overlay");

    const fullImg = document.createElement("img");
    fullImg.src = src;
    fullImg.classList.add("fullscreen-img");

    overlay.appendChild(fullImg);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => overlay.remove());
  }
});
