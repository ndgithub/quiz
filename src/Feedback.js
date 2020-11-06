import React from 'react';
import { Button } from '@material-ui/core';
const Feedback = (props) => {
  return (
    <>
      <div>{props.isCorrect ? 'Right!' : 'Wrong'}</div>
      <Button onClick={props.onNext}>Next</Button>
    </>
  );
};

export default Feedback;
