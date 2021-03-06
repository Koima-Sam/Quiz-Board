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
btnOk.addEventListener("click", () =>{
    questions.classList.toggle("hide");
    score_container.style.opacity = 0;

    total_score = 0;
    correct = 0;
    window.location.reload();
})

questions.addEventListener("submit", (e) => {
    // to prevent reloading of the page
    e.preventDefault();
  
    checkAnswers();
    calcPercentage();
    questions.reset();
  });
//calculate scores for the answered questions
function checkAnswers(){
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
        correct++;
    

    }

    if (ans2 === answers.q2){
        total_score++;
        correct++;

    }

    if (ans3 === answers.q3){
        total_score++;
        correct++;

    }

    if (ans4 === answers.q4){
        total_score++;
        correct++;

    }

    if (ans5 === answers.q5){
        total_score++;
        correct++;

    }
};

//Calculate the score in percentage
function calcPercentage(){
    let percentage = (total_score/5) * 100;

    //comments

    if(percentage >= 80){
        correct_answers.innerText =correct+" out of 5";
        score.innerText = percentage+" %";
        comment.innerText = ("You have passed excellently!!")
    }


    else if(percentage >=50){
        correct_answers.innerText = correct+" out of 5";
        score.innerText = percentage+ " %";
        comment.innerText= "You have passed fairly!!";
    }


    else if(percentage < 50){
        correct_answers.innerText = correct+ " out of 5";
        score.innerText = percentage+ " %";
        comment.innerText = "You have poorly passed! Kindly retake the quiz"
    }


    score_container.classList.toggle("showscore");
    questions.classList.toggle("hide");
};


