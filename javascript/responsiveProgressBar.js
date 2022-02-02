document.addEventListener("DOMContentLoaded", () => {
  let inputBtns = document.getElementsByTagName("input");

  let radioBtns = [];
  for (let item of inputBtns) {
    let type = item.getAttribute("type");
    if (type == "radio") radioBtns.push(item);
  }

  for (let item of radioBtns) {
    item.addEventListener("click", updateBar);
  }
});

let checked = 0;

function updateBar() {
  let progressBar = document.getElementsByClassName("percentage")[0];

  checked = document.querySelectorAll("input:checked").length;
  percentage = checked / PROBLEMS_AMOUNT;

  progressBar.style.width = `${Math.ceil(
    percentage * document.getElementById("progressBar").offsetWidth
  )}px`;
  progressBar.innerHTML = `${Math.ceil(percentage * 100)}%`;

  if (Math.ceil(percentage * 100) < 5) progressBar.style.color = "#FFF";
  else progressBar.style.color = "#000";

  console.log("progress bar percentage is updated");
}
