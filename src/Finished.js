import React from 'react';
import PropTypes from 'prop-types';

const Finished = (props) => {
  return (
    <>
      <div>Bye!</div>
      <div>You got {props.numCorrect} right!</div>
      <div> Send this link to a fellow team member</div>
      <div> Send feedback or suggestions for new questions to:</div>
    </>
  );
};

Finished.propTypes = {};

export default Finished;
