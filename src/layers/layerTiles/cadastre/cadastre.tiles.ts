import MVT from 'ol/format/MVT';
import VectorTileSource from 'ol/source/VectorTile';

import { ExtendedVectorTileLayer } from '../../../components/libs/interfaces';
import { config } from '../../../services/config';
import store from '../../../services/store/store';
import { cadastreStyle } from './cadastre.style';

const currentState = store.getState();
const cadastralProperties = currentState.cadastralProperties;

const { DATA_GOUV_TILES_API } = config;

const cadastreDataGouvServiceUrl = `${DATA_GOUV_TILES_API}/data/cadastre/{z}/{x}/{y}.pbf`;

export const cadastreGouv = new ExtendedVectorTileLayer({
  layerGroupName: cadastralProperties.layerGroupName,
  layerName: cadastralProperties.name,
  legendVisibility: cadastralProperties.legendIsVisible,
  source: new VectorTileSource({
    format: new MVT(),
    url: cadastreDataGouvServiceUrl,
    maxZoom: 20,
    minZoom: 11,
  }),
  visible: cadastralProperties.layerIsvisible,
  style: cadastreStyle,
});
