import React from 'react';

const Finished = (props) => {
  return (
    <>
      <div className="welcome-container">
        <div className="welcome-content">
          <div id="logo-container">
            <img id="logo" alt="target-logo" src="/images/target-logo.png" />
          </div>
          <h1 className="welcome-text">
            You got {props.numCorrect} right! <br></br>Thanks for playing!
          </h1>
        </div>
      </div>
    </>
  );
};

Finished.propTypes = {};

export default Finished;
