import styled from 'styled-components';

import { attribution } from './style.attribution';
import { fullScreen } from './style.fullScreen';
import { map } from './style.map';
import { rotate } from './style.rotate';
import { scale } from './style.scale';
import { zoomIn, zoomOut } from './style.zoom';

export const Map = styled.div`
  ${map}

  & .ol-full-screen {
    ${fullScreen}
  }

  & .ol-zoom {
    & .ol-zoom-in {
      ${zoomIn}
    }
    & .ol-zoom-out {
      ${zoomOut}
    }
  }

  & .ol-scale-line {
    ${scale}
  }

  & .ol-rotate {
    ${rotate}
  }

  & .ol-attribution {
    ${attribution}
  }
`;
