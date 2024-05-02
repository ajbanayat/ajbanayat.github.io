function startQuiz() {
    console.log("Quiz starting");

    const startPageDiv = document.getElementById("startPage");
    const quizPageDiv = document.getElementById("quizPage");

    startPageDiv.style.display = "none";
    quizPageDiv.style.display = "block";
}