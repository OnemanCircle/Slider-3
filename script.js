document.addEventListener("DOMContentLoaded", () => {
  const mainButtons = document.querySelectorAll(".main-button");
  const subsectionContainer = document.getElementById("subsection-buttons");
  const galleryContainer = document.getElementById("gallery");

  const structure = {
    Cars: ["Bugatti Chiron", "Koenigsegg Jesko", "Veneno Roadster"],
    Games: ["Arknights", "Dead By Daylight", "Genshin Impact", "Pubg Mobile", "Wuthering Waves"],
    Girls: ["Anastasia Bezrukova", "Barbra Palvin", "Elina Karimova", "Kristina Pimenova", "McKenna Grace"]
  };

  mainButtons.forEach(button => {
    button.addEventListener("click", () => {
      const section = button.getAttribute("data-section");
      subsectionContainer.innerHTML = "";

      structure[section].forEach(sub => {
        const subBtn = document.createElement("button");
        subBtn.textContent = sub;
        subBtn.classList.add("subsection-button");
        subBtn.addEventListener("click", () => showGallery(section, sub));
        subsectionContainer.appendChild(subBtn);
      });

      galleryContainer.innerHTML = "";
    });
  });

  function showGallery(section, subsection) {
    galleryContainer.innerHTML = "";

    for (let i = 1; i <= 100; i++) {
      const img = document.createElement("img");
      img.src = `images/${section}/${subsection}/${i}.jpg`;
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
