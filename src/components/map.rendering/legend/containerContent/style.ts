import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const slideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
`;

export const LegendContainer = styled.div`
  display: none;
  background-color: white;
  z-index: 3;
  transition: opacity 0.3s ease-in-out, height 0.3s ease-in-out;
  &.visible {
    display: block;
    height: auto;
    animation: ${slideIn} 0.3s ease-in-out forwards;
  }
  &.hidden {
    animation: ${slideOut} 0.3s ease-in-out forwards;
  }
`;
