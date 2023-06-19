import { Fill, Stroke, Style } from 'ol/style';

import store from '../../../store/store';

const currentState = store.getState();
const cadastralProperties = currentState.cadastralProperties;

export const cadastreStyle = (feature: any) => {
  const sectionsStyle = new Style({
    fill: new Fill({
      color: cadastralProperties.style.section.color,
    }),
    stroke: new Stroke({
      color: 'rgba(0, 0, 0, 0.6)',
      width: 0.45,
    }),
  });
  const parcellesStyle = new Style({
    fill: new Fill({
      color: cadastralProperties.style.batiment.color,
    }),
    stroke: new Stroke({
      color: 'rgba(0, 0, 0, 0.6)',
      width: 0.45,
    }),
  });
  const batimentsStyle = new Style({
    fill: new Fill({
      color: cadastralProperties.style.batiment.color,
    }),
  });

  switch (feature.get('layer')) {
    case 'parcelles':
      return [parcellesStyle];
    case 'sections':
      return [sectionsStyle];
    case 'batiments':
      return [batimentsStyle];
    default:
      return [sectionsStyle];
  }
};
