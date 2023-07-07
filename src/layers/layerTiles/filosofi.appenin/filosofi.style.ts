import { Fill, Stroke, Style } from 'ol/style';

import store from '../../../services/store/store';

const currentState = store.getState();
const filosofiProperties = currentState.filosofiProperties;

export const filosofiStyle = (feature: any) => {
  const defaultStyle = new Style({
    fill: new Fill({
      color: filosofiProperties.style.default.color,
    }),
    stroke: new Stroke({
      color: 'black',
      width: 0.2,
    }),
  });
  const veryLightGreen = new Style({
    fill: new Fill({
      color: filosofiProperties.style.veryLightGreen.color,
    }),
    stroke: new Stroke({
      color: 'black',
      width: 0.2,
    }),
  });
  const lightGreen = new Style({
    fill: new Fill({
      color: filosofiProperties.style.lightGreen.color,
    }),
    stroke: new Stroke({
      color: 'black',
      width: 0.2,
    }),
  });
  const mediumGreen = new Style({
    fill: new Fill({
      color: filosofiProperties.style.mediumGreen.color,
    }),
    stroke: new Stroke({
      color: 'black',
      width: 0.2,
    }),
  });
  const strongGreen = new Style({
    fill: new Fill({
      color: filosofiProperties.style.strongGreen.color,
    }),
    stroke: new Stroke({
      color: 'black',
      width: 0.2,
    }),
  });
  const veryStrongGreen = new Style({
    fill: new Fill({
      color: filosofiProperties.style.veryStrongGreen.color,
    }),
    stroke: new Stroke({
      color: 'black',
      width: 0.2,
    }),
  });

  const value = feature.get('NIVEAUX_DE');
  switch (true) {
    case value < filosofiProperties.style.veryLightGreen.threshold:
      return [veryLightGreen];
    case value < filosofiProperties.style.lightGreen.threshold:
      return [lightGreen];
    case value < filosofiProperties.style.mediumGreen.threshold:
      return [mediumGreen];
    case value < filosofiProperties.style.strongGreen.threshold:
      return [strongGreen];
    case value < filosofiProperties.style.veryStrongGreen.threshold:
      return [veryStrongGreen];
    default:
      return [defaultStyle];
  }
};
