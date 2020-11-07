import { useState } from 'react';
import Welcome from './Welcome';
import questions from './questions';
import Question from './Question';
import Finished from './Finished';

function Home() {
  const [state, setState] = useState({
    selection: null,
    questions: questions,
    numCorrect: 0,
  });
  const [isCorrect, setCorrect] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const [currQuestion, setCurrQuestion] = useState(-1);
  const onSubmit = (answerChoice) => {
    setState({
      ...state,
      numCorrect:
        answerChoice === 'right' ? state.numCorrect + 1 : state.numCorrect,
    });
  };

  const onNext = () => {
    setCurrQuestion(currQuestion + 1);
    setSubmitted(false);
  };

  if (currQuestion === -1) {
    return <Welcome onNext={onNext} />;
  } else if (currQuestion === state.questions.length) {
    return <Finished numCorrect={state.numCorrect} />;
  } else {
    return (
      <Question
        question={state.questions[currQuestion]}
        onNext={onNext}
        questions={state.questions}
        currQuestion={currQuestion}
        onSubmit={onSubmit}
        isCorrect={isCorrect}
        setCorrect={setCorrect}
        isSubmitted={isSubmitted}
        setSubmitted={setSubmitted}
      />
    );
  }
}

export default Home;
