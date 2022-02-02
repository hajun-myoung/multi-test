let questionElem;
let slides;

document.addEventListener("DOMContentLoaded", () => {
  // slides와 slide element를 쉽게 탐색하기 위한 변수
  questionElem = document.getElementById("question");
  // 본격적으로 쓸 slides, slide 변수
  slides = questionElem.getElementsByClassName("slider")[0];
  // let slide = slides.getElementsByClassName("slide");

  let pageArrows = document.getElementsByClassName("pageArrow");

  // prev button
  pageArrows[0].addEventListener("click", function (e) {
    e.preventDefault();
    slidePrev();
    updateNum();
    updateBar("goPrev");
  });

  // next button
  pageArrows[1].addEventListener("click", function (e) {
    e.preventDefault();
    slideNext();
    updateNum();
    updateBar("goNext");
  });
});

let currentSlide = 0;
let pixels = 800;

const PAGE_START = 0;
const PAGE_END = 2;

function slideNext() {
  watchWidth();
  if (currentSlide < PAGE_END) {
    let from = -(pixels * currentSlide);
    let to = from - pixels;
    slides.animate(
      {
        marginLeft: [from + "px", to + "px"],
      },
      {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both",
      }
    );
    questionElem.scroll({
      top: 0,
      behavior: "smooth",
    });
    currentSlide++;
  } else {
    alert("마지막 페이지입니다!");
  }
}

function slidePrev() {
  watchWidth();
  if (currentSlide > PAGE_START) {
    let from = -(pixels * currentSlide);
    let to = from + pixels;
    slides.animate(
      {
        marginLeft: [from + "px", to + "px"],
      },
      {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both",
      }
    );
    questionElem.scroll({
      top: 0,
      behavior: "smooth",
    });
    currentSlide--;
  } else {
    alert("시작 페이지입니다!");
  }
}

function updateNum() {
  let pageNumElem = document.getElementsByClassName("pageNum");
  for (let element of pageNumElem) {
    element.innerHTML = `${currentSlide + 1}/${PAGE_END + 1}`;
  }
}

function updateBar(flag) {
  let barElem = document.getElementById("progressBar");
  if (flag == "goNext") {
    barElem.value += (1 / (PAGE_END + 1)) * 100;
  } else if (flag == "goPrev") {
    barElem.value -= (1 / (PAGE_END + 1)) * 100;
  }
}

function watchWidth() {
  pixels = document.getElementById("question").offsetWidth;
}
