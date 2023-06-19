// import { useSelector } from 'react-redux';

import { layerGroups } from '../layers/layerTiles';
// import { layerPropertiesModel } from './libs/layer.model';
import { LayerSwitcher } from './map.rendering/layerSwitcher/LayerSwitcher';
import { Legend } from './map.rendering/legend/Legend';
import { MapRendering } from './map.rendering/Map.rendering';
import * as Style from './style';

export const Map = () => {
  // const drougthLayerName = useSelector((state: any) => state.droughtProperties.name);
  // const drougthLegendVisibility = useSelector(
  //   (state: any) => state.droughtProperties.legendIsVisible,
  // );
  // const drougthValues = layerPropertiesModel('droughtProperties');

  return (
    <Style.MapContainer>
      <LayerSwitcher layerGroups={layerGroups} />
      <Legend layerGroups={layerGroups} />
      <MapRendering />
    </Style.MapContainer>
  );
};
