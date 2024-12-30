let projectRoot = "lib/crab-background";
let backgroundImagePaths = [
  `${projectRoot}/assets/half-crab-fallen-star.webp`, // Jan
  `${projectRoot}/assets/half-crab.webp`, // Feb
  `${projectRoot}/assets/half-crab-spring-equinox.webp`, // Mar
  `${projectRoot}/assets/half-crab-easter.webp`, // Apr
  `${projectRoot}/assets/half-crab.webp`, // May
  `${projectRoot}/assets/half-crab-rice-dumpling.webp`, // Jun
  `${projectRoot}/assets/half-crab.webp`, // Jul
  `${projectRoot}/assets/half-crab.webp`, // Aug
  `${projectRoot}/assets/half-crab.webp`, // Sep
  `${projectRoot}/assets/half-crab-helloween.webp`, // Oct
  `${projectRoot}/assets/half-crab-turkey-day.webp`, // Nov
  `${projectRoot}/assets/half-crab-christmas.webp`, // Dec
]

function main() {
  let date = new Date();
  let month = date.getMonth();
  let crab = document.getElementById("crab-background").getElementsByClassName("crab")[0];
  crab.style.backgroundImage = `url(${backgroundImagePaths[month]})`;
}

document.addEventListener("DOMContentLoaded", main);
