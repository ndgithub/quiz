import Button from '@material-ui/core/Button';

const Welcome = (props) => {
  return (
    <>
      <div className="welcome-container">
        <div className="welcome-content">
          <h1 className="welcome-text">Try the Target Employee Quiz!</h1>
          <Button variant="contained" color="secondary" onClick={props.onNext}>
            Start
          </Button>
        </div>
      </div>
    </>
  );
};
export default Welcome;
