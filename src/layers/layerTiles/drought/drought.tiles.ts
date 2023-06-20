import MVT from 'ol/format/MVT';
import VectorTileSource from 'ol/source/VectorTile';

import { ExtendedVectorTileLayer } from '../../../components/libs/interfaces';
import { config } from '../../../config';
import store from '../../../store/store';
import { droughtStyleComplex } from './drought.style';

const currentState = store.getState();
const droughtProperties = currentState.droughtProperties;

const { FALCO_TILES } = config;
const droughtAppeninServiceUrl = `${FALCO_TILES}/data/drought/{z}/{x}/{y}.pbf`;

export const droughtTilesLayers = new ExtendedVectorTileLayer({
  layerGroupName: droughtProperties.layerGroupName,
  layerName: droughtProperties.name,
  legendVisibility: droughtProperties.legendIsVisible,
  declutter: true,
  source: new VectorTileSource({
    maxZoom: 15,
    format: new MVT({
      idProperty: 'iso_a3',
    }),
    url: droughtAppeninServiceUrl,
  }),
  visible: droughtProperties.layerIsvisible,
  style: droughtStyleComplex,
});
