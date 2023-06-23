import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import store from '../../../store/store';

const currentState = store.getState();
const osmBasemapProperties = currentState.osmProperties;

export const osmBasemap = new TileLayer({
  visible: osmBasemapProperties.visible,
  source: new OSM(),
});
