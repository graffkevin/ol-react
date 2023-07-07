import { baseMapGroups } from '../../layers/basemap';
import { layerGroups } from '../../layers/layerTiles';
import { RenderBasemapSwitcher } from './basemap.switcher/Render.basemap.switcher';
import { RenderLayerSwitcher } from './layer.switcher/Render.layer.switcher';
import { Legend } from './legend/Legend';
import { Rotation } from './rotation/Rotation';

export const Controllers = () => {
  return (
    <>
      <Rotation />
      <RenderBasemapSwitcher basemapGroups={baseMapGroups} />
      <RenderLayerSwitcher layerGroups={layerGroups} />
      <Legend layerGroups={layerGroups} />
    </>
  );
};
