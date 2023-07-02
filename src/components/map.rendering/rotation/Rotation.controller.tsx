import { useContext, useState } from 'react';

import { openlayerContext } from '../../../context';
import {
  RotationSvgContainer,
  RotationSvgThumb,
  RotationSvgTrack,
} from './rotation.controller.style';

export const RotationController = () => {
  const [mapRotation, setMapRotation] = useState(0);
  const map = useContext(openlayerContext);

  const [isThumbDragging, setIsThumbDragging] = useState(false);

  // Dimension of track
  const cx = 100;
  const cy = 100;
  const radius = 50;

  // position of thumb
  const [thumbPositionX, setThumbPositionX] = useState(cx);
  const [thumbPositionY, setThumbPositionY] = useState(cy - radius);

  const handleRotationChange = (degree: number) => {
    const radians = (degree * Math.PI) / 180;
    setMapRotation(radians);
    map.getView().setRotation(mapRotation);
  };

  const handleMouseUp = () => {
    setIsThumbDragging(false);
  };

  const handleMouseDown = () => {
    setIsThumbDragging(true);
  };

  const handleMouseMove = (event: any) => {
    if (isThumbDragging) {
      const boundingRect = event.currentTarget.getBoundingClientRect();
      const containerCenterX = boundingRect.left + boundingRect.width / 2;
      const containerCenterY = boundingRect.top + boundingRect.height / 2;

      const mouseX = event.clientX - containerCenterX;
      const mouseY = event.clientY - containerCenterY;

      // Calculate the angle between the center of the track and the mouse position
      let angle = Math.atan2(mouseY, mouseX);

      // Calculate the new thumb position using the angle and radius
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;

      // Move the thumb to the new position
      setThumbPositionX(x);
      setThumbPositionY(y);

      // Compute rotation angle for the map
      let degrees = (angle * 180) / Math.PI;

      // Adjust the angle to be between 0 and 360
      if (degrees < 0) {
        degrees = 360 + degrees;
      }

      // Adjust the angle by 90 degrees to make 0 start at the top (north)
      degrees += 90;
      if (degrees >= 360) {
        degrees -= 360;
      }

      handleRotationChange(degrees);
    }
  };

  return (
    <RotationSvgContainer
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <RotationSvgTrack cx={cx} cy={cy} r={radius} />
      <RotationSvgThumb cx={thumbPositionX} cy={thumbPositionY} r={10} />
    </RotationSvgContainer>
  );
};
