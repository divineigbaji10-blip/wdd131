const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {
    nav.classList.toggle('open');
    menu.textContent = menu.textContent === '☰' ? '✕': '☰';
})
document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified};`



const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Denver Colorado",
    location: "Denver, Colorado",
    dedicated: "1986, October, 24",
    area: 29117,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/denver-colorado-temple/denver-colorado-temple-42455-main.jpg"
  },
  {
    templeName: "Toronto Ontario",
    location: "Toronto, Ontario",
    dedicated: "1990, August, 25",
    area: 55558,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/toronto-ontario-temple/toronto-ontario-temple-57469-main.jpg"
  },
  {
    templeName: "Anchorage Alaska",
    location: "Anchorage, Alaska",
    dedicated: "1999, January, 9",
    area: 30000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-73281-main.jpg"
  }
];

const templeContainer = document.querySelector("#temples");
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
  templeContainer.innerHTML = "<h1>Home</h1>";
  temples.forEach(createTempleCard);
});

oldLink.addEventListener("click", () => {
  templeContainer.innerHTML = "<h1>Old Temples</h1>";
  const oldTemples = temples.filter(temple => {
    const year = Number(temple.dedicated.split(",")[0]);
    return year < 1900;  
  });
  oldTemples.forEach(createTempleCard);
});

newLink.addEventListener("click", () => {
  templeContainer.innerHTML = "<h1>New Temples</h1>";
  const newTemples = temples.filter(temple => {
    const year = Number(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  newTemples.forEach(createTempleCard);
});

largeLink.addEventListener("click", () => {
  templeContainer.innerHTML = "<h1>Large Temples</h1>";
  const largeTemples = temples.filter(temple => {
    return temple.area > 90000;
  });
  largeTemples.forEach(createTempleCard);
});

smallLink.addEventListener("click", () => {
  templeContainer.innerHTML = "<h1>Small Temples</h1>";
  const smallTemples = temples.filter(temple => {
    return temple.area < 10000;
  });
  smallTemples.forEach(createTempleCard);
});

function createTempleCard(temple){
  let card = document.createElement("section");
  let name = document.createElement("h2");
  let location = document.createElement("p");
  let dedication = document.createElement("p");
  let area = document.createElement("p");
  let image = document.createElement("img");

  name.textContent = temple.templeName;
  location.innerHTML = `<span class="label">LOCATION:</span> ${temple.location}`;
  dedication.innerHTML = `<span class="label">DEDICATED:</span> ${temple.dedicated}`;
  area.innerHTML = `<span class="label">SIZE:</span> ${temple.area} sq ft`;

  image.setAttribute("src", temple.imageUrl);
  image.setAttribute("alt", `${temple.templeName} Temple`);
  image.setAttribute("loading", "lazy");

  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedication);
  card.appendChild(area);
  card.appendChild(image);

  templeContainer.appendChild(card);
}

temples.forEach(createTempleCard);