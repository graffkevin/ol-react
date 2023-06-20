import { layerGroups } from '../layers/layerTiles';
import { LayerSwitcher } from './map.rendering/layer.switcher/LayerSwitcher';
import { Legend } from './map.rendering/legend/Legend';
import { MapRendering } from './map.rendering/Map.rendering';
import { MapContainer } from './style';

export const Map = () => {
  return (
    <MapContainer>
      <LayerSwitcher layerGroups={layerGroups} />
      <Legend layerGroups={layerGroups} />
      <MapRendering />
    </MapContainer>
  );
};
