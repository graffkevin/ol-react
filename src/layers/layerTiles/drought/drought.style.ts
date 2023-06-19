import { Fill, Style } from 'ol/style';

import store from '../../../store/store';

const currentState = store.getState();
const droughtProperties = currentState.droughtProperties;

export const droughtStyleSimple = () => {
  return new Style({
    fill: new Fill({
      color: droughtProperties.style.default.color,
    }),
  });
};

export const droughtStyleComplex = (feature: any) => {
  const defaultStyle = new Style({
    fill: new Fill({
      color: droughtProperties.style.default.color,
    }),
  });
  const lightYellow = new Style({
    fill: new Fill({
      color: droughtProperties.style.light.color,
    }),
  });
  const mediumOrange = new Style({
    fill: new Fill({
      color: droughtProperties.style.medium.color,
    }),
  });
  const red = new Style({
    fill: new Fill({
      color: droughtProperties.style.high.color,
    }),
  });

  switch (feature.get('NIVEAU')) {
    case 1:
      return [lightYellow];
    case 2:
      return [mediumOrange];
    case 3:
      return [red];
    default:
      return [defaultStyle];
  }
};
