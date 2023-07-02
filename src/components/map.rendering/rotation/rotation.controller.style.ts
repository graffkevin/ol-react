import styled, { css } from 'styled-components';

export const RotationContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  z-index: 3;
`;

export const RotationTrack = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid gray;
  transform-origin: center center;
`;

export const RotationThumb = styled.div<{ rotation: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.rotation}rad);
  ${({ rotation }) =>
    rotation &&
    css`
      transition: transform 0.3s ease;
    `}
`;

export const RotationInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 5;
`;

export const RotationSvgContainer = styled.svg`
  position: absolute;
  z-index: 4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // Centrer le conteneur
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  align-items: center;
`;

export const RotationSvgTrack = styled.circle`
  fill: none;
  stroke: black;
`;

export const RotationSvgThumb = styled.circle`
  fill: blue;
  cursor: pointer;
`;
