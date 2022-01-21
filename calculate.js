function sumQuestion(){
    // Description
    // .question_a :
    // .question_b :
    // .question_c :
    // .question_d :
    // .question_e :
    let ids = ['question_a', 'question_b', 'question_c', 'question_d', 'question_e'];
    let sum = [];

    // init sum array : if don't do this, sum has NaN elements
    for(let i = 0; i < ids.length; i++){
        sum[i] = 0;
    }

    for(let i = 0; i < ids.length; i++){
        let newQuestionEle = document.querySelectorAll(`div.${ids[i]} input:checked`);
        for(let j = 0; j < newQuestionEle.length; j++){
            sum[i]+=parseInt(newQuestionEle[j].value);
        }
    }

    for(let i = 0; i < ids.length; i++){
        console.log(`${ids[i]} SUM = ${sum[i]}`);
    }

    return sum;
}

// sumQuestion(); //test