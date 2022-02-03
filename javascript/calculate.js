let MaxValue = [];

const type = [
  "question_a",
  "question_b",
  "question_c",
  "question_d",
  "question_e",
  "question_f",
];

let sum = [...Array(type.length).fill(0)];

function sumQuestion() {
  // init sum array : if don't do this, sum has NaN elements
  for (let i = 0; i < type.length; i++) {
    sum[i] = 0;
  }

  for (let i = 0; i < type.length; i++) {
    let checkedEle = document.querySelectorAll(`div.${type[i]} input:checked`);
    for (let j = 0; j < checkedEle.length; j++) {
      sum[i] += parseInt(checkedEle[j].value);
    }
  }

  for (let i = 0; i < type.length; i++) {
    console.log(`${type[i]} SUM = ${sum[i]}`);
    // alert(
    //   `${type[i][type[i].length - 1].toUpperCase()} 타입 문항 총점 : ${sum[i]}`
    // );
  }

  return sum;
}

function calculateMaxVal() {
  for (let i = 0; i < type.length; i++) {
    let checkedEle = document.querySelectorAll(`div.${type[i]}`);
    MaxValue[i] = checkedEle.length * 5;
  }
}

// sumQuestion(); //test
