import { Map } from 'ol';

import { clickedOnMapPointStyle } from '../../layers/features/onClick.feature';
import { createPointFromEvent, removeLayer } from './produceGeometries';

function addClickedPointLayerHandler(map: Map, event: Object, layerName: string) {
  removeLayer(map, layerName);
  const clickedPointLayer = createPointFromEvent(event, layerName, clickedOnMapPointStyle);
  map.addLayer(clickedPointLayer);
}

export { addClickedPointLayerHandler };
