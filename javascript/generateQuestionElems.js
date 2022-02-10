import color from "./lineStyle.js";
import setBar from "./responsiveProgressBar.js";

export const CHOICE_COUNT = 5;
export const PROBLEMS_IN_A_PAGE = 25;
export const PROBLEMS_AMOUNT = 71;
export const PAGE_COUNT = Math.ceil(PROBLEMS_AMOUNT / PROBLEMS_IN_A_PAGE);

let choice = [
  ["아주", "그렇다"],
  ["조금", "그렇다"],
  ["그저", "그렇다"],
  ["조금", "아니다"],
  ["전혀", "아니다"],
];

function generateQuestionElem(QUESTIONS) {
  // question article
  // let tar = document.getElementById("question");
  for (let page = 0; page < PAGE_COUNT; page++) {
    console.log(`page ${page} Loading`);
    let newQuestionPage = document.getElementsByClassName("slide")[page];
    QUESTIONS.slice(
      page * PROBLEMS_IN_A_PAGE,
      (page + 1) * PROBLEMS_IN_A_PAGE
    ).forEach((item) => {
      // console.log(`item ${item.num} Loading`);
      // 문항을 감싸는 div
      let newDiv = document.createElement("div");
      newDiv.className += `question_${item.type}`;

      // 문항에 들어가는 p태그들 : 번호와 문제
      let numberP_tag = document.createElement("p");
      let questionP_tag = document.createElement("p");

      let numTxt = document.createTextNode(`Q${item.num}`);
      let quetionTxt = document.createTextNode(item.text);

      numberP_tag.appendChild(numTxt);
      questionP_tag.appendChild(quetionTxt);

      // 문항 Div에 연결
      newDiv.appendChild(numberP_tag);
      newDiv.appendChild(questionP_tag);

      // 선택지 div와 자식 input, label
      let choiceDiv = document.createElement("div");
      choiceDiv.className += "choice";

      for (let cnt = 0; cnt < CHOICE_COUNT; cnt++) {
        let newInput = document.createElement("input");
        let newLabel = document.createElement("label");

        // "아주" "그렇다" 사이 줄바꿈을 위해 두 개의 P element를 이용
        let newP_tag_inLabel_1 = document.createElement("p");
        let newP_tag_inLabel_2 = document.createElement("p");
        let newLabelTxt1 = document.createTextNode(choice[cnt][0]);
        let newLabelTxt2 = document.createTextNode(choice[cnt][1]);

        newP_tag_inLabel_1.appendChild(newLabelTxt1);
        newP_tag_inLabel_2.appendChild(newLabelTxt2);

        newInput.type = "radio";
        newInput.name = `q${item.num}`;
        newInput.id = `choice${cnt + 1}`;
        newInput.value = `${5 - cnt}`;

        newLabel.for = `choice${cnt + 1}`;

        newLabel.appendChild(newP_tag_inLabel_1);
        newLabel.appendChild(newP_tag_inLabel_2);

        choiceDiv.appendChild(newInput);
        choiceDiv.appendChild(newLabel);
      }

      newDiv.appendChild(choiceDiv);

      newQuestionPage.appendChild(newDiv);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("./javascript/question.json")
    .then((response) => response.json())
    .then((question) => {
      // console.log(question);
      generateQuestionElem(question.QUESTIONS);
      console.log("questions are generated!");
      color();
      setBar();
    });
});
