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
    const startPageDiv = document.getElementById("startPage");
    const quizPageDiv = document.getElementById("quizPage");
    questionNum++;
}

var questions = [
    { question: "Question 1", answers: [ "Answer 1", "Answer 2" ] },
    { question: "Question 2", answers: [ "Answer 1", "Answer 2" ] },
    { question: "Question 3", answers: [ "Answer 1", "Answer 2" ] },
]