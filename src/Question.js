import React from 'react';

const Question = (props) => {
  const onAnswer = (e) => {
    parseInt(e.target.getAttribute('index')) === props.question.correctIndex
      ? props.nextQuest('right')
      : props.nextQuest('wrong');
  };

  return (
    <>
      <div>{props.question.question}</div>
      <div>
        {props.question.answers.map((answer, index) => {
          console.log(index);
          return (
            <button index={index} onClick={(e) => onAnswer(e)}>
              {answer}
            </button>
          );
        })}
        ;
      </div>
    </>
  );
};

export default Question;
