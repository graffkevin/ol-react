import { css } from 'styled-components';

import northSvg from '../../../icons/north.svg';

export const rotate = css`
  position: absolute;
  right: 1rem;
  top: 54rem;

  button {
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
  }
`;
