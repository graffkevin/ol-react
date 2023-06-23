import VectorTileLayer, { Options } from 'ol/layer/VectorTile';

interface ExtendedVectorTileLayerOptions extends Options {
  layerGroupName?: string;
  layerName?: string;
  legendVisibility?: boolean;
  type?: string;
}

export class ExtendedVectorTileLayer extends VectorTileLayer {
  layerGroupName: string;
  layerName: string;
  legendVisibility: boolean;
  type: string;

  constructor(options: ExtendedVectorTileLayerOptions) {
    super(options);
    this.layerGroupName = options.layerGroupName || '';
    this.layerName = options.layerName || '';
    this.legendVisibility = options.legendVisibility || false;
    this.type = options.type || '';
  }
}

export interface Layer {
  tileLayer: ExtendedVectorTileLayer;
  properties: string;
  sliceActions: any;
}

export interface LayerGroups {
  [key: string]: Layer;
}

interface BasemapLayer {
  layer: any;
  properties: string;
  sliceActions: any;
}

export interface BasemapLayerGroups {
  [key: string]: BasemapLayer;
}
