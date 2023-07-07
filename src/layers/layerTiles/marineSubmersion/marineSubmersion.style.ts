import { Fill, Style } from 'ol/style';

import store from '../../../services/store/store';

const currentState = store.getState();
const marineSubmersionProperties = currentState.marineSubmersionProperties;

export const marineSubmersionStyleSimple = () => {
  return new Style({
    fill: new Fill({
      color: marineSubmersionProperties.style.low.color,
    }),
  });
};

export const marineSubmersionStyleComplex = (feature: any) => {
  const defaultStyle = new Style({
    fill: new Fill({
      color: marineSubmersionProperties.style.default.color,
    }),
  });
  const lightBlue = new Style({
    fill: new Fill({
      color: marineSubmersionProperties.style.low.color,
    }),
  });
  const mediumBlue = new Style({
    fill: new Fill({
      color: marineSubmersionProperties.style.medium.color,
    }),
  });
  const darkBlue = new Style({
    fill: new Fill({
      color: marineSubmersionProperties.style.high.color,
    }),
  });

  switch (feature.get('theme')) {
    case 1:
      return [lightBlue];
    case 2:
      return [mediumBlue];
    case 3:
      return [darkBlue];
    default:
      return [defaultStyle];
  }
};
