import { useState } from 'react';

import { RotationController } from './Rotation.controller';
import { RotationButton } from './rotation.controller.style';

export const Rotation = () => {
  const [rotationIsVisible, setRotationIsVisible] = useState(false);
  const changeRotationVisibility = () => {
    setRotationIsVisible(!rotationIsVisible);
  };
  return (
    <>
      <RotationButton onClick={changeRotationVisibility} />
      {rotationIsVisible && <RotationController />}
    </>
  );
};
