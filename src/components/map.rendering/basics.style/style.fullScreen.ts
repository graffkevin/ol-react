import { css } from 'styled-components';

import extentSvg from '../../../icons/extent.svg';

export const fullScreen = css`
  position: absolute;
  right: 1rem;
  top: 60rem;

  button {
    background: none;
    border: none;
    background-image: url('${extentSvg}');
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
