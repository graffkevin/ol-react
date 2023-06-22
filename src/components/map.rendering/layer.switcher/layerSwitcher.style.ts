import styled from 'styled-components';

export const LayerSwitcherContainer = styled.div`
  position: absolute;
  padding: 0.5rem;
  z-index: 3;
  top: 20rem;
  left: 10rem;
  border: 1px solid black;
  background-color: white;
`;

export const DisplayContainer = styled.div`
  display: grid;
  grid-template-columns: auto; /* Trois colonnes pour le label, InputLayer et les deux InputLegend */
  grid-gap: 8px; /* Espacement entre les éléments */
  align-items: center;
`;
