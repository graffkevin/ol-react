import { useState } from 'react';

import empty from '../../../icons/basemap/empty.svg';
import { BasemapLayerGroups } from '../../libs/interfaces';
import { BasemapSwitcherActivation } from './render.basemap.style';
import { BasemapSwitcher } from './switcher/Basemap.switcher';

interface BasemapSwitcherProps {
  basemapGroups: BasemapLayerGroups;
}

export const RenderBasemapSwitcher = ({ basemapGroups }: BasemapSwitcherProps) => {
  const [activate, setActivate] = useState(false);
  return (
    <>
      <BasemapSwitcherActivation
        type="image"
        alt="basemap-switcher"
        src={empty}
        onClick={() => setActivate(!activate)}
      />
      {activate && <BasemapSwitcher basemapGroups={basemapGroups} />}
    </>
  );
};
