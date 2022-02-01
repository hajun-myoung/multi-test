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
}
