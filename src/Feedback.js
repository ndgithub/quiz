import React from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Feedback = (props) => {
  return (
    <>
      <div className="feedback-container">
        <div className="feedback-status">
          {props.isCorrect ? (
            <>
              <FontAwesomeIcon className="green" icon={faCheck} />
              <span> Correct!</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon className="red" icon={faTimes} />
              <span> Wrong</span>
            </>
          )}
        </div>
        <Button variant="contained" color="secondary" onClick={props.onNext}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Feedback;
