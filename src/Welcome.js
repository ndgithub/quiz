const Welcome = (props) => {
  return (
    <>
      <div>Try the Target Quiz!</div>
      <button onClick={props.nextQuest}>Start</button>
    </>
  );
};
export default Welcome;
