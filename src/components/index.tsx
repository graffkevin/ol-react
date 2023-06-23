import { baseMapGroups } from '../layers/basemap';
import { layerGroups } from '../layers/layerTiles';
import { BasemapSwitcher } from './map.rendering/basemap.switcher/Basemap.switcher';
import { LayerSwitcher } from './map.rendering/layer.switcher/LayerSwitcher';
import { Legend } from './map.rendering/legend/Legend';
import { MapRendering } from './map.rendering/Map.rendering';
import { MapContainer } from './style';

export const Map = () => {
  return (
    <MapContainer>
      <BasemapSwitcher basemapGroups={baseMapGroups} />
      <LayerSwitcher layerGroups={layerGroups} />
      <Legend layerGroups={layerGroups} />
      <MapRendering />
    </MapContainer>
  );
};
