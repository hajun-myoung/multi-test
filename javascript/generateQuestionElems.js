const QUESTIONS = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 1,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "b",
    num: 2,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 3,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 4,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "d",
    num: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 6,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 7,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "c",
    num: 8,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "c",
    num: 9,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "d",
    num: 10,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "d",
    num: 11,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 12,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 13,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 14,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "b",
    num: 15,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "c",
    num: 16,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "b",
    num: 17,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "c",
    num: 18,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "b",
    num: 19,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "b",
    num: 20,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 21,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "d",
    num: 22,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "c",
    num: 23,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "d",
    num: 24,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 25,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 26,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 27,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 28,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 29,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 30,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 31,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 32,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 33,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 34,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 35,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 36,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 37,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 38,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 39,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 40,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 41,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "b",
    num: 42,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 43,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 44,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "d",
    num: 45,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 46,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 47,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "c",
    num: 48,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "c",
    num: 49,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 50,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 51,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "b",
    num: 52,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 53,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 54,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "d",
    num: 55,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 56,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 57,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "c",
    num: 58,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "c",
    num: 59,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 60,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 61,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "b",
    num: 62,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 63,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 64,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "d",
    num: 65,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "e",
    num: 66,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "a",
    num: 67,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "c",
    num: 68,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "c",
    num: 69,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "c",
    num: 70,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    type: "c",
    num: 71,
  },
];

const CHOICE_COUNT = 5;
const PROBLEMS_IN_A_PAGE = 25;
const PROBLEMS_AMOUNT = 71;
const PAGE_COUNT = Math.ceil(PROBLEMS_AMOUNT / PROBLEMS_IN_A_PAGE);

let choice = [
  ["아주", "그렇다"],
  ["조금", "그렇다"],
  ["그저", "그렇다"],
  ["조금", "아니다"],
  ["전혀", "아니다"],
];

function generate() {
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
  generate();
});

// export { generate };
