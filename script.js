const sections = [
  "Anastasia Bezrukova", "Barbra Palvin", "Bugatti Chiron", "Dead By Daylight",
  "Elina Karimova", "Genshin Impact", "Koeniesegg Jesko", "Kristina Pimenova",
  "McKenna Grace", "Pubg Mobile", "Venono Roadster", "Wuthering Waves"
];

const container = document.querySelector(".gallery-container");

sections.sort().forEach(section => {
  const sectionDiv = document.createElement("div");
  sectionDiv.className = "section";

  const title = document.createElement("div");
  title.className = "section-title";
  title.textContent = section;
  sectionDiv.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "image-grid";

  for (let i = 1; i <= 20; i++) {
    const imgPath = `images/${section}/${i}.jpg`;
    const card = document.createElement("div");
    card.className = "image-card";

    const img = document.createElement("img");
    img.src = imgPath;
    img.alt = `${section} ${i}`;

    card.appendChild(img);
    grid.appendChild(card);
  }

  sectionDiv.appendChild(grid);
  container.appendChild(sectionDiv);
});
