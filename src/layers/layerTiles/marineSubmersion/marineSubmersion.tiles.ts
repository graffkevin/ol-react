import MVT from 'ol/format/MVT';
import VectorTileSource from 'ol/source/VectorTile';

import { ExtendedVectorTileLayer } from '../../../components/libs/extend.layers';
import { config } from '../../../config';
import store from '../../../store/store';
import { marineSubmersionStyleSimple } from './marineSubmersion.style';

const currentState = store.getState();
const marineSubmersionProperties = currentState.marineSubmersionProperties;

const { FALCO_TILES } = config;

const submersionAppeninServiceUrl = `${FALCO_TILES}/data/submersion/{z}/{x}/{y}.pbf`;

export const submersionTilesLayers = new ExtendedVectorTileLayer({
  layerGroupName: marineSubmersionProperties.layerGroupName,
  layerName: marineSubmersionProperties.name,
  legendVisibility: marineSubmersionProperties.legendIsVisible,
  declutter: true,
  source: new VectorTileSource({
    maxZoom: 15,
    format: new MVT({
      idProperty: 'iso_a3',
    }),
    url: submersionAppeninServiceUrl,
  }),
  visible: marineSubmersionProperties.layerIsvisible,
  style: marineSubmersionStyleSimple,
});
