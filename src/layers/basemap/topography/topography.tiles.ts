import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

import { config } from '../../../config';

const { ESRI_TILES_API } = config;

const esriWTMBaseMap = `${ESRI_TILES_API}/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`;

export const esriBaseMap = new TileLayer({
  visible: true,
  source: new XYZ({
    url: esriWTMBaseMap,
  }),
});
