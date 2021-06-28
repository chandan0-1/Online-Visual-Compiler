const moveX = (catMotionState, setCatMotionState, x) => {
  console.log("moving");
  const newX = catMotionState.transform.translateX + x;
  setCatMotionState((prevState) => ({
    ...prevState,
    transform: {
      ...prevState.transform,
      translateX: newX,
    },
  }));
};
const moveY = (catMotionState, setCatMotionState, y) => {
  console.log("moving");
  const newY = catMotionState.transform.translateX + y;
  setCatMotionState((prevState) => ({
    ...prevState,
    transform: {
      ...prevState.transform,
      translateY: newY,
    },
  }));
};
const rotate = (catMotionState, setCatMotionState, x) => {
  console.log("rotating");
  const newX = (catMotionState.rotate + x) % 360;
  setCatMotionState((prevState) => ({
    ...prevState,
    rotate: newX,
  }));
};

export { moveX, moveY, rotate };
