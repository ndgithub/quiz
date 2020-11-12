import React from 'react';
import PropTypes from 'prop-types';

const Progress = (props) => {
  return (
    <div className="progress">
      <div className="progress-logo">
        <img alt="target-logo" src="/images/target-logo.png" />
      </div>
      <div className="progress-text">
        {'\u00A0'}
        {'\u00A0'}
        {parseInt(props.currQuestion) + 1} of {props.questions.length}
      </div>
    </div>
  );
};

export default Progress;
