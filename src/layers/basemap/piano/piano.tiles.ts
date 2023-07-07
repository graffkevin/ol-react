import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

import { config } from '../../../services/config';

const { PIANO_TILES_API } = config;
const pianoServiceUrl = `${PIANO_TILES_API}/fr@2x/{z}/{x}/{y}.png`;

export const pianoBasemap = new TileLayer({
  visible: false,
  source: new XYZ({
    url: pianoServiceUrl,
  }),
});
