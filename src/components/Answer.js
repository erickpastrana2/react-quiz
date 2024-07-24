
const Answer = ({ 
  answerText, 
  onSelectAnswer, 
  index, 
  currentAnswer, 
  correctAnswer
}) => {
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAsnwerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";
  return (
    <div className={`answer ${correctAsnwerClass} ${wrongAnswerClass} ${disabledClass}`} 
    onClick={() => onSelectAnswer(answerText)}
    >
      <div className="answer-letter"> {letterMapping[index]} </div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;
