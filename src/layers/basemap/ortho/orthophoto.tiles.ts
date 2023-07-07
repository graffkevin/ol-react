import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

import { config } from '../../../services/config';
import store from '../../../services/store/store';

const { IGN_TILES_API } = config;

const orthoHRServicesUrl = `${IGN_TILES_API}/essentiels/geoportail/wmts?layer=ORTHOIMAGERY.ORTHOPHOTOS&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fjpeg&TileMatrix={z}&TileCol={x}&TileRow={y}`;

const currentState = store.getState();
const orthoBasemapProperties = currentState.orthoProperties;

export const orthoHRBasemap = new TileLayer({
  visible: orthoBasemapProperties.visible,
  source: new XYZ({
    url: orthoHRServicesUrl,
  }),
});
