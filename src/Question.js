import React, { useState } from 'react';
import Progress from './Progress';
import { Button, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Feedback from './Feedback.js';

const useStyles = makeStyles({
  answerButtons: {
    border: 5,
    borderRadius: 3,
    color: 'white',
    fontSize: '48%',
  },
});

const Question = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (value === props.question.answers[props.question.correctIndex]) {
      props.onSubmit('right');
      props.setCorrect(true);
    } else {
      props.onSubmit('wrong');
      props.setCorrect(false);
    }
    props.setSubmitted(true);
    setValue('');
  };
  const onAnswer = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="question-container">
        <Progress
          currQuestion={props.currQuestion}
          questions={props.questions}
        />
        <div className="question-text">
          <div className="question">{props.question.question}</div>
        </div>
        <div className="line"></div>
        {props.isSubmitted ? (
          <Feedback isCorrect={props.isCorrect} onNext={props.onNext} />
        ) : (
          <form onSubmit={onSubmit}>
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={value}
              onChange={onAnswer}>
              {props.question.answers.map((answer, index) => {
                return (
                  <FormControlLabel
                    index={index}
                    key={index}
                    value={answer}
                    control={<Radio />}
                    label={answer}
                    className={classes.answerButtons}
                  />
                );
              })}
            </RadioGroup>
            <Button
              disabled={!value}
              type="submit"
              variant="outlined"
              color="primary"
              id="answer-submit-button">
              Submit
            </Button>
          </form>
        )}
      </div>
    </>
  );
};

export default Question;
