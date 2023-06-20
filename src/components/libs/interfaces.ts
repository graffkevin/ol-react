import VectorTileLayer, { Options } from 'ol/layer/VectorTile';

interface ExtendedVectorTileLayerOptions extends Options {
  layerGroupName?: string;
  layerName?: string;
  legendVisibility?: boolean;
}

export class ExtendedVectorTileLayer extends VectorTileLayer {
  layerGroupName: string;
  layerName: string;
  legendVisibility: boolean;

  constructor(options: ExtendedVectorTileLayerOptions) {
    super(options);
    this.layerGroupName = options.layerGroupName || '';
    this.layerName = options.layerName || '';
    this.legendVisibility = options.legendVisibility || false;
  }
}

export interface Layer {
  tilesLayers: ExtendedVectorTileLayer;
  properties: string;
  sliceActions: any;
}

export interface LayerGroups {
  [key: string]: Layer;
}
