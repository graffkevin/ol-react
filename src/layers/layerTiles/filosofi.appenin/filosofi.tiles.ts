import MVT from 'ol/format/MVT';
import VectorTileSource from 'ol/source/VectorTile';

import { ExtendedVectorTileLayer } from '../../../components/libs/interfaces';
import { config } from '../../../config';
import store from '../../../store/store';
import { filosofiStyle } from './filosofi.style';

const currentState = store.getState();
const filosofiProperties = currentState.filosofiProperties;

const { FALCO_TILES } = config;
const filosofiAppeninServiceUrl = `${FALCO_TILES}/data/tiles_filosofi_appenin/{z}/{x}/{y}.pbf`;

export const filosofiTilesLayers = new ExtendedVectorTileLayer({
  layerGroupName: filosofiProperties.layerGroupName,
  layerName: filosofiProperties.name,
  legendVisibility: filosofiProperties.legendIsVisible,
  declutter: true,
  source: new VectorTileSource({
    maxZoom: 15,
    format: new MVT({
      idProperty: 'iso_a3',
    }),
    url: filosofiAppeninServiceUrl,
  }),
  visible: filosofiProperties.layerIsvisible,
  style: filosofiStyle,
});
