// Declare variables
//Answers

let answers = {
    q1: "Javascript",
    q2: "%",
    q3: "can contain spaces.",
    q4: ".length()",
    q5: ">>"
};


let questions = document.getElementById("quiz-form");
let total_score = 0;
let correct = 0;
let correct_answers = document.querySelector('.correct_Answers');

let score = document.querySelector('.total-score');
let comment = document.querySelector('.comment');
let btnOk = document.querySelector('.btn-Ok');
let btnClear = document.querySelector('.clear');
let score_container = document.querySelector('.scores');

//Clear the selected answers
btnClear.addEventListener('click', () => {
    questions.reset();
});

//calculate scores for the answered questions
function calcScores(){
    var userInput = new FormData(questions);

    //get selected answers
    var ans1 = userInput.get('quiz1');
    var ans2 = userInput.get('quiz2');
    var ans3 = userInput.get('quiz3');
    var ans4 = userInput.get('quiz4');
    var ans5 = userInput.get('quiz5');

    //check if answers selected are correct

    if (ans1 === answers.q1){
        total_score++;
        correct_answers++;

    }

    if (ans2 === answers.q2){
        total_score++;
        correct_answers++;

    }

    if (ans3 === answers.q3){
        total_score++;
        correct_answers++;

    }

    if (ans4 === answers.q4){
        total_score++;
        correct_answers++;

    }

    if (ans5 === answers.q5){
        total_score++;
        correct_answers++;

    }
}

