import styled from 'styled-components';

export const ItemBlock = styled.div`
  display: flex;
  padding: 0.2rem;
`;

export const ItemsLegend = styled.li`
  display: table-cell;
  vertical-align: middle;
  border: 1px solid black;
  background-color: white;
`;

export const LegendContainer = styled.div`
  position: absolute;
  z-index: 3;
  top: 30rem;
  left: 50%;
  display: table;
  padding: 0.625rem;
`;
