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
  const resultTypeInfo = [
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

  // 차트랑 메이저 결과 한 행으로 묶기
  let chart_and_major = document.createElement("div");
  chart_and_major.id = "chart_and_major";

  // resultDiv will contain whole contents
  let resultDiv = document.createElement("div");

  let chartDiv = document.createElement("div");
  chartDiv.id = "chartDiv";
  let chartCanvas = document.createElement("canvas");
  chartCanvas.id = "myChart";
  // debugger;
  chartCanvas.setAttribute("width", "400");
  chartCanvas.setAttribute("height", "400");
  chartDiv.appendChild(chartCanvas);

  chart_and_major.appendChild(chartDiv);

  // div for major result
  calculateMaxVal(); // console.log(MaxValue);
  for (let idx = 0; idx < sum.length; idx++) {
    sum[idx] = +(sum[idx] / MaxValue[idx]);
    sum[idx] = isNaN(sum[idx]) ? 0 : sum[idx];
  }

  let resultData = [];
  let orderedSum = [...sum];
  orderedSum.sort((a, b) => b - a);

  for (let idx = 0; idx < resultTypeInfo.length; idx++) {
    let biggestIdx = sum.indexOf(orderedSum[idx]);
    let biggestVal = sum[biggestIdx];
    sum[biggestIdx] = -1;

    resultData.push({
      type: resultTypeInfo[biggestIdx].title,
      val: biggestVal,
      description: resultTypeInfo[biggestIdx].description,
    });
  }

  for (let idx = 0; idx < resultTypeInfo.length; idx++) {
    let newDiv = document.createElement("div");
    if (idx == 0) newDiv.id = `major`;
    else newDiv.id = `minor`;

    let newText = document.createTextNode(
      idx == 0
        ? `${userName}님은 ${resultData[idx].type}형 인재입니다.`
        : `${userName}님의 ${idx + 1}번째 우수지능은 ${
            resultData[idx].type
          }입니다.`
    );

    newDiv.appendChild(newText);

    let newGraphDiv = document.createElement("div");
    let newGraph = document.createElement("span");
    if (idx == 0) {
      newGraphDiv.style.width = "100%";
      newGraphDiv.className += "majorGraph";
    } else newGraphDiv.className += "minorGraph";

    newGraphDiv.appendChild(newGraph);

    newGraph.innerHTML = `${Math.ceil(+resultData[idx].val * 100)}%`;
    setTimeout(() => {
      newGraph.style.width =
        resultData[idx].val * newGraphDiv.offsetWidth + "px";
    }, 1000);

    let newDescription = document.createElement("div");
    let newDescriptionText = document.createTextNode(
      resultData[idx].description
    );
    if (idx == 0) newDescription.className += "majorDescription";
    else newDescription.className += "minorDescription";

    newDescription.appendChild(newDescriptionText);

    newDiv.appendChild(newText);
    newDiv.appendChild(newGraphDiv);
    newDiv.appendChild(newDescription);

    if (idx == 0) {
      chart_and_major.appendChild(newDiv);
      resultDiv.appendChild(chart_and_major);
    } else resultDiv.appendChild(newDiv);
  }

  // 캔버스에 차트 드로잉
  const myChart = new Chart(chartCanvas, {
    type: "radar",
    data: {
      labels: ["유형1", "유형2", "유형3", "유형4", "유형5", "유형6"],
      datasets: [
        {
          label: `${userName}님 검사결과`,
          data: resultData.map((data) => data.val),
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)",
        },
      ],
    },
    options: {
      responsive: false,
      scale: {
        // beginAtZero: true,
        max: 1.0,
        min: 0.0,
        stepSize: 0.2,
      },
      elements: {
        line: {
          borderWidth: 3,
        },
      },
    },
  });

  // 최종 초기화 및 반영
  document.getElementById("progressBar").style.display = "none";

  const noticeElem = document.getElementsByClassName("notice");

  noticeElem[0].innerHTML = `${userName}님의 검사 결과입니다.`;
  noticeElem[0].style.backgroundColor = "skyblue";

  noticeElem[1].style.display = "none";

  document.getElementById("controller").style.display = "none";

  let questionDiv = document.getElementById("question");
  questionDiv.style.height = "520px";

  questionDiv.scroll({
    top: 0,
    behavior: "smooth",
  });
  questionDiv.innerHTML = "";
  questionDiv.appendChild(resultDiv);
}
