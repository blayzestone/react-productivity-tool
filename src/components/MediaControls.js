import Button from "./Button";

const MediaControls = ({ start, stop, reset }) => {
  return (
    <div className="w-1/4 flex justify-evenly my-3">
      <Button color="primary" onClick={start}>
        Start
      </Button>
      <Button color="danger" onClick={stop}>
        Stop
      </Button>
      <Button color="secondary" onClick={reset}>
        Reset
      </Button>
    </div>
  );
};

export default MediaControls;
