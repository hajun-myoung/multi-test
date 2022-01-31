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
  });

  pageArrows[1].addEventListener("click", function (e) {
    e.preventDefault();
    slideNext();
    updateNum();
  });
});

let currentSlide = 0;

const PAGE_START = 0;
const PAGE_END = 2;

function slideNext() {
  if (currentSlide < PAGE_END) {
    let from = -(800 * currentSlide);
    let to = from - 800;
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
  if (currentSlide > PAGE_START) {
    let from = -(800 * currentSlide);
    let to = from + 800;
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
