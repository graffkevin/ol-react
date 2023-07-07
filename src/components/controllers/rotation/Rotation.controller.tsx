import { useContext, useRef, useState } from 'react';

import { openlayerContext } from '../../../context';
import {
  LabelDegree,
  RotationContainer,
  RotationSvg,
  RotationSvgThumb,
  RotationSvgTrack,
} from './rotation.controller.style';
import { thumbMove } from './thumb.move';

export const RotationController = () => {
  const rotationSvgRef = useRef(null);

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
  const [degreePosition, setDegreePosition] = useState(0);

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
    event.preventDefault();
    if (isThumbDragging) {
      const { x, y, degrees } = thumbMove(event, cx, cy, radius);
      setThumbPositionX(x);
      setThumbPositionY(y);
      setDegreePosition(Math.round(degrees));
      handleRotationChange(degrees);
    }
  };

  const handleTouchMove = (event: any) => {
    event.preventDefault();
    if (isThumbDragging) {
      const touch = event.touches[0];
      const touchEvent = {
        clientX: touch.clientX,
        clientY: touch.clientY,
        target: rotationSvgRef.current,
      };
      const { x, y, degrees } = thumbMove(touchEvent, cx, cy, radius);
      setThumbPositionX(x);
      setThumbPositionY(y);
      setDegreePosition(Math.round(degrees));
      handleRotationChange(degrees);
    }
  };

  const resetPosition = () => {
    setThumbPositionX(cx);
    setThumbPositionY(cy - radius);
    setDegreePosition(0);
    handleRotationChange(0);
    setMapRotation(0);
    map.getView().setRotation(0);
  };

  return (
    <RotationContainer>
      <RotationSvg
        ref={rotationSvgRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <RotationSvgTrack cx={cx} cy={cy} r={radius} />
        <RotationSvgThumb cx={thumbPositionX} cy={thumbPositionY} r={10} />
      </RotationSvg>
      <LabelDegree onClick={resetPosition}>{degreePosition}°</LabelDegree>
    </RotationContainer>
  );
};
