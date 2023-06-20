import styled from 'styled-components';

export const ContainerButtonAndLegend = styled.div`
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const ButtonLegend = styled.button`
  z-index: 4;
  background-color: rgba(42, 209, 249, 1);
  color: black;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  cursor: pointer;
`;
