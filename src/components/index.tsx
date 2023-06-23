import { baseMapGroups } from '../layers/basemap';
import { layerGroups } from '../layers/layerTiles';
import { RenderBasemapSwitcher } from './map.rendering/basemap.switcher/Render.basemap.switcher';
import { LayerSwitcher } from './map.rendering/layer.switcher/LayerSwitcher';
import { Legend } from './map.rendering/legend/Legend';
import { MapRendering } from './map.rendering/Map.rendering';
import { MapContainer } from './style';

export const Map = () => {
  return (
    <MapContainer>
      <RenderBasemapSwitcher basemapGroups={baseMapGroups} />
      <LayerSwitcher layerGroups={layerGroups} />
      <Legend layerGroups={layerGroups} />
      <MapRendering />
    </MapContainer>
  );
};
