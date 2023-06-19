import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

export const osmBasemap = new TileLayer({
  visible: true,
  source: new OSM(),
});
