import React from 'react';
import PropTypes from 'prop-types';

const Progress = (props) => {
  return (
    <div className="progress">
      {parseInt(props.currQuestion) + 1} of {props.questions.length}
    </div>
  );
};

Progress.propTypes = {};

export default Progress;
