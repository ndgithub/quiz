import Button from '@material-ui/core/Button';

const Welcome = (props) => {
  return (
    <>
      <div className="welcome-container">
        <div className="welcome-content">
          <div id="logo-container">
            <img id="logo" alt="target-logo" src="/images/target-logo.png" />
          </div>
          <h1 className="welcome-text">Try the Target Employee Quiz!</h1>

          <Button
            style={{ backgroundColor: '#E50024', color: 'white' }}
            size="large"
            variant="contained"
            color="#E50024"
            onClick={props.onNext}>
            Start
          </Button>
        </div>
      </div>
    </>
  );
};
export default Welcome;
