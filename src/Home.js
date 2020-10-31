import { useState } from 'react';
import Welcome from './Welcome';
import questions from './questions';
import Question from './Question';
import Finished from './Finished';

function App() {
  const [state, setState] = useState({
    currQuestion: -1,
    questions: questions,
    numCorrect: 0,
  });

  const onSubmit = (answerChoice) => {
    setState({
      ...state,
      numCorrect:
        answerChoice === 'right' ? state.numCorrect + 1 : state.numCorrect,
    });
    console.log(state);
  };
  const nextQuest = () => {
    setState({
      ...state,
      currQuestion: state.currQuestion + 1,
      affirmation: null,
    });
  };

  if (state.currQuestion === -1) {
    return <Welcome nextQuest={nextQuest} />;
  } else if (state.currQuestion === state.questions.length) {
    return <Finished numCorrect={state.numCorrect} />;
  } else {
    return (
      <Question
        question={state.questions[state.currQuestion]}
        nextQuest={nextQuest}
        questions={state.questions}
        currQuestion={state.currQuestion}
      />
    );
  }
}

export default App;
