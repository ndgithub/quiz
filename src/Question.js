import React, { useState } from 'react';
import Progress from './Progress';

const Question = (props) => {
  const [state, setState] = useState({
    selection: null,
  });
  const onSubmit = (e) => {
    parseInt(e.target.getAttribute('index')) === props.question.correctIndex
      ? props.onSubmit('right')
      : props.onSubmit('wrong');
  };
  const onAnswer = (e) => {
    setState({
      ...state,
      selection: parseInt(e.target.getAttribute('index')),
    });
  };
  const onNext = (e) => {
    props.nextQuest();
  };

  return (
    <>
      <Progress currQuestion={props.currQuestion} questions={props.questions} />
      <div className="question">{props.question.question}</div>
      <div className="answer-group">
        {props.question.answers.map((answer, index) => {
          console.log(index);
          return (
            <div>
              <button index={index} onClick={(e) => onAnswer(e)}>
                {answer}
              </button>
            </div>
          );
        })}
      </div>
      <div className="affirmation"></div>
      <div className="actions">
        <button onClick={(e) => onAnswer(e)}>Submit</button>
        <button onClick={(e) => onNext(e)}>Next</button>
      </div>
    </>
  );
};

export default Question;
