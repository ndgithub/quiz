import Button from '@material-ui/core/Button';

const Welcome = (props) => {
  return (
    <>
      <div>Try the Target Quiz!</div>
      <Button onClick={props.onNext}>Start</Button>
    </>
  );
};
export default Welcome;
