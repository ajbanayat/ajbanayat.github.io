function startQuiz() {
    console.log("Quiz starting");

    const startPageDiv = document.getElementById("startPage");
    const quizPageDiv = document.getElementById("quizPage");

    startPageDiv.classList.add("hidden");
    quizPageDiv.classList.remove("hidden");

    nextQuestion();
}

var questionNum = 0;
function nextQuestion() {
    if (questionNum >= questions.length) {
        showResults();
        return;
    }

    console.log("Question " + questionNum);

    const div = document.getElementById("quizPage");
    let curQuestion = questions[questionNum];
    
    // set the question as the title
    const question = document.getElementById("question");
    question.textContent = curQuestion.title;
    
    // add all the answers for this question
    var answers = curQuestion.answers;
    document.getElementById("answerButton1").textContent = answers[0];
    document.getElementById("answerButton2").textContent = answers[1];

    questionNum++;
}

function showResults() {
    const quizPageDiv = document.getElementById("quizPage");
    const resultsPageDiv = document.getElementById("resultsPage");

    quizPageDiv.classList.add("hidden");
    resultsPageDiv.classList.remove("hidden");
}

var questions = [
    { title: "Question 1", answers: [ "Answer 1", "Answer 2" ] },
    { title: "Question 2", answers: [ "Answer 1", "Answer 2" ] },
    { title: "Question 3", answers: [ "Answer 1", "Answer 2" ] },
]