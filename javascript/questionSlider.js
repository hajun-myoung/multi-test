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
    scrollTo(0, 0);
    slidePrev();
  });

  pageArrows[1].addEventListener("click", function (e) {
    e.preventDefault();
    scrollTo(0, 0);
    slideNext();
  });
});

let currentSlide = 0;

function slideNext() {
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
  currentSlide++;
}

function slidePrev() {
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
  currentSlide--;
}
