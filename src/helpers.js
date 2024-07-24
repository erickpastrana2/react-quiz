export const shuffledAnswers = (questions) => {
    const unshuffledAnswers = [
        questions.correctAnswer,
        ...questions.incorrectAnswers,
    ];

    return unshuffledAnswers
        .map((unshuffledAnswer) => ({
            sort: Math.random(),
            value: unshuffledAnswer,
        }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value);
};

export const normalizeQuestions = (backenQuestions) => {
    return backenQuestions.map((backenQuestions) => {
        const incorrectAnswers = backenQuestions.incorrect_answers.map(
            (incorrectAnswer) => decodeURIComponent(incorrectAnswer)

        );
        return {
            correctAnswer: decodeURIComponent(backenQuestions.correct_answer),
            question: decodeURIComponent(backenQuestions.question),
            incorrectAnswers,
        }
    })
} 