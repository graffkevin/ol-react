import styled from 'styled-components';

interface RectangleProps {
  color: string;
}

export const ItemsContainer = styled.li`
  display: flex;
  padding: 0.2rem;
`;

export const Rectangle = styled.div<RectangleProps>`
  width: 40px;
  height: 20px;
  border: 1px solid black;
  background-color: ${(props) => props.color};
`;

export const Label = styled.div`
  padding-left: 5px;
`;
