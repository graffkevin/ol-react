import { baseMapGroups } from '../layers/basemap';
import { layerGroups } from '../layers/layerTiles';
import { RenderBasemapSwitcher } from './map.rendering/basemap.switcher/Render.basemap.switcher';
import { RenderLayerSwitcher } from './map.rendering/layer.switcher/Render.layer.switcher';
import { Legend } from './map.rendering/legend/Legend';
import { MapRendering } from './map.rendering/Map.rendering';
import { Rotation } from './map.rendering/rotation/Rotation';
import { MapContainer } from './style';

export const Map = () => {
  return (
    <MapContainer>
      <Rotation />
      <RenderBasemapSwitcher basemapGroups={baseMapGroups} />
      <RenderLayerSwitcher layerGroups={layerGroups} />
      <Legend layerGroups={layerGroups} />
      <MapRendering />
    </MapContainer>
  );
};
