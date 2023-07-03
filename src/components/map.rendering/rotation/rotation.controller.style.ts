import styled from 'styled-components';

import northSvg from '../../../icons/north.svg';

export const RotationButton = styled.div`
  position: absolute;
  right: 1rem;
  top: 54rem;
  z-index: 4;

  background: none;
  border: none;
  background: url('${northSvg}');
  background-repeat: no-repeat;
  background-size: contain;
  width: 25px;
  height: 25px;
  text-indent: -9999px;
  &:hover {
    transform: scale(1.4);
  }
`;

export const RotationContainer = styled.div`
  position: absolute;
  z-index: 4;
  bottom: 5%;
  right: 1%;
  background-color: none;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RotationSvg = styled.svg`
  width: 100%;
  height: 100%;
`;

export const RotationSvgTrack = styled.circle`
  fill: rgba(255, 255, 255, 0.8);
  stroke: black;
`;

export const RotationSvgThumb = styled.circle`
  fill: blue;
  cursor: pointer;
`;

export const LabelDegree = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
