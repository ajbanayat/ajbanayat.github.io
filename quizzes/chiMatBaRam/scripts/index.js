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
    let curQuestion = questions[questionNum];
    
    // set the question as the title
    const question = document.getElementById("question");
    question.textContent = curQuestion.title;

    // reset the buttons
    document.getElementById("answerButtons").innerHTML = "";
    addButtons(curQuestion);

    questionNum++;
}

function addButtons(curQuestion) {
    const answerButtonsDiv = document.getElementById("answerButtons");

    // add all the answers for this question
    var answers = curQuestion.answers;
    answers.forEach((answerText, index) => {
        let answerButton = document.createElement("button");
        answerButton.id = "answerButton" + index;
        answerButton.classList.add("answer");
        answerButton.textContent = answerText;
        answerButton.onclick = nextQuestion;

        answerButtonsDiv.appendChild(answerButton);
    });
}

function showResults() {
    const resultTitle = document.getElementById("resultTitle");
    const resultVideo = document.getElementById("resultVideo");

    resultTitle.textContent = results[0].title;
    resultVideo.src = results[0].url;

    const quizPageDiv = document.getElementById("quizPage");
    const resultsPageDiv = document.getElementById("resultsPage");

    quizPageDiv.classList.add("hidden");
    resultsPageDiv.classList.remove("hidden");
}

var questions = [
    { title: "It's the morning of filming (bright and early at 10 AM), and you're peacefully asleep. How do you wake up?", answers: [ "An alarm", "Annie K. pounding on my door", "I leave it to fate" ] },
    { title: "Someone approaches you, and they gush about how much they love watching your covers. How do you respond?", answers: [ "*awkwardly laughs* Thanks...", "OMG THANKS", "I'm so happy to hear that!" ] }
];

var url = "https://www.youtube.com/embed/Vzv0gJNYOMc?si=OvhONwpKj2RRjaGG&amp;start="
var results = [
    { title: "The Luna close up", url: url + 100 },
    { title: "Kaitlin's knee", url: url + 130 },
    { title: "The lack of lip syncing", url: url + 60 }
]