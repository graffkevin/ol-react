import MVT from 'ol/format/MVT';
import VectorTileSource from 'ol/source/VectorTile';

import { ExtendedVectorTileLayer } from '../../../components/libs/interfaces';
import { config } from '../../../config';
import store from '../../../store/store';
import { floodStyleSimple } from './flood.style';

const currentState = store.getState();
const floodProperties = currentState.floodProperties;

const { FALCO_TILES } = config;

const floodAppeninServiceUrl = `${FALCO_TILES}/data/overflow_runoff/{z}/{x}/{y}.pbf`;

export const floodAppeninTilesLayers = new ExtendedVectorTileLayer({
  layerGroupName: floodProperties.layerGroupName,
  layerName: floodProperties.name,
  legendVisibility: floodProperties.legendIsVisible,
  declutter: true,
  source: new VectorTileSource({
    maxZoom: 15,
    format: new MVT({
      idProperty: 'iso_a3',
    }),
    url: floodAppeninServiceUrl,
  }),
  visible: floodProperties.layerIsvisible,
  style: floodStyleSimple,
});
