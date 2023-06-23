import { BasemapLayerGroups } from '../../components/libs/interfaces';
import { osmSliceActions } from './openStreetMap/osm.properties';
import { osmBasemap } from './openStreetMap/osm.tiles';
import { orthoSliceActions } from './ortho/ortho.properties';
import { orthoHRBasemap } from './ortho/orthophoto.tiles';

export const baseMapGroups: BasemapLayerGroups = {
  OSM: {
    layer: osmBasemap,
    properties: 'osmProperties',
    sliceActions: osmSliceActions,
  },
  ortho: {
    layer: orthoHRBasemap,
    properties: 'orthoProperties',
    sliceActions: orthoSliceActions,
  },
};
