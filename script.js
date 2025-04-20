document.addEventListener("DOMContentLoaded", async () => {
  const mainButtons = document.querySelectorAll(".main-button");
  const subsectionContainer = document.getElementById("subsection-buttons");
  const galleryContainer = document.getElementById("gallery");

  // Structure with section names and their subsections
  const structure = {
    Cars: ["Bugatti Chiron", "Koenigsegg Jesko", "Veneno Roadster"],
    Games: ["Arknights", "Dead By Daylight", "Genshin Impact", "Pubg Mobile", "Wuthering Waves"],
    Girls: ["Anastasia Bezrukova", "Barbra Palvin", "Elina Karimova", "Kristina Pimenova", "McKenna Grace"]
  };

  let imageCounts = {};

  // Load image count from data.json
  try {
    const response = await fetch("data.json");
    imageCounts = await response.json();
    console.log("Loaded data:", imageCounts);  // Check if the data is loaded correctly
  } catch (e) {
    console.error("Failed to load image count data:", e);
  }

  // Event listeners for each main button (Cars, Games, Girls)
  mainButtons.forEach(button => {
    button.addEventListener("click", () => {
      const section = button.getAttribute("data-section");
      subsectionContainer.innerHTML = "";

      // Generate subsection buttons based on image count
      structure[section].forEach(sub => {
        const count = imageCounts[section]?.[sub] || 0;
        const subBtn = document.createElement("button");
        subBtn.textContent = `${sub} (${count})`;
        subBtn.classList.add("subsection-button");
        subBtn.addEventListener("click", () => showGallery(section, sub));
        subsectionContainer.appendChild(subBtn);
      });

      galleryContainer.innerHTML = ""; // Clear gallery when changing sections
    });
  });

  // Function to display images in the gallery for each subsection
  function showGallery(section, subsection) {
    galleryContainer.innerHTML = "";
    const count = imageCounts[section]?.[subsection] || 0;

    for (let i = 1; i <= count; i++) {
      const img = document.createElement("img");
      const path = `images/${encodeURIComponent(section)}/${encodeURIComponent(subsection)}/${i}.jpg`;
      img.src = path;
      img.alt = `${subsection} ${i}`;
      img.classList.add("gallery-image");

      img.onerror = () => img.remove(); // Remove image if it fails to load

      // On click, open image in fullscreen
      img.addEventListener("click", () => openFullscreen(img.src));
      galleryContainer.appendChild(img);
    }
  }

  // Function to open image in fullscreen view
  function openFullscreen(src) {
    const overlay = document.createElement("div");
    overlay.classList.add("fullscreen-overlay");

    const fullImg = document.createElement("img");
    fullImg.src = src;
    fullImg.classList.add("fullscreen-img");

    overlay.appendChild(fullImg);
    document.body.appendChild(overlay);

    // Close overlay when clicked
    overlay.addEventListener("click", () => overlay.remove());
  }
});
