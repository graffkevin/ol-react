import { ExtendedVectorTileLayer } from './extend.layers';

export interface Layer {
  tilesLayers: ExtendedVectorTileLayer;
  properties: string;
  sliceActions: any;
}

export interface LayerGroups {
  [key: string]: Layer;
}
