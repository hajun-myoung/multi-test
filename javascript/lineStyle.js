function color() {
  const EVEN_COLOR = "#6DB1BF";
  const ODD_COLOR = "#FFEAEC";

  let elements = document.querySelectorAll("article#question > ul > li > div");
  Object.entries(elements).forEach((item, i) => {
    item[1].style.backgroundColor = i % 2 == 0 ? EVEN_COLOR : ODD_COLOR;
  });

  console.log("Done : Coloring");
}

window.addEventListener("DOMContentLoaded", color);
