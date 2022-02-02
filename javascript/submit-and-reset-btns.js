document.addEventListener("DOMContentLoaded", () => {
  setResetBtn();
  setSubmitBtn();
});

function setResetBtn() {
  let resetBtn = document.getElementById("reset-btn");

  resetBtn.addEventListener("click", () => {
    if (confirm("정말로 응답을 초기화하시겠습니까?")) {
      let checkedElem = document.querySelectorAll("input:checked");
      for (let item of checkedElem) {
        item.checked = false;
      }
      updateBar();
    } else {
      alert("응답 초기화가 취소되었습니다");
    }
  });
}

function setSubmitBtn() {
  let submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", () => {
    sumQuestion();
    // console.log(sum);
    createResult();
  });
}

function createResult() {
  // 지능검사결과 폼
  const resultData = [
    {
      id: "a",
      title: "A타입",
      description: "A타입 지능에 대한 설명입니다",
    },
    {
      id: "b",
      title: "B타입",
      description: "B타입 지능에 대한 설명입니다",
    },
    {
      id: "c",
      title: "C타입",
      description: "C타입 지능에 대한 설명입니다",
    },
    {
      id: "d",
      title: "D타입",
      description: "D타입 지능에 대한 설명입니다",
    },
    {
      id: "e",
      title: "E타입",
      description: "E타입 지능에 대한 설명입니다",
    },
    {
      id: "f",
      title: "F타입",
      description: "F타입 지능에 대한 설명입니다",
    },
  ];

  // resultDiv will contain whole contents
  let resultDiv = document.createElement("div");

  // div for major result
  calculateMaxVal();
  for (let idx = 0; idx < sum.length; idx++) {
    sum[idx] = +(sum[idx] / MaxValue[idx]);
  }

  let orderedSum = [...sum];
  orderedSum.sort((a, b) => b - a);
  let major_idx = sum.indexOf(orderedSum[0]);
  let major_val = sum[major_idx]; // save value before init to -1
  sum[major_idx] = -1; // prvent duplicated extract

  let minor1_idx = sum.indexOf(orderedSum[1]);
  let minor1_val = sum[minor1_idx]; // save value before init to -1
  sum[minor1_idx] = -1; // prvent duplicated extract

  let minor2_idx = sum.indexOf(orderedSum[2]);
  let minor2_val = sum[minor2_idx];

  // for Graph
  let majorDiv = document.createElement("div");
  majorDiv.id = "major";

  let majorText = document.createTextNode(
    `${userName}님의 최우수지능은 ${resultData[major_idx].title}입니다.`
  );

  let majorGraphDiv = document.createElement("div");
  majorGraphDiv.className += "majorGraph";
  let majorGraph = document.createElement("span");

  majorGraph.innerHTML = `${Math.ceil(major_val * 100)}%`;

  setTimeout(() => {
    majorGraph.style.width =
      major_val * document.getElementsByClassName("majorGraph")[0].offsetWidth +
      "px";
  }, 1000);

  majorGraphDiv.appendChild(majorGraph);

  let majorDescription = document.createElement("div");
  majorDescription.className += "majorDescription";
  let majorDescriptionText = document.createTextNode(
    resultData[major_idx].description
  );
  majorDescription.appendChild(majorDescriptionText);

  majorDiv.appendChild(majorText);
  majorDiv.appendChild(majorGraphDiv);
  majorDiv.appendChild(majorDescription);

  // minor div

  let minorDiv_1 = document.createElement("div");
  let minorDiv_2 = document.createElement("div");
  minorDiv_1.id = "minor_1";
  minorDiv_2.id = "minor_2";

  let minorText_1 = document.createTextNode(
    `${userName}님의 두번째 우수지능은 ${resultData[minor1_idx].title}입니다.`
  );
  let minorText_2 = document.createTextNode(
    `${userName}님의 세번째 우수지능은 ${resultData[minor2_idx].title}입니다.`
  );

  minorDiv_1.appendChild(minorText_1);
  minorDiv_2.appendChild(minorText_2);

  let minorGraphDiv_1 = document.createElement("div");
  let minorGraphDiv_2 = document.createElement("div");
  let minorGraph_1 = document.createElement("span");
  let minorGraph_2 = document.createElement("span");

  minorGraphDiv_1.className += "minorGraph";
  minorGraphDiv_2.className += "minorGraph";

  minorGraphDiv_1.appendChild(minorGraph_1);
  minorGraphDiv_2.appendChild(minorGraph_2);

  minorGraph_1.innerHTML = `${Math.ceil(minor1_val * 100)}%`;
  minorGraph_2.innerHTML = `${Math.ceil(minor2_val * 100)}%`;

  setTimeout(() => {
    minorGraph_1.style.width =
      minor1_val *
        document.getElementsByClassName("minorGraph")[0].offsetWidth +
      "px";
  }, 1000);

  setTimeout(() => {
    minorGraph_2.style.width =
      minor2_val *
        document.getElementsByClassName("minorGraph")[1].offsetWidth +
      "px";
  }, 1000);

  let minorDescription_1 = document.createElement("div");
  let minorDescription_2 = document.createElement("div");
  let minorDescriptionText_1 = document.createTextNode(
    resultData[minor1_idx].description
  );
  let minorDescriptionText_2 = document.createTextNode(
    resultData[minor2_idx].description
  );

  minorDescription_1.className += "minorDescription";
  minorDescription_2.className += "minorDescription";

  minorDescription_1.appendChild(minorDescriptionText_1);
  minorDescription_2.appendChild(minorDescriptionText_2);

  minorDiv_1.appendChild(minorText_1);
  minorDiv_1.appendChild(minorGraphDiv_1);
  minorDiv_1.appendChild(minorDescription_1);

  minorDiv_2.appendChild(minorText_2);
  minorDiv_2.appendChild(minorGraphDiv_2);
  minorDiv_2.appendChild(minorDescription_2);

  // append to resultDiv
  resultDiv.appendChild(majorDiv);
  resultDiv.appendChild(minorDiv_1);
  resultDiv.appendChild(minorDiv_2);

  // 최종 초기화 및 반영
  document.getElementById("progressBar").style.display = "none";

  const noticeElem = document.getElementsByClassName("notice");

  noticeElem[0].innerHTML = `${userName}님의 검사 결과입니다.`;
  noticeElem[0].style.backgroundColor = "skyblue";

  noticeElem[1].style.display = "none";

  document.getElementById("controller").style.display = "none";

  let questionDiv = document.getElementById("question");
  questionDiv.innerHTML = "";
  questionDiv.appendChild(resultDiv);
}
