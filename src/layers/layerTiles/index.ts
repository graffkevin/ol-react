import { LayerGroups } from '../../components/libs/interfaces';
import { droughtSliceActions } from './drought/drought.properties';
import { droughtTilesLayers } from './drought/drought.tiles';
import { filosofiSliceActions } from './filosofi.appenin/filosofi.properties';
import { filosofiTilesLayers } from './filosofi.appenin/filosofi.tiles';

export const layerGroups: LayerGroups = {
  drought: {
    tilesLayers: droughtTilesLayers,
    properties: 'droughtProperties',
    sliceActions: droughtSliceActions,
  },
  filosofi: {
    tilesLayers: filosofiTilesLayers,
    properties: 'filosofiProperties',
    sliceActions: filosofiSliceActions,
  },
};
