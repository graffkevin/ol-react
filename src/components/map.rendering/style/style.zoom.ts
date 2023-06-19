import { css } from 'styled-components';

import zoomInSvg from '../../../icons/zoom_in.svg';
import zoomOutSvg from '../../../icons/zoom_out.svg';

export const zoomIn = css`
  position: absolute;
  top: 58rem;
  right: 1rem;

  background: none;
  border: none;
  background: url('${zoomInSvg}');
  background-repeat: no-repeat;
  background-size: contain;
  text-indent: -9999px;
  width: 25px;
  height: 25px;
  &:hover {
    transform: scale(1.4);
  }
`;

export const zoomOut = css`
  position: absolute;
  top: 56rem;
  right: 1rem;

  background: none;
  border: none;
  background: url('${zoomOutSvg}');
  background-repeat: no-repeat;
  background-size: contain;
  text-indent: -9999px;
  width: 25px;
  height: 25px;
  &:hover {
    transform: scale(1.4);
  }
`;
