import { css } from 'styled-components';

// Need to add hook to update value when aria-expanded attribute is true / false
export const attribution = css`
  display: none;
  position: absolute;
  right: 10rem;
  top: 52rem;

  button {
    ul {
      display: ${(props: any) => (props['aria-expanded'] ? 'block' : 'none')};
    }
  }
`;
