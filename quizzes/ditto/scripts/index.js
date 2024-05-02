function startQuiz() {
    console.log("Quiz starting");

    const startPageDiv = document.getElementById("startPage");
    const quizPageDiv = document.getElementById("quizPage");

    startPageDiv.setAttribute("hidden", "true");
    quizPageDiv.removeAttribute("hidden");
}