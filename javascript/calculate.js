function sumQuestion() {
  let type = [
    "question_a",
    "question_b",
    "question_c",
    "question_d",
    "question_e",
  ];
  let sum = [];

  // init sum array : if don't do this, sum has NaN elements
  for (let i = 0; i < type.length; i++) {
    sum[i] = 0;
  }

  for (let i = 0; i < type.length; i++) {
    let newQuestionEle = document.querySelectorAll(
      `div.${type[i]} input:checked`
    );
    for (let j = 0; j < newQuestionEle.length; j++) {
      sum[i] += parseInt(newQuestionEle[j].value);
    }
  }

  for (let i = 0; i < type.length; i++) {
    console.log(`${type[i]} SUM = ${sum[i]}`);
  }

  return sum;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit-btn").addEventListener("click", sumQuestion);
});
// sumQuestion(); //test
